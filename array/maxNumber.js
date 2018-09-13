
/**
 * 找出数组中的最大值
 * 
 * @category Array
 * @param {Array} arr  由一组 Number 类型的元素组成的数组
 * @returns {Number}  返回数组中的最大值
 * 
 * @example
 * 
 * maxNumber([2, 5, 8, 12, 31])
 * // => 31
 * 
 */
function maxNumber(arr) {
  return Math.max.apply(Math, arr);
}

export default maxNumber;