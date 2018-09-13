import getPartialTime from './getPartialTime.js';

/**
 * 获取传入时间的日期片段数组
 * 
 * @category Date
 * @param {Number/String/Date} time  要处理的时间毫秒数或 Date 实例
 * @returns {Array}  返回处理后的日期片段的数组  [年, 月, 日, 星期]
 * 
 * @example
 * 
 * getDateArr(1535541551630)
 * // => [2018, 8, 29, 3]
 * 
 */
function getDateArr(time) {
  let arr = [];
  arr.push(getPartialTime(time, 'year'));
  arr.push(getPartialTime(time, 'month'));
  arr.push(getPartialTime(time, 'date'));
  arr.push(getPartialTime(time, 'day'));
  return arr;
}

export default getDateArr;