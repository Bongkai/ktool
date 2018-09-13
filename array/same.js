import _compareArrays from '../internal/_compareArrays.js';

/**
 * 返回 arr 和 values 都拥有的元素
 * 
 * @category Array
 * @param {Array} arr  目标数组
 * @param {Array} values  要与目标数组作对比的数组
 * @returns {Array}  返回目标数组和对比数组中都拥有的元素组成的数组
 * 
 * @example
 * 
 * const arr1 = [1, 2, 3, 4, 5]
 * const arr2 = [1, 3, 5, 7, 9]
 * 
 * same(arr1, arr2)
 * // => [1, 3, 5]
 * 
 */
function same(arr, values) {
  return _compareArrays(arr, values, true);
}

export default same;