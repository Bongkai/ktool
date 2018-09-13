import hasPair from './hasPair.js';

/**
 * 判断对象是否拥有满足要求的多个键值对
 * 
 * @category Object
 * @param {Object} obj  要查询的对象
 * @param {Object} pairs  作为查询条件的键值对数组
 * @returns {Boolean}  若对象拥有条件中要求的所有键值对, 返回 true, 否则返回 false
 * 
 * @example
 * 
 * const obj = {name: 'Jack', chinese: 85, math: 93, english: 90}
 * 
 * // 这种 pairs 形式和 pair() 的功能相同
 * hasPair(obj, [{chinese: 85}, {math: 93}])
 * // => true
 * 
 * hasPair(obj, [{chinese: 85}, {math: 93}])
 * // => true
 * 
 */
function hasPairs(obj, pairs) {
  return pairs.every(pair=> hasPair(obj, pair));
}

export default hasPairs;