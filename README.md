# ktool

一个基于 ES6 编写的函数工具库，扩展和新增一些开发中常用的函数。项目采用 ES6 Module 输出方式。

## 下载和使用

克隆或下载该项目至 src 文件夹中的任意位置，并使用 import 调用，导入的名称可自己定义。
```js
// 加载 ktool 整体内容
import $$ from ' `ktool所在文件夹的相对路径`/ktool ';

// 加载 ktool 的指定类型的内容
import $$array from ' `ktool所在文件夹的相对路径`/ktool/array ';
import $$date from ' `ktool所在文件夹的相对路径`/ktool/date ';

// 加载 ktool 的指定方法
import unique from ' `ktool所在文件夹的相对路径`/ktool/array/unique ';
import debounce from ' `ktool所在文件夹的相对路径`/ktool/function/debounce ';
```

使用方法类似 Underscore 和 Lodash 的 _ 变量：
```js
const arr = [1, 2, 2, 3, 5, 5];

$$.unique(arr)
// => [1, 2, 3, 5]

$$array.unique(arr)
// => [1, 2, 3, 5]

unique(arr)
// => [1, 2, 3, 5]
```

## 注意

###
1. 该项目现为测试版，仅为学习和测试使用，不保证线上运行的可靠性。
2. 该项目的内容大部分为作者开发中的代码积累，少部分为网上的参考整理，如果对您有帮助，请 Star 支持一下，谢谢！