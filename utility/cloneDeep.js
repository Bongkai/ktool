import _clone from '../internal/_clone.js';

/**
 * 深拷贝, 即对数据的所有层级的所有节点数据均进行值复制, 返回一个所有层级都是全新的数据
 * 
 * @category Utility
 * @param {*} data  要复制的数据
 * @returns {*}  返回深拷贝后的新数据
 */
function cloneDeep(data) {
  return _clone(data, 'deep');
}

export default cloneDeep;