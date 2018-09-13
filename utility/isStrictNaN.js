import isNumber from './isNumber.js';

/**
 * 判断传入数据是否严格为 NaN,
 * 原生的 isNaN 函数, 传入 undefined 等值会返回 true,
 * 该函数修复了这种特殊情况
 * 
 * @category Utility
 * @param {*} data  要判断的数据
 * @returns {Boolean}  如果该数据为 NaN, 则返回 true, 否则返回 false
 */
function isStrictNaN(data) {
  return isNumber(data) && isNaN(data);
}

export default isStrictNaN;