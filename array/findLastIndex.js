import _findIndexBase from '../internal/_findIndexBase.js';

/**
 * 返回集合数组中符合条件的最后一个子元素的下标
 * 
 * @category Array
 * @param {Array} arr  要查询的数组
 * @param {Array/Object} conditions  查询条件, 参数格式为 hasKeyValue 格式
 * @param {Number} [fromIndex]  查询的起始下标位置, 默认为 arr.length - 1
 * @returns {Number}  返回查询到的最后一个子元素的下标
 * 
 * @example
 * 详见 find() 的例子
 */
function findLastIndex(arr, conditions, fromIndex) {
  return _findIndexBase(arr, conditions, fromIndex, 'last');
}

export default findLastIndex;