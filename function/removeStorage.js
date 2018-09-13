
/**
 * HTML5 Storage 的 removeItem() 封装方法
 * 
 * @category Function
 * @param {String} name  目标数据在 storage 中的名称
 * @param {String} [sType]  默认调用 localStorage, 如果该值为 session, 则调用 sessionStorage
 */
function removeStorage(name, sType) {
  const storage = sType === 'session' ? window.sessionStorage : window.localStorage;
  storage.removeItem(name);
}

export default removeStorage;