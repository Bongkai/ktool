
/**
 * difference() 和 same() 的内部函数
 * 
 * @private
 * @param {Array} arr  要比较的目标数组
 * @param {Array} values  与 arr 作比较的数组
 * @param {Boolean} flag  difference(): false, same(): true
 * @returns {Array}  返回比较后满足条件的子项组成的数组
 */
function _compareArrays(arr, values, flag) {
  let result = [];
  for(let i=0, len=arr.length; i<len; i++) {
    let _flag = flag;
    if(!values.includes(arr[i])) _flag = !_flag;
    if(_flag) {
      result.push(arr[i]);
    }
  }
  return result;
}

export default _compareArrays;