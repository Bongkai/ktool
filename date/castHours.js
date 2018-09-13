
/**
 * 按照12小时制或者24小时制来处理小时数（只处理数值，不处理上下午标志）
 * 
 * @category Date
 * @param {Number/String} hours  要处理的小时数
 * @param {Boolean} is24Hours  24小时制为 true, 12小时制为 false
 * @param {Boolean} leadingZero  选择加上前置零则为 true, 否则为false
 * @returns {String}  返回处理后的小时数的字符串
 * 
 * @example
 * 
 * castHour(14, false, true)
 * // => '02'
 * 
 * castHour(0, false, true)
 * // => '12'
 * 
 */
function castHours(hours, is24Hours, leadingZero) {
  let result = null;
  hours = typeof hours === 'number' ? hours : parseInt(hours, 10);
  if(is24Hours) {
    result = leadingZero && hours < 10 ? '0' + hours : '' + hours;
  } else {
    if(hours === 0) {
      return result = '12';
    } else if(hours > 12) {
      hours -= 12;
    }
    result = leadingZero && hours < 10 ? '0' + hours : '' + hours;
  }
  return result;
}

export default castHours;