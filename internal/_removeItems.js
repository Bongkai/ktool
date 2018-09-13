import _findIndexBase from './_findIndexBase';
import cloneShallow from '../utility/cloneShallow.js';

/**
 * remove(), removeAll() 和 removeLast() 的内部函数
 * 
 * @private
 * @param {Array} arr  目标数组
 * @param {Function/Object} conditions  要删除的子元素需满足的条件
 * @param {Boolean} isOrigin  是否在原数组上改动
 * @param {Number} fromIndex  开始查询的下标位置
 * @param {String} fnType  删除类型 ['all', 'first', 'last']
 * @returns {Array}  返回操作后的数组
 */
function _removeItems(arr, conditions, isOrigin, fromIndex, fnType) {
  arr = isOrigin === true ? arr : cloneShallow(arr);
  const index = _findIndexBase(arr, conditions, fromIndex, fnType);
  
  if(fnType === 'all') {
    for(let i=index.length-1; i>=0; i--) {
      arr.splice(index[i], 1);
    }
  } else {
    arr.splice(index, 1);
  }
  return arr;
}

export default _removeItems;