/*
* 倒计时
* @param {Object} time:秒数,onUpdate:每秒回调,onEnd:执行完成回调
* @return {Object} 可以终止当前倒计时
* */
function countDown(ops) {
    var noop = function() {}, tid;
    ops = ops || {};
    if(isNaN(ops.time)) return;
    ops.time = Math.abs(parseInt(ops.time));
    ops.onUpdate = ops.onUpdate || noop;
    ops.onEnd = ops.onEnd || noop;
    ops.onUpdate(format(ops.time));
    if(ops.time > 0) {
        tid = setInterval(function() {
            ops.onUpdate(format(--ops.time));
            if(ops.time === 0) {
                ops.onEnd();
                clearInterval(tid);
            }
        }, 1000);
    } else {
        ops.onEnd();
    }
    function format(time) {
        var d = parseInt(time / 86400),
            h = parseInt((time - d * 86400) / 3600),
            m = parseInt((time - d * 86400 - h * 3600) / 60),
            s = time - d * 86400 - h * 3600 - m * 60;
        return {
            d: d,
            h: h,
            m: m,
            s: s,
            t: time
        }
    }
    return {
        kill: function() {
            clearInterval(tid);
        }
    };
}

export default countDown;