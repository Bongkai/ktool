
/**
 * 以时间的毫秒数设置 Date 对象
 * 
 * @category Date
 * @param {Number/String} millisec  要转换的时间的毫秒数
 * @returns {Date}  返回转换后的 Date 实例
 * 
 * @example
 * 
 * const d = setTime(1535541551630);
 * d.getTime();
 * // => 1535541551630
 * 
 */
function setTime(millisec) {
  let d = new Date();
  d.setTime(millisec);
  return d;
}

export default setTime;