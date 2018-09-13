
/**
 * 判断传入数据是否为 number 类型
 * 
 * @category Utility
 * @param {*} data  要判断的数据
 * @returns {Boolean}  如果该数据为 Number 类型, 则返回 true, 否则返回 false
 */
function isNumber(data) {
  return typeof data === 'number';
}

export default isNumber;