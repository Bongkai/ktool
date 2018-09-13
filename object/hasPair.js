import getObjectKey from './getObjectKey.js';

/**
 * 判断对象是否拥有满足要求的键值对
 * 
 * @category Object
 * @param {Object} obj  要查询的对象
 * @param {Object} pair  作为查询条件的键值对
 * @returns {Boolean}  若对象拥有条件中要求的键值对, 返回 true, 否则返回 false
 * 
 * @example
 * 
 * const obj = {name: 'Jack', chinese: 85, math: 93, english: 90}
 * 
 * hasPair(obj, {chinese: 85})
 * // => true
 * 
 */
function hasPair(obj, pair) {
  const key = getObjectKey(pair);
  return obj.hasOwnProperty(key) && obj[key] === pair[key];
}

export default hasPair;