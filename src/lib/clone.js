/*
* 完全克隆一个对象，克隆成功返回新的对象，失败返回false
* @param { Object | Array }
* @return { Object | Array | Boolean }
*/
function clone(o) {
    var obj, k, type = Object.prototype.toString.call(o).slice(8, -1).toLowerCase();
    if(type === 'object') {
        obj = {};
    } else if(type === 'array') {
        obj = [];
    } else {
        return arguments.length > 0 ? o : false;
    }
    for(k in o) {
        if(o.hasOwnProperty(k)) {
            obj[k] = clone(o[k]);
        }
    }
    return obj;
}