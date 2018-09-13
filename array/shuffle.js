import sample from './sample.js';

/**
 * 将数组随机打乱并返回打乱后的新数组
 * 
 * @category Array
 * @param {Array} arr  目标数组 
 * @returns {Array}  返回打乱后的新数组
 * 
 * @example
 * 
 * shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9])
 * // => [2, 4, 1, 7, 9, 3, 5, 6, 8]
 * 
 */
function shuffle(arr) {
  return sample(arr, arr.length);
}

export default shuffle;