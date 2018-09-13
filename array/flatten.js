
/**
 * 使数组扁平化
 * 
 * @category Array
 * @param {Array} arr  要进行操作的数组
 * @param {Number} [depth]  执行扁平化的层数, 当值为 0 时即进行完全扁平化, 默认为 0
 * @returns {Array}  返回扁平化后的新数组, 原数组不改变
 * 
 * @example
 * 
 * const arr = [1, 2, [3], [4, [5, [6]]], 7]
 * 
 * flatten(arr)
 * // => [1, 2, 3, 4, 5, 6, 7]
 * 
 * flatten(arr, 1)
 * // => [1, 2, 3, 4, [5, [6]], 7]
 * 
 * flatten(arr, 2)
 * // => [1, 2, 3, 4, 5, [6], 7]
 * 
 */
function flatten(arr, depth) {
  depth = depth || 0;
  let flattenArr = [],
      curDepth = 1;
  const isArray = Array.isArray;

  
  const _flattenProgress = (arr, flattenArr, depth, curDepth)=> {
    for(let i=0, len=arr.length; i<len; i++) {
      const item = arr[i];
      if(!isArray(item) || (depth !== 0 && curDepth > depth)) {
        flattenArr.push(item);
      } else {
        _flattenProgress(item, flattenArr, depth, curDepth + 1);
      }
    }
  }
  _flattenProgress(arr, flattenArr, depth, curDepth);

  return flattenArr;
}

export default flatten;