
/**
 * 计算 fn 运行完成所消耗的时间（以毫秒计）
 * 
 * @category Function
 * @param {Function} fn  要测试的函数
 * @param {Array} args  函数 fn 所需的参数, 用数组形式表示
 * @returns {Number}  返回函数 fn 执行消耗的时间
 */
function spendTime(fn, args) {
  const before = new Date();
  let after = null;
  const _fn = function() {
    fn.apply(fn, args);
    after = new Date();
  }
  _fn();
  return after - before;
}

export default spendTime;