import _unifyParamToArr from '../internal/_unifyParamToArr';
import cloneShallow from '../utility/cloneShallow.js';
import getType from '../utility/getType.js';
import getObjectKey from '../object/getObjectKey.js';

/**
 * 数组按条件排序
 * 
 * @category Array
 * @param {Array} arr  要进行排序的数组
 * @param {String/Object/Array} conditions  排序条件, 以键值对形式表示, 格式见 example, 
 *                                          当只有 key 的字符串时, 默认为升序,
 *                                          当值为 false 或者 'asc'时, 表示该 key 为升序,
 *                                          当值为 true 或者 'desc'时, 表示该 key 为降序
 * @returns {Array}  返回排序后的新数组
 * 
 * @example
 * 
 * conditions 格式:
 * (1) 'chinese'
 * (2) {math: false}
 * (3) ['chinese', {math: true}]
 * (4) ['chinese', {math: true}, {english: 'desc'}]
 * 
 * 
 * const dataArr = [
 *   {id: 1, name: 'Black', chinese: 90, math: 88, english: 99},
 *   {id: 2, name: 'Jack', chinese: 85, math: 93, english: 90},
 *   {id: 3, name: 'Alex', chinese: 85, math: 82, english: 76},
 *   {id: 4, name: 'Tim', chinese: 96, math: 82, english: 79},
 *   {id: 5, name: 'Rose', chinese: 85, math: 93, english: 79},
 * ];
 * 
 * sortBy(dataArr, ['chinese', {math: true}, {english: 'desc'}])
 * // => [
 * //      {id: 2, name: 'Jack', chinese: 85, math: 93, english: 90},
 * //      {id: 5, name: 'Rose', chinese: 85, math: 93, english: 79},
 * //      {id: 3, name: 'Alex', chinese: 85, math: 82, english: 76},
 * //      {id: 1, name: 'Black', chinese: 90, math: 88, english: 99},
 * //      {id: 4, name: 'Tim', chinese: 96, math: 82, english: 79},
 * //    ]
 * 
 */
function sortedBy(arr, conditions) { 
  const cArr = _unifyParamToArr(conditions, false),
        _arr = cloneShallow(arr);
  
  return _arr.sort((a, b)=> {
    // 循环排序条件数组，判断 a 和 b 的顺序
    for(let i=0, len=cArr.length; i<len; i++) {
      const item = cArr[i];
      // 用于比较排序的键名
      let key = item;
      const type = getType(item);
      if(type !== 'object' && type !== 'string') {
        throw new Error('sortedBy(): arguments[1] has an unexpected param');
      }

      let temp = 1;
      if(type === 'object') {
        const _key = getObjectKey(item);
        const value = item[_key];

        if(value === true || value === 'desc') {
          temp = -1;
        } else if(value === false || value === 'asc') {
          //
        } else {
          throw new Error('sortedBy(): arguments[1] has an unexpected param');
        }

        key = _key;
      }

      const difference = a[key] - b[key];
      // 顺序已分，跳出循环，按照升降序要求返回排序后的结果
      if(difference !== 0) return difference * temp;
    }
    return 0;
  });
}

export default sortedBy;