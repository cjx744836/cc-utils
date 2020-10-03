/*
* 列出指定数组的所有组合，不指定n，返回全部组合
* @param {Array} 要组合的数组
* @param {Number} 取n的组合，
* */

function combination(arr, n) {
    var a = [], i;
    var l = Math.pow(2, arr.length);
    for(i = 0; i < arr.length; i++) {
        a.push([]);
    }
    for (i = 1; i < l; i++) {
        var t = [];
        for (var s = i,k = 0; s > 0; s >>= 1, k++) {
            if (s & 1 === 1) {
                t.push(arr[k]);
            }
        }
        a[t.length - 1].push(t.join(''));
    }
    if(n > 0 && n <= arr.length) return a[n - 1];
    return a;
}

export default combination;