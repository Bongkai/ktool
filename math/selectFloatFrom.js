
/**
 * 返回指定范围内的一个随机数（不包括首尾和之间的整数）
 * 
 * @param {Number} min  范围下限
 * @param {Number} max  范围上限
 * @param {Number} decimalLength  随机数小数部分的长度
 * @returns {Number}  返回范围内的一个随机数
 * 
 * @example
 * 
 * selectFloatFrom(2.1, 4.2, 5)
 * // => 3.47396
 * 
 */
function selectFloatFrom(min, max, decimalLength) {
  let float = Math.random() * (max - min) + min;
  if(decimalLength && decimalLength > 0) {
    float = parseFloat(float.toFixed(decimalLength));
  }
  return float;
}

export default selectFloatFrom;