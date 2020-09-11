/*
* 嵌套树转为扁平化树
* @param {Object|Array}
* @param {Array} 字段值
* @return {Array}
* */

function treeToArray(tree, keys) {
    var stack, r = [];
    keys = keys || [];
    if(tree instanceof Array) {
        stack = tree;
    } else {
        stack = [tree];
    }
    while(stack.length) {
        var o = stack.shift();
        var t = {};
        keys.forEach(function(k) {
           t[k] = o[k];
        });
        r.push(t);
        if(o.children) {
            o.children.forEach(function(v) {
                stack.push(v);
            });
        }
    }
    return r;
}

export default treeToArray;