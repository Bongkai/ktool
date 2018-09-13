import getPartialTime from './getPartialTime.js';

/**
 * 获取传入时间的时间片段数组
 * 
 * @category Date
 * @param {Number/String/Date} time  要处理的时间毫秒数或 Date 实例
 * @returns {Array}  返回处理后的时间片段的数组  [时, 分, 秒, 毫秒]
 * 
 * @example
 * 
 * getTimeArr(1535541551630)
 * // => [19, 19, 11, 630]
 * 
 */
function getTimeArr(time) {
  let arr = [];
  arr.push(getPartialTime(time, 'hours'));
  arr.push(getPartialTime(time, 'minutes'));
  arr.push(getPartialTime(time, 'seconds'));
  arr.push(getPartialTime(time, 'milliseconds'));
  return arr;
}

export default getTimeArr;