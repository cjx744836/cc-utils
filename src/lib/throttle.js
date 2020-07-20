/*
* 节流函数
* @param {Function}
* @param {Number}
* @param {Boolean}
* @return {Function}
* */
function throttle(fn, wait, immediate) {
    let prev, last = 0, tid, pending = true, context = this;
    function exec(args) {
        fn.apply(context, args);
        last = prev;
        pending = true;
    }
    return function() {
        prev = Date.now();
        let args = arguments;
        if(prev - last > wait && immediate) {
            clearTimeout(tid);
            exec(args);
        } else {
            if(pending) {
                pending = false;
                tid = setTimeout(exec, wait);
            }
        }
    }
}

export default throttle;