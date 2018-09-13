import _removeItems from '../internal/_removeItems.js';

/**
 * 移除数组中符合条件的第一个子元素
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
 * 
 * const dataArr = [
 *   {id: 1, name: 'Black', chinese: 90, math: 88, english: 99},
 *   {id: 2, name: 'Jack', chinese: 85, math: 93, english: 90},
 *   {id: 3, name: 'Alex', chinese: 85, math: 82, english: 76},
 *   {id: 4, name: 'Tim', chinese: 96, math: 82, english: 79},
 *   {id: 5, name: 'Rose', chinese: 85, math: 93, english: 79},
 * ];
 * 
 * remove(dataArr, {chinese: 85})
 * // => [
 * //      {id: 1, name: 'Black', chinese: 90, math: 88, english: 99},
 * //      {id: 3, name: 'Alex', chinese: 85, math: 82, english: 76},
 * //      {id: 4, name: 'Tim', chinese: 96, math: 82, english: 79},
 * //      {id: 5, name: 'Rose', chinese: 85, math: 93, english: 79},
 * //    ]
 * // （返回的该数组为一个新数组, 原数组 dataArr 并没有发生改变）
 * 
 * removeAll(dataArr, {chinese: 85}, false, 2)
 * // => [
 * //      {id: 1, name: 'Black', chinese: 90, math: 88, english: 99},
 * //      {id: 2, name: 'Jack', chinese: 85, math: 93, english: 90},
 * //      {id: 4, name: 'Tim', chinese: 96, math: 82, english: 79},
 * //    ]
 * // （返回的该数组为一个新数组, 原数组 dataArr 并没有发生改变）
 * 
 * removeLast(dataArr, {chinese: 85}, true, 3)
 * // => [
 * //      {id: 1, name: 'Black', chinese: 90, math: 88, english: 99},
 * //      {id: 2, name: 'Jack', chinese: 85, math: 93, english: 90},
 * //      {id: 4, name: 'Tim', chinese: 96, math: 82, english: 79},
 * //      {id: 5, name: 'Rose', chinese: 85, math: 93, english: 79},
 * //    ]
 * // （返回的该数组为 dataArr, 该数组已发生改变）
 * 
 */
function remove(arr, conditions, isOrigin, fromIndex) {
  return _removeItems(arr, conditions, isOrigin, fromIndex, 'first');
}

export default remove;