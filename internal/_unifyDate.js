import getType from '../utility/getType.js';
import setTime from '../date/setTime.js';

/**
 * 将传入的时间格式统一成 Date 实例
 * getPartialTime / formatDate / formatTime 的内部方法
 * 
 * @private
 * @param {Number/String/Date} time  要转换格式的毫秒数或者 Date 实例
 * @returns {Date}  返回对应的 Date 实例
 * 
 * @example
 * 
 * _unifyDate(1535541551630)
 * // => 对应的 date 实例
 * 
 */
function _unifyDate(time) {
  const type = getType(time);
  if(type === 'number') {
    time = setTime(time);
  } else if(type !== 'date') {
    throw new Error('unexpected param type');
  }
  // 若 time 是一个 Date 实例, 直接返回 time 即可
  return time;
}

export default _unifyDate;