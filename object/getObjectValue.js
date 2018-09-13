
/**
 * 获取只有一个属性的对象的 value 值
 * 
 * @category Object
 * @param {Object} obj  目标对象
 * @returns {*}  返回该属性的值
 * 
 * @example 
 * 
 * getObjectKey({name: 'Jack'})
 * // => 'Jack'
 * 
 */
function getObjectValue(obj) {
  return (Object.values(obj))[0];
}

export default getObjectValue;