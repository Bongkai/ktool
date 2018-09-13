
/**
 * 把 object / array 格式的参数统一转化成 array 格式 （用于统一条件参数的格式）
 * 
 * @private
 * @param {Object/Array} data  要处理的数据
 * @returns {Array}  返回处理成 array 格式后的数据
 * @example
 * 
 * _unifyObjParamToArr({name: Jack})
 * // => [{name: Jack}]
 * 
 */
function _unifyObjParamToArr(data) {
  return Array.isArray(data) ? data : [data];
}

export default _unifyObjParamToArr;