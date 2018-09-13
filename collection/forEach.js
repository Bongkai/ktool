import getType from '../utility/getType.js';
import cloneShallow from '../utility/cloneShallow.js';

/**
 * 遍历目标集合, 对其子项进行指定的 callback 操作, 
 * 如果集合是数组类型，则将各次操作后返回的结果组成一个新的数组并返回（类似于 Array.map 方法）
 * 
 * @category Collection
 * @param {Array/Object} col  要对各子项进行操作的集合
 * @param {Function} cb  对集合的各子项进行的操作
 * @returns {Array}  集合为数组类型时, 返回各次操作后返回的结果组成的新数组
 */
function forEach(col, cb) {
  if(col.length === 0 || !cb) return;
  const type = getType(col);
  const typeMap = ['object', 'array'];  // ['object', 'array', 'set', 'map']
  if(!typeMap.includes(type)) {
    throw new Error('forEach(): arguments[0] expects an object or array param');
  }

  let _col = cloneShallow(col);
  if(type === 'object') {
    for(let key in _col) {
      // callback: (value, key, object)=> {...}
      cb(_col[key], key, _col);
    }
    return;
  } 
  // col 为 array 类型，类似 array.map() 方法
  else {
    return _col.map(cb);
  }
}

export default forEach;