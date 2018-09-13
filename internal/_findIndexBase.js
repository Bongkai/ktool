import getType from '../utility/getType.js';
import hasKeyValue from '../object/hasKeyValue.js';

/**
 * findIndex(), findAllIndex() 和 findLastIndex() 的内部函数
 * 
 * @private
 * @param {Array} arr  目标数组
 * @param {Function/Array/Object} conditions  要查询的子项需满足的条件
 * @param {Number} fromIndex  开始查询的下标位置
 * @param {String} fnType  查询类型 ['all', 'first', 'last']
 * @returns {Array/Number}  返回满足条件的下标或下标数组
 */
function _findIndexBase(arr, conditions, fromIndex, fnType) {
  const length  = arr.length,
        isAll   = fnType === 'all',
        isFirst = fnType === 'first',
        isLast  = fnType === 'last';

  // 对 fromIndex 参数进行处理
  if(isLast && fromIndex !== 0) {
    fromIndex = fromIndex || (arr.length - 1);
  } else {
    fromIndex = fromIndex || 0;
  }
  if(fromIndex < 0) fromIndex += length;

  const cType = getType(conditions);
  let index = -1, indexArr = [];

  const _progress = (i)=> {
    if(cType === 'function') {
      if(conditions(arr[i], i, arr) === true) index = i;
    } else {
      // 查找所有 index 时，每次进入循环须先重置 index
      if(isAll) index = -1;
      if(hasKeyValue(arr[i], conditions)) index = i;
    }
  }

  if(isLast) {
    for(let i=fromIndex; i>=0; i--) {
      _progress(i);
      if(index !== -1) break;
    }
  } else {
    for(let i=fromIndex; i<length; i++) {
      _progress(i);
      if(index === -1) continue;
      if(isFirst) {
        break;
      } else {
        indexArr.push(i);
      }
    }
  }

  return isAll ? indexArr : index;
}

export default _findIndexBase;