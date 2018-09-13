import isEmpty from '../utility/isEmpty.js';

/**
 * 去除数组中的假值, 值为 0 / NaN / '' / false / undefined / null / {} / [] 的子项将被清除
 * 
 * @category Array
 * @param {Array} arr  要进行操作的数组
 * @returns {Array}  返回操作后的数组
 * 
 * @example
 * 
 * compact([1, '', NaN, 'cat', undefined, true, false, [], {}, 'dog'])
 * // => [1, 'cat', true, 'dog']
 * 
 */
function compact(arr) {
  let newArr = [];
  for(let i=0, len=arr.length; i<len; i++) {
    if(isEmpty(arr[i])) continue;
    newArr.push(arr[i]);
  }
  return newArr;
}

export default compact;