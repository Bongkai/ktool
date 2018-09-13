
/**
 * 返回长度为 length 的由随机数字组成的字符串
 * 
 * @category String
 * @param {Number} length  返回的字符串的长度
 * @returns {String}  返回随机生成的字符串
 * 
 * @example
 * 
 * randomNumberString(8)
 * // => '37401193'
 * 
 */
function randomNumberString(length) {
  return Math.random().toFixed(length).substring(2);
}

export default randomNumberString;