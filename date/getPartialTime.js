import _unifyDate from '../internal/_unifyDate.js';

/**
 * 根据 flag 获取对应的时间片段
 * 
 * @category Date
 * @param {Number/String/Date} time  要处理的时间数据
 * @param {String} flag  要获取的时间片段的名称
 * @returns {Number}  返回时间片段的值
 * 
 */
function getPartialTime(time, flag) {
  let result = null;
  time = _unifyDate(time);
  
  switch(flag) {
    case 'year':
      result = time.getFullYear();
      break;
    case 'month':
      result = time.getMonth() + 1;
      break;
    case 'date':
      result = time.getDate();
      break;
    case 'day':
      result = time.getDay();
      break;
    case 'hours':
      result = time.getHours();
      break;
    case 'minutes':
      result = time.getMinutes();
      break;
    case 'seconds':
      result = time.getSeconds();
      break;
    case 'milliseconds':
      result = time.getMilliseconds();
      break;
    default:
      break;
  }
  return result;
}

export default getPartialTime;