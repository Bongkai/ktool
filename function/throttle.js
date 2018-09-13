import now from '../date/now.js';

/**
 * 函数节流
 * 
 * @category Function
 * @param {Function} fn  要进行节流操作的方法
 * @param {Number} delay  一个节流周期的时间间隔, 以毫秒计
 * @param {Object} options  有两个属性, leading 和 trailing; leading 默认为 true, 
 *                          此时 fn 首次触发时会执行, 若为 false, 则首次不执行;
 *                          trailing 默认为 true, 此时 fn 在最后一次节流周期的结束时会执行,
 *                          若为 false, 则不会执行;
 *                          需要注意的是, 这两个参数不能同时配置;
 * @returns {Function}  返回包装后的回调函数, 即具有节流功能的 fn 函数
 */
function throttle(fn, delay, options) {
  let prev = 0, res = null, timer = null, context = null, args = null;
  options = options || {};

  // 一个 delay 周期结束后执行的回调函数
  const fnTimeout = function() {
    clearTimeout(timer);
    timer = null;
    res = fn.apply(context, args);
    // 若 options.leading === false 则回调执行完把 prev 重置为 0
    prev = options.leading === false ? 0 : now();
  }

  return function() {
    context = this;
    args = arguments;
    const curr = now();
    // 若此时是在 throttle 刚开始执行时，且设定 fn 首次不立刻执行，便给 prev 赋值，
    // 如此一来 prev 从一开始便有了一个 now 的值，remaining > 0，fn 便不会立刻执行
    if(prev === 0 && options.leading === false) prev = curr;
    
    // 距离下次触发 fn 的剩余时间
    const remaining = delay - (curr - prev);
    // remaining > delay，表示系统时间在此期间被修改过
    if(remaining <= 0 || remaining > delay) {
      if(timer) {
        // 清除定时器，并解除引用，避免内存溢出
        clearTimeout(timer);
        timer = null;
      };
      res = fn.apply(context, args);
      prev = curr;
    }
    // 若此时不存在定时器 timer，且设定执行最后一次 fn 的话，便设置一个定时器，
    // 在 remaining 时间后，执行这最后一个 fn
    else if(!timer && options.trailing !== false) {
      timer = setTimeout(fnTimeout, remaining);
    }
    return res;
  };
}

export default throttle;


/* 函数节流（基本版） */
// static throttle(fn, delay) {
//   let prev = 0, res = null;
//   // return 回去的 function 并不受 throttle 限制
//   return ()=> {
//     const cur = now();
//     // 这里的 fn 才受 throttle 限制
//     if(cur - prev > delay) {
//       res = fn();
//       prev = cur;
//     }
//     return res;
//   };
// }