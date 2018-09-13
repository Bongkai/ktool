
/**
 * HTML5 Storage 的 getItem() 封装方法
 * 
 * @category Function
 * @param {String} name  目标数据在 storage 中的名称
 * @param {String} [sType]  默认调用 localStorage, 如果该值为 session, 则调用 sessionStorage
 * @returns {*}  返回 storage 里该名称对应的数据
 */
function getStorage(name, sType) {
  const storage = sType === 'session' ? window.sessionStorage : window.localStorage;
  let data = storage.getItem(name);
  try {
    data = JSON.parse(data);
  } finally {
    return data;
  }
}

export default getStorage;