import selectFrom from '../math/selectFrom.js';
import cloneShallow from '../utility/cloneShallow.js';

/**
 * 从数组中随机抽出 n 个元素
 * 
 * @category Array
 * @param {Array} arr  作为数据池的数组
 * @param {Number} [n]  抽取的个数, 默认为 1
 * @returns {Array}  返回抽出来的元素组成的数组
 * 
 * @example
 * 
 * const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * 
 * sample(arr, 3)
 * // => [3, 8, 4]
 * 
 * sample(arr)
 * // => [7]
 * 
 */
function sample(arr, n) {
  const length = arr.length;
  if(!n || n < 1) n = 1;
  if(n > length) n = length;
  let newArr = [];

  // (1) n / length > 0.2, 方法二可能会随机出大量重复的 index, 产生性能问题
  // (2) n > 20, 遍历 indexArr 方法二可能会对 indexArr 进行 n 平方次的对比运算，产生性能问题
  if(n === 1) {
    newArr.push(arr[selectFrom(0, length - 1)]);
  } else if(n / length <= 0.2 && n < 20) {
    // 方法一
    let indexArr = [];
    for(let i=0; i<n; i++) {
      const index = selectFrom(0, length - 1);
      if(!indexArr.includes(index)) {
        newArr.push(arr[index]);
        indexArr.push(index);
      } else {
        i--;
      }
    }
  } else {
    // 方法二
    const _arr = cloneShallow(arr);
    for(let i=0; i<n; i++) {
      newArr.push(_arr.splice(selectFrom(0, _arr.length - 1), 1)[0]);
    }
  }
  return newArr;
}

export default sample;