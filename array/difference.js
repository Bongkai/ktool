import _compareArrays from '../internal/_compareArrays.js';

/**
 * 返回 arr 拥有而 val 没有的元素
 * 
 * @category Array
 * @param {Array} arr  目标数组
 * @param {Array} values  要与目标数组作对比的数组
 * @returns {Array}  返回目标数组中拥有而对比数组中没有的元素组成的数组
 * 
 * @example
 * 
 * const arr1 = [1, 2, 3, 4, 5]
 * const arr2 = [1, 3, 5, 7, 9]
 * 
 * difference(arr1, arr2)
 * // => [2, 4]
 * 
 */
function difference(arr, values) {
  return _compareArrays(arr, values, false);
}

export default difference;