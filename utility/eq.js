import getType from './getType.js';

/**
 * 深比较, 即对两个数据逐层进行比较, 对所有类型的数据均作值比较,
 * 若所有节点的上述比较均相等, 则返回 true, 否则返回 false
 * 
 * @category Utility
 * @param {*} a  要比较的一个数据
 * @param {*} b  要比较的另一个数据
 * @returns {Boolean}  若二者深比较结果相等, 则返回 true, 否则返回 false
 */
function eq(a, b) {
  // 进行 基本类型 和 相同引用的引用类型 的比较（Object.is() 无法准确判断引用类型）
  // 若 a 和 b 均为 null, 则这里返回 true
  if(Object.is(a, b)) return true;

  // 若 a 和 b 均不是 object（引用类型 和 null），则可以返回 false
  // 这里将引用不同的 function 类型的比较直接返回 false（即便内容相同）
  if(typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
    return false;
  }
  
  // 以下是对引用类型的判断
  const typeA = getType(a);
  const typeB = getType(b);
  
  if(typeA !== typeB) return false;

  if(typeA === 'array' || typeA === 'object') {
    // array 类型的 keys 为各子项的 index 字符串
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if(keysA.length !== keysB.length) {
      return false;
    }

    return keysA.every(key=> eq(a[key], b[key]));
  }
  if(typeA === 'date') {
    return a.getTime() - b.getTime() === 0;
  }
  if(typeA === 'regExp') {
    return a.toString() === b.toString();
  }

  // 其他类型的值一律返回 false (error 等)
  return false;
}

export default eq;