
const typeMap = {
  '[object Number]': 'number',
  '[object String]': 'string',
  '[object Boolean]': 'boolean',
  '[object Undefined]': 'undefined',
  '[object Null]': 'null',
  '[object Object]': 'object',
  '[object Array]': 'array',
  '[object Function]': 'function',
  '[object Date]': 'date',
  '[object RegExp]': 'regExp',
  '[object JSON]': 'JSON',
  '[object Error]': 'error',
  '[object Symbol]': 'symbol',
  '[object Map]': 'map',
  '[object Set]': 'set',
  '[object Buffer]': 'buffer',
  '[object ArrayBuffer]': 'arrayBuffer',
}

/**
 * 判断数据类型, typeof 的进阶版, 能准确判断绝大多数的数据类型 
 * 
 * @category Utility
 * @param {*} data  要判断的数据
 * @returns {String}  如果该数据是基本数据类型, 则返回 true, 否则返回 false
 */
function getType(data) {
  if(data instanceof Element) return 'element';
  const typeStr = Object.prototype.toString.call(data);
  
  if(typeMap[typeStr]) {
    return typeMap[typeStr];
  } else {
    return typeStr;
  }
}

export default getType;