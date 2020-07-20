/*
* 获取所有网址参数
* @return {Object}
*/
function queryURLParam() {
    var o = {}, key, v, s, i, len;
    var params = window.location.search.replace(/^\?/, "").split("&");
    for(i = 0, len = params.length; i < len; i++) {
        if(params[i]) {
            s = params[i].split('=');
            key = s[0];
            v = s[1] || '';
            if(typeof o[key] === 'undefined') {
                o[key] = v;
            } else if(o[key] instanceof Array) {
                o[key].push(v);
            } else {
                o[key] = [o[key], v];
            }
        }
    }
    return o;
}

export default queryURLParam;