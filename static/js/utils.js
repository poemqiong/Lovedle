
function Ajax(url, input, bind, param) {
    $.ajax({
        url: url,
        data: JSON.stringify(input),
        dataType: "json",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            bind(data.d, param);
        }
    });
}

function get_url_param() {
    var url = window.document.location.href;
    var param_url = {};
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        param_url[hash[0]] = hash[1];
    }
    return param_url;
}

function my_urldecode(str) {
    return decodeURIComponent((str + '').replace(/\+/g, '%20'));
}
