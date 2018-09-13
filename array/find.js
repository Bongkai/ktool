import findIndex from './findIndex.js';

/**
 * 查找集合数组中符合条件的第一个子元素
 * 
 * @category Array
 * @param {Array} arr  要查询的数组
 * @param {Array/Object} conditions  查询条件, 参数格式为 hasKeyValue 格式
 * @param {Number} [fromIndex]  查询的起始下标位置, 默认为 0
 * @returns {*}  返回查询到的第一个子元素
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
 * find(dataArr, [chinese, 85])
 * // => {id: 2, name: 'Jack', chinese: 85, math: 93, english: 90}
 * findIndex(dataArr, [chinese, 85])
 * // => 1
 * 
 * findLast(dataArr, {chinese: 85})
 * // => {id: 5, name: 'Rose', chinese: 85, math: 93, english: 79}
 * findLastIndex(dataArr, {chinese: 85})
 * // => 4
 * 
 * findAll(dataArr, {chinese: 85, math: 93})
 * // => [
 * //      {id: 2, name: 'Jack', chinese: 85, math: 93, english: 90},
 * //      {id: 5, name: 'Rose', chinese: 85, math: 93, english: 79},
 * //    ]
 * findAllIndex(dataArr, {chinese: 85, math: 93})
 * // => [1, 4]
 * 
 */
function find(arr, conditions, fromIndex = 0) {
  return arr[findIndex(arr, conditions, fromIndex)];
}

export default find;