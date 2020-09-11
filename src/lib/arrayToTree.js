/*
* 将扁平化的树型数组转化为嵌套型
* @param {Array}
* @return {Array|Object}
* */
function arrayToTree(arr) {
    var map = {}, root = [];
    arr.forEach(d => {
        map[d.id] = d;
    });
    arr.forEach(d => {
       if(map[d.pid]) {
           if(!map[d.pid].children) map[d.pid].children = [];
           map[d.pid].children.push(d);
       } else {
           root.push(map[d.id]);
       }
    });
    return root.length > 1 ? root : root[0];
}

export default arrayToTree;