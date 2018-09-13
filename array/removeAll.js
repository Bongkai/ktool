import _removeItems from '../internal/_removeItems.js';

/**
 * 移除数组中符合条件的所有子元素
 * 
 * @category Array
 * @param {Array} arr  要进行操作的数组
 * @param {Function/Array/Object} conditions  匹配条件, 格式为 filter + hasKeyValue
 * @param {Boolean} [isOrigin]  如果为 true, 则在原数组上进行删除, 
 *                              否则原数组不改变, 默认为 false
 * @param {Number} [fromIndex]  检索的起始位置下标, 默认为 0
 * @returns {Array}  返回删除后的数组
 * 
 * @example 
 * 详见 remove() 的例子
 */
function removeAll(arr, conditions, isOrigin, fromIndex) {
  return _removeItems(arr, conditions, isOrigin, fromIndex, 'all');
}

export default removeAll;