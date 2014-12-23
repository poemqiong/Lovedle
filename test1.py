#!/usr/bin/python
# -*- coding: utf-8 -*-
#
#author:         rex
#blog:           http://iregex.org
#filename        py_utf8_unicode.py
#created:        2010-06-27 09:11

import re

#length =  len(result)
filename = 'positive_word.rtf'
#filename = filename.encode('unicode')
f=open(filename,'r')

lines=f.readlines()

string = '中文网站喜欢方便优秀吸引'
  
for line in lines:
	line = line.split()
	if len(line) != 0:
		line = line[0]

		cn = re.findall(line, string)
		
		if len(cn) != 0: 
			cn = "".join(cn)
			print cn

 