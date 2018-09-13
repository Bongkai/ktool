import selectFrom from '../math/selectFrom.js';

const strPool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';

/**
 * 返回长度为 length 的由随机大小写字母或数字组成的字符串
 * 
 * @category String
 * @param {Number} length  返回的字符串的长度
 * @returns {String}  返回随机生成的字符串
 * 
 * @example
 * 
 * randomString(8)
 * // => '8Afs1vKd'
 * 
 */
function randomString(length) {
  let str = '';
  const max = strPool.length - 1;
  for(let i=0; i<length; i++) {
    str += strPool[selectFrom(0, max)];
  }
  return str;
}

export default randomString;