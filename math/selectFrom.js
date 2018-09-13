
/**
 * 返回指定范围内的一个随机整数（包括首尾）
 * 
 * @category Math
 * @param {Number} min  范围下限（整数）
 * @param {Number} max  范围上限（整数）
 * @returns {Number}  返回范围内的一个随机整数
 * 
 * @example
 * 
 * selectFrom(1,10)
 * // => 8
 * 
 */
function selectFrom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default selectFrom;