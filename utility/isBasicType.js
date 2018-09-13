
/**
 * 判断传入数据是否为基本数据类型
 * 
 * @category Utility
 * @param {*} data  要判断的数据
 * @returns {Boolean}  返回该数据是否为基本数据类型
 */
function isBasicType(data) {
  return data === null || (typeof data !== 'object' && typeof data !== 'function');
}

export default isBasicType;