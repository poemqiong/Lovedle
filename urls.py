#!/usr/bin/env python
# -*- coding: utf-8 -*- 

__author__ = 'Michael Liao'

import time, json, base64, logging, hashlib, re, urllib,urllib2
from datetime import datetime, tzinfo, timedelta

from transwarp.web import ctx, get, post, route, seeother, forbidden, jsonresult, Template
from transwarp import db

from weibo import APIError, APIClient

_TD_ZERO = timedelta(0)
_TD_8 = timedelta(hours=8)

class UTC8(tzinfo):
    def utcoffset(self, dt):
        return _TD_8

    def tzname(self, dt):
        return "UTC+8:00"

    def dst(self, dt):
        return _TD_ZERO

_UTC8 = UTC8()

def _format_datetime(dt):
    t = datetime.strptime(dt, '%a %b %d %H:%M:%S +0800 %Y').replace(tzinfo=_UTC8)
    return time.mktime(t.timetuple())

def _format_user(u):
    return dict(id=str(u.id), screen_name=u.screen_name, profile_url=u.profile_url, verified=u.verified, verified_type=u.verified_type, profile_image_url=u.profile_image_url)

def _format_weibo(st):
    user = st.user
    r = dict(
        user = _format_user(st.user),
        text = st.text,
        created_at = _format_datetime(st.created_at),
        reposts_count = st.reposts_count,
        comments_count = st.comments_count,
    )
    if 'original_pic' in st:
        r['original_pic'] = st.original_pic
    if 'thumbnail_pic' in st:
        r['thumbnail_pic'] = st.thumbnail_pic
    if 'retweeted_status' in st:
        r['retweeted_status'] = _format_weibo(st.retweeted_status)
    return r

@get('/')
def index():
    u = _check_cookie()
    if u is None:
        return Template('static/signin.html')
    return Template('static/index.html', user=u)

@post('/update')
@jsonresult
def update():
    u = _check_cookie()
    if u is None:
        return dict(error='failed', redirect='/signin')
    client = _create_client()
    client.set_access_token(u.auth_token, u.expired_time)
    try:
        r = client.statuses.update.post(status=ctx.request['status'])
        if 'error' in r:
            return r
        return dict(result='success')
    except APIError, e:
        return dict(error='failed')

@route('/friends')
@jsonresult
def friends():
    u = _check_cookie()
    if u is None:
        return dict(error='failed', redirect='/signin')
    client = _create_client()
    client.set_access_token(u.auth_token, u.expired_time)
    try:
        r = client.friendships.friends.get(uid=u.id, count=99)
        return [_format_user(u) for u in r.users]
    except APIError, e:
        return dict(error='failed')

@route('/load')
@jsonresult
def load():
    u = _check_cookie()
    if u is None:
        return dict(error='failed', redirect='/signin')
    client = _create_client()
    client.set_access_token(u.auth_token, u.expired_time)
    try:
        r = client.statuses.home_timeline.get()
        return [_format_weibo(s) for s in r.statuses]
    except APIError, e:
        return dict(error='failed')

@post('/hint')
@jsonresult
def hint():
    u = _check_cookie()
    if u is None:
        return dict(error='failed', redirect='/signin')
    client = _create_client()
    client.set_access_token(u.auth_token, u.expired_time)
    try:
        return client.remind.unread_count.get()
    except APIError, e:
        return dict(error='failed')

@get('/signin')
def signin():
    client = _create_client()
    raise seeother(client.get_authorize_url())

@get('/signout')
def signout():
    ctx.response.set_cookie(_COOKIE, 'deleted', max_age=0)
    raise seeother('/')

@get('/callback')
def callback():
    i = ctx.request.input(code='')
    code = i.code
    client = _create_client()
    r = client.request_access_token(code)
    logging.info('access token: %s' % json.dumps(r))
    access_token, expires_in, uid = r.access_token, r.expires_in, r.uid
    client.set_access_token(access_token, expires_in)
    u = client.users.show.get(uid=uid)
    logging.info('got user: %s' % uid)
    users = db.select('select * from users where id=?', uid)
    user = dict(name=u.screen_name, \
            image_url=u.avatar_large or u.profile_image_url, \
            statuses_count=u.statuses_count, \
            friends_count=u.friends_count, \
            followers_count=u.followers_count, \
            verified=u.verified, \
            verified_type=u.verified_type, \
            auth_token=access_token, \
            expired_time=expires_in)
    if users:
        db.update_kw('users', 'id=?', uid, **user)
    else:
        user['id'] = uid
        db.insert('users', **user)
    _make_cookie(uid, access_token, expires_in)
    raise seeother('/')

_COOKIE = 'authuser'
_SALT = 'A random string'

def _make_cookie(uid, token, expires_in):
    expires = str(int(expires_in))
    s = '%s:%s:%s:%s' % (str(uid), str(token), expires, _SALT)
    md5 = hashlib.md5(s).hexdigest()
    cookie = '%s:%s:%s' % (str(uid), expires, md5)
    ctx.response.set_cookie(_COOKIE, base64.b64encode(cookie).replace('=', '_'), expires=expires_in)

def _check_cookie():
    try:
        b64cookie = ctx.request.cookies[_COOKIE]
        cookie = base64.b64decode(b64cookie.replace('_', '='))
        uid, expires, md5 = cookie.split(':', 2)
        if int(expires) < time.time():
            return
        L = db.select('select * from users where id=?', uid)
        if not L:
            return
        u = L[0]
        s = '%s:%s:%s:%s' % (uid, str(u.auth_token), expires, _SALT)
        if md5 != hashlib.md5(s).hexdigest():
            return
        return u
    except BaseException:
        pass

_APP_ID = ''
_APP_SECRET = ''
_ADMIN_PASS = 'admin'

def _Downloud_All(screen_name):
    u = _check_cookie()
    if u is None:
        return dict(error='failed', redirect='/signin')
    client = _create_client()
    client.set_access_token(u.auth_token, u.expired_time)

    # 目标id
    #uid_tar = 1005051640494672#5439666129test
    #screen_name = u"经典语录"
    url_name = screen_name.encode('utf-8')
    urllib.quote(url_name)
    result = []
    
    friendship_url = 'https://api.weibo.com/2/friendships/create.json?'
    #data = ('%s%s%s%s' % ( 'uid=',str(uid_tar),'&access_token=',client.access_token))
    data = ('%s%s%s%s' % ( 'screen_name=',url_name,'&access_token=',client.access_token))
    
    # 关注目标
    #r = urllib2.Request(url= friendship_url, data=data)
    #f = urllib2.urlopen(r)

    length = 1
    index = 1
    count = 0
    while length > 0 and count < 1000:
        statuses = client.statuses__friends_timeline(page=index)['statuses']  
        length = len(statuses)  
        #输出了部分信息  
        for i in range(0,length): 
            #print index, i, length, count
            #if (statuses[i]['user']['id'] == uid_tar):
            count = count + 1 
            sigresult = { 'text': statuses[i]['text'], 'picurl': statuses[i]['pic_urls'],'time':  statuses[i]['created_at']}
            #print sigresult['text']
            result.append(sigresult)
            #print result[count-1]['text']
        index = index + 1
    
    #取消关注
    #friendship_des_url = 'https://api.weibo.com/2/friendships/destroy.json?'
    #r = urllib2.Request(url= friendship_des_url, data=data)
    #f = urllib2.urlopen(r)

    length =  len(result)
    print length

    filename = 'positive_word.rtf'
    f=open(filename,'r')
    lines=f.readlines()
    count=0
    query={}
    query1=[]
  
    for line in lines:
        #print isinstance(line, unicode)
        line=line.split()
        line=line[0]
        query[count]=line
        sigquery = { 'query': line , 'weight': 0, 'picurl': [] }
        query1.append(sigquery)
        count=count+1
    #print count 
    f.close()

    for i in range(0,count):
        for j in range(0,length): 
            rs = result[j]['text'].encode('utf-8')
            if  rs.find(query[i]) >= 0:
                query1[i]['weight'] = query1[i]['weight'] + 1
                if len(result[j]['picurl'])>0:
                    query1[i]['picurl'].append({'picurl':result[j]['picurl'][0],'time':result[j]['time']})
    # 新浪返回的token，类似abc123xyz456

    #screen_name = 'testName'
    db.update('delete from pictures where username=?', screen_name)
    # insert labels
    for i in range(0, count):
        l = query1[i]['query']#.decode('utf-8')
        w = query1[i]['weight']
        pics = query1[i]['picurl']

        label = dict(
                username=screen_name, \
                label=l, \
                weight=w
                )

        lb = db.select('select * from labels where label=? and username=?', l, screen_name)
        if lb:
            db.update_kw('labels', 'label=? and username=?', l, screen_name, **label)
        else:
            db.insert('labels', **label)

        li = db.select('select id from labels where label=? and username=?', l, screen_name)
        #print li

        for j in range(0, len(pics)):
            picture = dict(
                        picUrl=pics[j]['picurl'], \
                        upTime=pics[j]['time'], \
                        labelID=li[0]['id'], \
                        username=screen_name
                        )
            db.insert('pictures', **picture)

    return query1

def _get_Text(username):
    lb = db.select('select * from labels where username=? and weight>0', username)
    txt = []
    wei = []

    for i in range(0, len(lb)):
        print lb[i]['label']
        txt.append(lb[i]['label'])
        wei.append(lb[i]['weight'])

    return {"text": txt, "weight":wei }
    

#第一个页面简单代码：
@get('/search')
def show_search():
    return Template('static/index.html')

#第二个页面简单代码：
@post('/search')
def do_search():
    httpVal = ctx.request.input()
    userId = httpVal.get('userID', '')

    print userId

    _Downloud_All(userId)

    ls = _get_Text(userId) #得到用户相关的标签云
    #ls = {
     #   "text" : ['Loredfsm', 'Lorem1'],
      #  "weight" : [12, 12.2]
       # }

    texts = ls["text"]
    weights = ls["weight"]

    html_text = ''''''; 
    for i in range(0, len(texts)):
        html_text += '''{text: "'''
        html_text += texts[i]
        html_text += '''", weight: '''
        html_text += str(weights[i])
        html_text += ''', link: "photo?txt='''
        html_text += texts[i]
        html_text += '''&usr='''
        html_text += userId
        html_text += '''"}'''
        if i != len(texts)-1:
            html_text += ''','''

    return Template('static/cloud.html', labels=html_text)

def _get_Image(label, username):
    li = db.select('select id from labels where label=? and username=?', label, username)

    print li

    imgs = db.select('select * from pictures where labelID=?', li[0]['id'])
    src = []
    dec = []

    for i in range(0, len(imgs)):
        full = imgs[i]['picUrl']
        tm = imgs[i]['upTime']

        cn = re.findall('[a-z0-9A-Z]+.jpg', full)
        full = cn[0]

        tm = tm[4:10] + tm[25:30]

        src.append(full)
        dec.append(tm)

    return {"src": src, "dec": dec}


@get('/photo')
def do_photo():
    httpVal = ctx.request.input()
    txt = httpVal.get('txt', '')
    usr = httpVal.get('usr', '')
    #print txt, usr

    ls = _get_Image(txt, usr); # 获取某个对应标签的图片
    src = ls["src"]
    dec = ls["dec"]

    html_text = ''''''; 
    for i in range(0, len(src)):
        html_text += '''<div class="cell"><a href="#"><img src="http://ww3.sinaimg.cn/bmiddle/'''
        html_text += src[i]
        html_text += '''" /></a><p><a href="#">'''
        html_text += dec[i]
        html_text += '''</a></p></div>'''
  
    return Template('static/pic.html', txt=html_text, encoding="utf-8")


@get('/photo1')
def do_photo1():
    ls = {
        "src" : ['1', '2', '3', '4'],
        "dec" : [u"图片1", 'Image2', 'Image3', 'Image4']
        } # .decode('utf-8')

    src = ls["src"]
    dec = ls["dec"]

    html_text = ''''''; 
    for i in range(0, len(src)):
        html_text += '''<div class="cell"><a href="#"><img src="/static/images/'''
        html_text += src[i]
        html_text += '''.jpg" /></a><p><a href="#">'''
        #html_text += dec[i]
        html_text += '''</a></p></div>'''
  
    return Template('static/pic.html', txt=html_text, encoding="utf-8")

@get('/cloud')
def show_cloud():
    httpVal = ctx.request.input()
    print httpVal
    userId = httpVal.get('userID', '')
    print userId
    return userId


@get('/cloud2')
def show_cloud2():
    ##### labels = get_Text(userId); #得到用户相关的标签云

    labels = {
        "text" : ['Lorem', 'Lorem1'],
        "weight" : [12, 12.2]
        }

    html_text = '''<html>'''
    texts = labels["text"]
    weights = labels["weight"]

    for i in range(0, len(texts)):
        html_text += '''<a href = "/photo?text='''
        html_text += texts[i]
        html_text += '''" target="_blank">'''
        html_text += texts[i] 
        html_text += '''('''
        html_text += str(weights[i])
        html_text += ''')</a></br>'''
    html_text += '''</html>'''
    
    return html_text


@get('/admin')
def show_admin():
    return '''<html>
<body>
<form action="/admin" method="post">
<p>Input password:</p>
<p><input type="password" name="passwd" /></p>
</form>
</body>
</html>
'''

@post('/admin')
def do_admin():
    global _APP_ID, _APP_SECRET, _ADMIN_PASS

    i = ctx.request.input()
    if i.passwd != _ADMIN_PASS:
        raise forbidden()
    admin_pass = i.get('new_passwd', '')
    app_id = i.get('app_id', '')
    app_secret = i.get('app_secret', '')
    msg = ''
    if admin_pass and app_id and app_secret:
        db.update('delete from settings')
        db.update('insert into settings (id, value) values (?, ?)', 'app_id', app_id)
        db.update('insert into settings (id, value) values (?, ?)', 'app_secret', app_secret)
        db.update('insert into settings (id, value) values (?, ?)', 'admin_pass', admin_pass)
        msg = 'Updated!'
        _APP_ID = app_id
        _APP_SECRET = app_secret
        _ADMIN_PASS = admin_pass
    return '''<html>
<body>
<p>%s</p>
<form action="/admin" method="post">
<p>App ID:</p>
<p><input type="text" name="app_id" value="%s" /></p>
<p>App Secret:</p>
<p><input type="text" name="app_secret" value="%s" /></p>
<p>Old Password:</p>
<p><input type="text" name="passwd" readonly="readonly" value="%s" /></p>
<p>New Password:</p>
<p><input type="text" name="new_passwd" value="%s" /></p>
<p>WARNING: click submit will update app_id, app_secret and admin password!</p>
<p><input type="submit" name="submit" value="Submit" /></p>
</form>
</body>
</html>
''' % (msg, _APP_ID, _APP_SECRET, _ADMIN_PASS, _ADMIN_PASS)

def _load_app_info():
    global _APP_ID, _APP_SECRET, _ADMIN_PASS
    for s in db.select('select * from settings'):
        if s.id == 'app_id':
            _APP_ID = s.value
        if s.id == 'app_secret':
            _APP_SECRET = s.value
        if s.id == 'admin_pass':
            _ADMIN_PASS = s.value

def _create_client():
    print _APP_ID, _APP_SECRET
    #return APIClient(_APP_ID, _APP_SECRET, 'http://webkdd.org:8081/callback')
    return APIClient(_APP_ID, _APP_SECRET, 'http://zhiweitasheji.com:8081/callback')

_load_app_info()
