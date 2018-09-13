import getType from '../utility/getType.js';

/**
 * HTML5 Storage 的 setItem() 封装方法
 * 
 * @category Function
 * @param {String} name  目标数据在 storage 中的名称
 * @param {String} [sType]  默认调用 localStorage, 如果该值为 session, 则调用 sessionStorage
 */
function setStorage(name, data, sType) {
  const storage = sType === 'session' ? window.sessionStorage : window.localStorage;
  const type = getType(data);
  if(type === 'object' || type === 'array') {
    data = JSON.stringify(data);
  }
  storage.setItem(name, data);
}

export default setStorage;