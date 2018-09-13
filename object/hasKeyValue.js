import getType from '../utility/getType.js';

/**
 * 判断对象是否拥有 conditions 中的键值对集合
 * 
 * @category Object
 * @param {Object} obj  要查询的对象
 * @param {Array/Object} conditions  查询条件
 * @returns {Boolean}  若对象拥有条件中要求的所有键值对, 返回 true, 否则返回 false
 * 
 * @example
 * 
 * const obj = {name: 'Jack', chinese: 85, math: 93, english: 90}
 * 
 * hasKeyValue(obj, [chinese, 90])
 * // => false
 * 
 * // 这种 conditions 形式和 hasPair() 的功能和条件格式均相同
 * hasKeyValue(obj, {chinese: 85})
 * // => true
 * 
 * // 这种 conditions 形式和 hasPairs() 的功能相同, 但条件格式有所区别
 * hasKeyValue(obj, {chinese: 85, math: 93})
 * // => true
 * 
 */
function hasKeyValue(obj, conditions) {
  const cType = getType(conditions);
  if(cType === 'array') {
    return obj[conditions[0]] === conditions[1];
  } else if(cType === 'object') {
    const cKeys = Object.keys(conditions);
    return cKeys.every(item=> obj[item] === conditions[item]);
  } else {
    throw new Error('unexpected param type');
  }
}

export default hasKeyValue;