import getType from '../utility/getType.js';
import hasKeyValue from '../object/hasKeyValue.js';

/**
 * 按条件把数组分割成拥有两个子数组的数组，第一个为满足条件的集合，第二个为不满足条件的集合
 * 
 * @category Array
 * @param {Array} arr  要进行判断分类的数组
 * @param {Function/Array/Object} conditions  判断条件, 参数格式为 filter + hasKeyValue
 * @returns {Array}  返回按条件分类后的数组, 原数组不改变
 * 
 * @example
 * 
 * const dataArr = [
 *   {id: 1, name: 'Black', chinese: 90, math: 88, english: 99},
 *   {id: 2, name: 'Jack', chinese: 85, math: 93, english: 90},
 *   {id: 3, name: 'Alex', chinese: 85, math: 82, english: 76},
 *   {id: 4, name: 'Tim', chinese: 96, math: 82, english: 79},
 *   {id: 5, name: 'Rose', chinese: 85, math: 93, english: 79},
 * ];
 * 
 * partition(dataArr, item=> {
 *   item.chinese > 88
 * })
 * // => [
 * //      [
 * //        {id: 1, name: 'Black', chinese: 90, math: 88, english: 99},
 * //        {id: 4, name: 'Tim', chinese: 96, math: 82, english: 79},
 * //      ],
 * //      [
 * //        {id: 2, name: 'Jack', chinese: 85, math: 93, english: 90},
 * //        {id: 3, name: 'Alex', chinese: 85, math: 82, english: 76},
 * //        {id: 5, name: 'Rose', chinese: 85, math: 93, english: 79},
 * //      ]
 * //    ]
 */
function partition(arr, conditions) {
  const cType = getType(conditions);
  let truthy = [], falsey = [], result = [];

  for(let i=0, len=arr.length; i<len; i++) {
    const item = arr[i];
    if(cType === 'function') {
      if(conditions(item, i, arr)) {
        truthy.push(item);
      } else {
        falsey.push(item);
      }
    } else {
      if(hasKeyValue(item, conditions)) {
        truthy.push(item);
      } else {
        falsey.push(item);
      }
    }
  }

  result.push(truthy);
  result.push(falsey);
  return result;
}

export default partition;