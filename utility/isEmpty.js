import getType from './getType.js';

/**
 * 判断传入数据是否为空, 
 * 当数据为 0 / NaN / '' / false / undefined / null / {} / [] 时, 返回 true,
 * 否则返回 false
 * 
 * @category Utility
 * @param {*} data  要判断的数据
 * @returns {Boolean}  如果该数据等于上述的空值之一, 则返回 true, 否则返回 false
 */
function isEmpty(data) {
  const type = getType(data);

  switch(type) {
    case 'number':
      if(isNaN(data) || data === 0) return true;
      break;
    case 'string':
      if(data.trim().length === 0) return true;
      break;
    case 'boolean':
      if(!data) return true;
      break;
    case 'undefined':
    case 'null':
      return true;
    case 'object':
      for(let i in data) {
        return false;
      }
      return true;
    case 'array':
      if(data.length === 0) return true;
      break;
    default:
      return false;
  }

  return false;
}

export default isEmpty;