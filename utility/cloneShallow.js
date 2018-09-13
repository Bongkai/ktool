import _clone from '../internal/_clone.js';

/**
 * 浅拷贝, 对该数据内部的值类型数据进行值复制, 对引用类型数据进行引用复制,
 * 返回一个最外层引用不同, 其他层引用和原数据相同的新数据
 * 
 * @category Utility
 * @param {*} data  要复制的数据
 * @returns {*}  返回浅拷贝后的新数据
 */
function cloneShallow(data) {
  return _clone(data, 'shallow');
}

export default cloneShallow;