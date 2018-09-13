
/**
 * 判断对象实例的原型中是否存在某个属性（区别于对象实例自身的属性）
 * 
 * @category Object
 * @param {Object} obj  要判断的对象实例
 * @param {String} name  属性名称
 * @returns {Boolean}  如果该对象实例的原型中存在该属性, 返回 true, 否则返回 false
 * 
 * @example
 * 
 * class Fn {
 *   constructor(name) {
 *     this.name = name;
 *   }
 * 
 *   getName() {
 *     return this.name;
 *   }
 * }
 * 
 * const fn = new Fn('Jack');
 * 
 * hasPrototypeProperty(fn, 'name')
 * // => false
 * 
 * hasPrototypeProperty(fn, 'getName')
 * // => true
 * 
 */
function hasPrototypeProperty(obj, name) {
  return !obj.hasOwnProperty(name) && (name in obj);
}

export default hasPrototypeProperty;