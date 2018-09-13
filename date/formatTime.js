import _unifyDate from '../internal/_unifyDate.js';
import getTimeArr from './getTimeArr.js';
import castHours from './castHours.js';

const formatArr = [
  // 时分秒
  'HH:mm:ss', 'tt hh:mm:ss', 'hh:mm:ss tt',
  'H:mm:ss', 'tt h:mm:ss', 'h:mm:ss tt',
  'H:m:s', 'tt h:m:s', 'h:m:s tt',
  // 时分
  'HH:mm', 'tt hh:mm', 'hh:mm tt',
  'H:mm', 'tt h:mm', 'h:mm tt',
  'H:m', 'tt h:m', 'h:m tt',
];

/**
 * 返回对应格式的时间
 * 
 * @category Date
 * @param {Number/String/Date} time  要显示的时间毫秒数或 Date 实例
 * @param {String} [format]  时间的显示格式
 * @param {String} [language]  上下午标志使用的语言, 默认为 CN
 * @returns {String}  返回指定显示格式的时间字符串
 * 
 * @example
 * 
 * formatTime(1535541551630, 'tt hh:mm')
 * // => '下午 07:19:11'
 * 
 * formatDate(new Date(), 'HH:mm')
 * // => '19:19'
 * 
 */
function formatTime(time, format, language) {
  time = _unifyDate(time);
  
  if(!format) {
    return time.toTimeString();
  } else if(format === 'locale') {
    return time.toLocaleTimeString();
  }
  
  if(formatArr.includes(format)) {
    let result = format;
    const timeArr = getTimeArr(time);
    const hours = timeArr[0], minutes = timeArr[1], seconds = timeArr[2];

    const meridiem = language === 'EN' 
      ? (hours < 12 ? 'AM' : 'PM')
      : (hours < 12 ? '上午' : '下午');

    result = result.replace('HH', castHours(hours, true, true));
    result = result.replace('H', castHours(hours, true, false));
    result = result.replace('hh', castHours(hours, false, true));
    result = result.replace('h', castHours(hours, false, false));
    result = result.replace('mm', minutes < 10 ? '0' + minutes : minutes);
    result = result.replace('m', minutes);
    result = result.replace('ss', seconds < 10 ? '0' + seconds : seconds);
    result = result.replace('s', seconds);
    result = result.replace('tt', meridiem);
    return result;
  }

  return time.toTimeString();
}

export default formatTime;