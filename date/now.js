
/**
 * 获取当前的时间对应的毫秒数
 * 
 * @category Date
 * @returns {Number}  返回当前时间对应的毫秒数
 */
function now() {
  return (new Date()).getTime();
}

export default now;