
/**
 * 找出数组中的最小值
 * 
 * @category Array
 * @param {Array} arr  由一组 Number 类型的元素组成的数组
 * @returns {Number}  返回数组中的最小值
 * 
 * @example
 * 
 * maxNumber([2, 5, 8, 12, 31])
 * // => 2
 * 
 */
function minNumber(arr) {
  return Math.min.apply(Math, arr);
}

export default minNumber;