
/**
 * 数组去重
 * 
 * @category Array
 * @param {Array} arr  要进行去重操作的数组
 * @returns {Array}  返回去重后的新数组, 原数组不改变
 * 
 * @example
 * 
 * const arr = [
 *   1, 2, null, '1', undefined, [1, 2], true, null, true, undefined, 
 *   3, false, false, 5, 3, 6, true, 8, 1, '1', [1, 2]
 * ];
 * 
 * unique(arr)
 * // => [1, 2, null, '1', undefined, [1, 2], true, 3, false, 5, 6, 8, [1, 2]]
 * 
 */
function unique(arr) {
  // ES6超简单方法：
  return [...(new Set(arr))];

  // 以下为常规方法
  // let newArr = [];
  // for(let i=0, len=arr.length; i<len; i++) {
  //   if(!newArr.includes(arr[i])) {
  //     newArr.push(arr[i]);
  //   }
  // }
  // return newArr;
}

export default unique;