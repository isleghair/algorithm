/**
 * 节流 一段时间内只执行一次
 */

function throttled2 (fn, delay = 500) {
    let timer = null
    return function (...args) {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, args)
                timer = null
            }, delay);
        }
    }
}

/**
 * 防抖 如果被打断执行，则重新开始计时 --经典版
 */

function debounce (fn, delay) {
    let timer = null;
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, args)
            timer = null;
        }, delay);
    }
}

/**
 * react 中的版本
 */

function useDebounce (fn, delay) {
    const refTimer = useRef({});

    return function (...args) {
        if (refTimer.current) {
            clearTimeout(refTimer.current);
        }
        refTimer.current = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}

function debounce (fn, delay) {
    let timer = null;
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay);
    }
}

function debounce (fn, delay) {
    const refTimer = useRef({})
    return function (...args) {
        if (refTimer.current) {
            clearTimeout(refTimer.current)
        }
        refTimer.current = setTimeout(() => {
            fn.apply(this, args)
        }, delay);
    }
}

function debounce (fn, dealy) {
    let timer = null;
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, dealy)
    }
}

function fn (...args) {
    console.log(this, args);
}
let obj = {
    myname: "张三"
}

fn.apply(obj, [1, 2]); // this会变成传入的obj，传入的参数必须是一个数组；
// fn(1, 2) // this指向window

function debounce (fn, delay) {
    let timer = null;
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}