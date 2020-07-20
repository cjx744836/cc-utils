/*
* 防抖函数
* @param {Function}
* @param {Number}
* @param {Boolean}
* @return {Function}
* */
function debounce(fn, wait, immediate) {
    let prev, last = 0, tid, context = this;
    function exec(args) {
        fn.apply(context, args);
        last = prev;
    }
    return function() {
        prev = Date.now();
        let args = arguments;
        clearTimeout(tid);
        if(prev - last > wait && immediate) {
            exec(args);
        } else {
            last = prev;
            tid = setTimeout(exec, wait);
        }
    }
}

export default debounce;