import getType from '../utility/getType.js';

/**
 * 把 string / object / array 格式的参数统一转化成 array 格式 （用于统一条件参数的格式）
 * sortBy() 的内部方法
 * 
 * @private
 * @param {String/Object/Array} data  [string / object / array[string] / array[object]]
 * @param {*} [defaultValue]  若条件参数中有 string 格式时，转换成 object 格式后的值
 * @returns {Array}  返回转换格式后的数组
 * 
 * @example
 * 
 * 转换方式：string: string -> {string: defaultValue} -> array[n]
 *          object: object -> array[n]
 * 
 * _unifyParamToArr('chinese', 'asc')
 * // => [{chinese: 'asc'}]
 * 
 * _unifyParamToArr({chinese: 'asc'})
 * // => [{chinese: 'asc'}]
 * 
 * _unifyParamToArr(['chinese', {math: 'desc'}, 'english'], 'asc')
 * // => [{chinese: 'asc'}, {math: 'desc'}, {english: 'asc'}]
 * 
 */
function _unifyParamToArr(data, defaultValue) {
  const type = getType(data);
  let arr = [];
  const _progress = (item, defaultValue)=> {
    const _type = getType(item);
    if(_type === 'string' && defaultValue !== undefined) {
      return {[item]: defaultValue};
    } else if(_type === 'object') {
      return item;
    }
  }
  
  if(type === 'array') {
    arr = data.map(item=> _progress(item, defaultValue));
  } else {
    arr.push(_progress(data, defaultValue));
  }
  return arr;
}

export default _unifyParamToArr;