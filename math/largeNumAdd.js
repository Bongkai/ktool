
/**
 * 两个超大数的字符串相加，返回和的字符串
 * 
 * @category Math
 * @param {String} strA  第一个数的字符串
 * @param {String} strB  第二个数的字符串
 * @returns {String}  返回相加后的值的字符串
 * 
 * @example
 * 
 * const numA = '666666666666666666666666666666666666666666666666666666666666666666';
 * const numB = '888888888888888888888888888888888888888888888888888888888888888888';
 * largeNumAdd(numA, numB)
 * // => '1555555555555555555555555555555555555555555555555555555555555555554'
 * 
 */
function largeNumAdd(strA, strB) {
  const len = strA.length > strB.length ? strA.length : strB.length,
        arrA = strA.split('').reverse(),
        arrB = strB.split('').reverse();

  let sumArr = [], flag = false;
  for(let i=0; i<len; i++) {
    let itemSum = parseInt(arrA[i] || '0', 10) + parseInt(arrB[i] || '0', 10);
    if(flag) {
      itemSum += 1;
      flag = false;
    }
    if(itemSum >= 10 && i < len - 1) {
      itemSum -= 10;
      flag = true;
    }
    sumArr.push(itemSum);
  }
  return sumArr.reverse().join('');
}

export default largeNumAdd;