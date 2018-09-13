
/**
 * 函数防抖
 * 
 * @category Function
 * @param {Function} fn  要进行防抖操作的方法
 * @param {Number} delay  一个防抖周期的时间间隔, 以毫秒计
 * @param {Boolean} immediate  如果该值为 true, 则 fn 在第一次调用时会立即执行
 * @returns {Function}  返回包装后的回调函数, 即具有防抖功能的 fn 函数
 */
function debounce(fn, delay, immediate) {
  let timer = null, res = null, context = null, args = null;
  
  const later = function() {
    clearTimeout(timer);
    timer = null;
    // 若设置 fn 延迟执行，则在 delay 时间到时执行 fn
    if(immediate !== true) {
      res = fn.apply(context, args);
    }
  }

  return function() {
    context = this;
    args = arguments;
    // fn 延迟执行的分支 (immediate !== true)
    if(immediate !== true) {
      clearTimeout(timer);
      timer = setTimeout(later, delay);
    } 
    // fn 立即执行的分支 (immediate === true)
    else if(!timer) {
      // 没有定时器，则立即执行 fn，并设置一个空的定时器，
      // 该定时器在 delay 期间没被重置则自行清除
      res = fn.apply(context, args);
      timer = setTimeout(later, delay);
    } else {
      // 已有定时器，即在不超过 delay 时间之前已有调用 fn 的行为，则将定时器时间重置为 delay
      clearTimeout(timer);
      timer = setTimeout(later, delay);
    }
    return res;
  };
}

export default debounce;


/* 函数防抖（基本版） */
// static debounce(fn, delay) {
//   let timer = null, res = null;
//   const later = ()=> {
//     clearTimeout(timer);
//     timer = null;
//     res = fn();
//   };
//   return ()=> {
//     clearTimeout(timer);
//     timer = setTimeout(later, delay);
//     return res;
//   };
// }