import getType from '../utility/getType.js';

/**
 * cloneShallow() 和 cloneDeep() 的内部方法
 * 
 * @private
 * @param {*} data  要复制的数据
 * @param {String} fnType  复制类型 ['deep', 'shallow']
 * @returns {*}  返回复制后的数据
 */
function _clone(data, fnType) {
  const type = getType(data); 
  
  // 其他类型的数据直接复制值或者引用
  if(type !== 'array' && type !== 'object') {
    return data;
  }

  // 对 array 和 object 类型的数据进行处理
  let result = type === 'array' ? [] : {};
  const flag = fnType === 'deep';
  // 深复制则迭代复制，浅复制只复制值或者引用
  if(type === 'array') {
    for(let i=0, len=data.length; i<len; i++) {
      result.push(flag ? _clone(data[i], 'deep') : data[i]);
    }
  } else {
    for(let key in data) {
      result[key] = flag ? _clone(data[key], 'deep') : data[key];
    }
  }
  return result;
}

export default _clone;