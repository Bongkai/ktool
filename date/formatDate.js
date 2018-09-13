import _unifyDate from '../internal/_unifyDate.js';
import getDateArr from './getDateArr.js';

const formatArr = [
  // 中文常见格式
  'yyyy年m月d日 day', 'yyyy年m月d日',
  'yyyy年mm月dd日 day', 'yyyy年mm月dd日',

  'yyyy/m/d day', 'm/d/yyyy day', 'd/m/yyyy day',
  'yyyy/m/d',     'm/d/yyyy',     'd/m/yyyy',

  'yyyy/mm/dd day', 'mm/dd/yyyy day', 'dd/mm/yyyy day',
  'yyyy/mm/dd',     'mm/dd/yyyy',     'dd/mm/yyyy',

  'yyyy-mm-dd day', 'mm-dd-yyyy day', 'dd-mm-yyyy day',
  'yyyy-mm-dd',     'mm-dd-yyyy',     'dd-mm-yyyy',
  // 英文常见格式
  'dd-Mmm-yyyy Day', 'Mmm-dd-yyyy Day', 'Day dd-Mmm-yyyy', 'Day Mmm-dd-yyyy',
  'dd-Mmm-yyyy',     'Mmm-dd-yyyy',

  'dd-MMM-yyyy DAY', 'MMM-dd-yyyy DAY', 'DAY dd-MMM-yyyy', 'DAY MMM-dd-yyyy',
  'dd-MMM-yyyy',     'MMM-dd-yyyy',
  // 其他英文格式
  'Mmm.dd,yyyy Day', 'Mmm.dd,yyyy DAY', 'Mmm.dd,yyyy',
];
const monthArr = [
  'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'
];
const dayArrCN = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
const dayArrEN = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

/**
 * 返回对应格式的日期
 * 
 * @category Date
 * @param {Number/String/Date} time  要显示的时间毫秒数或 Date 实例
 * @param {String} [format]  日期的显示格式
 * @returns {String}  返回指定显示格式的日期字符串
 * 
 * @example
 * 
 * formatDate(1535541551630, 'yyyy年m月d日 day')
 * // => '2018年08月29日 星期三'
 * 
 * formatDate(new Date(), 'Mmm-dd-yyyy Day')
 * // => 'Aug-29-2018 Wed'
 * 
 */
function formatDate(time, format) {
  time = _unifyDate(time);
  
  if(!format) {
    return time.toDateString();
  } else if(format === 'locale') {
    return time.toLocaleDateString();
  }
  
  if(formatArr.includes(format)) {
    let result = format;
    const dateArr = getDateArr(time);
    const year = dateArr[0], month = dateArr[1], date = dateArr[2], day = dateArr[3];

    result = result.replace('yyyy', year);
    result = result.replace('Mmm', monthArr[month - 1]);
    result = result.replace('MMM', monthArr[month - 1].toUpperCase());
    result = result.replace('mm', month < 10 ? '0' + month : month);
    result = result.replace('dd', date < 10 ? '0' + date : date);
    result = result.replace('day', dayArrCN[day]);
    result = result.replace('Day', dayArrEN[day]);
    result = result.replace('DAY', dayArrEN[day].toUpperCase());
    result = result.replace('m', month);
    result = result.replace('d', date);
    return result;
  }
  // 传入的 format 不匹配格式库时返回默认格式
  return time.toDateString();
}

export default formatDate;