/*
* 嵌套树转为扁平化树
* @param {Object|Array}
* @param {Object} 数据相应的字段映射
* @return {Array}
* */

function treeToArray(tree, ops) {
    var stack, r = [];
    if(tree instanceof Array) {
        stack = tree;
    } else {
        stack = [tree];
    }
    ops = ops || {};
    var children = ops.children || 'children';
    var keys = ops.keys || [];
    while(stack.length) {
        var o = stack.shift();
        var t = {};
        keys.forEach(function(k) {
           t[k] = o[k];
        });
        r.push(t);
        if(o[children]) {
            o[children].forEach(function(v) {
                stack.push(v);
            });
        }
    }
    return r;
}

export default treeToArray;