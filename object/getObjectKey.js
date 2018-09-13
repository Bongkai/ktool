
/**
 * 获取只有一个属性的对象的 key 值
 * 
 * @category Object
 * @param {Object} obj  目标对象
 * @returns {String}  返回该属性的名称
 * 
 * @example 
 * 
 * getObjectKey({name: 'Jack'})
 * // => 'name'
 * 
 */
function getObjectKey(obj) {
  return (Object.keys(obj))[0];
}

export default getObjectKey;