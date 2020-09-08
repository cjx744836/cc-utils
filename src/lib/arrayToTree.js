/*
* 将扁平化的树型数组转化为嵌套型
* @param {Array}
* @param {Object}
* @return {Array|Object}
* */
function arrayToTree(arr, ops) {
    var data = JSON.parse(JSON.stringify(arr));
    ops = ops || {};
    var id = ops.id || 'id';
    var pid = ops.pid || 'pid';
    var f, s = [], c = [], len = data.length, i, j;
    for(i = 0; i < len; i++) {
        f = true;
        for(j = 0; j < len; j++) {
            if(data[i][pid] === data[j][id]) {
                f = false;
                if(!data[j].children) data[j].children = [];
                data[j].children.push(data[i]);
                break;
            }
        }
        if(f) {
            s.push(i);
        }
    }
    if(s.length > 1) {
        s.forEach(n => c.push(data[n]));
    } else {
        c = data[s[0]];
    }
    return c;
}

export default arrayToTree;