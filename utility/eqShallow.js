
/**
 * 浅比较, 即对两个数据逐层进行比较, 对普通类型的部分作值比较, 对引用类型的部分作引用比较,
 * 若所有节点的上述比较均相等, 则返回 true, 否则返回 false
 * 
 * @category Utility
 * @param {*} a  要比较的一个数据
 * @param {*} b  要比较的另一个数据
 * @returns {Boolean}  若二者浅比较结果相等, 则返回 true, 否则返回 false
 */
function eqShallow(a, b) {
  // 进行基本类型的比较（Object.is 无法判断引用类型）
  if(Object.is(a, b)) return true;

  // 若 a 和 b 均不是 object，则可以返回 false
  if(typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
    return false;
  }

  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if(keysA.length !== keysB.length) {
    return false;
  }
  
  return keysA.every(key=> Object.is(a[key], b[key]));
}

export default eqShallow;