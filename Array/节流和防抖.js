/**
 * 节流 一段时间内只执行一次
 */

function throttle (fn, delay) {
    let flag = true;
    if (flag) {
        flag = false;
        setTimeout(() => {
            flag = true;
        }, delay)
        return fn();
    }
}

/**
 * 防抖 如果被打断执行，则重新开始计时
 */

function debounce (fn, delay) {
    let timer = null;
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(fn(), delay);
}