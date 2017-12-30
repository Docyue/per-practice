// 一个文件就是一个模块
// 一个模块一个作用域
// 当前文件被解析过后的绝对路径
// console.log(__filename);

// 模块加载方式
require('../main.js')

// －－－－－模块加载机制  
//  ##### 文件路径
// 	绝对路径 
// 	相对路径
// 	require('./main.js') // 有路径，加载相对路径模块，也可以写成绝对路径
// 	require('main.js') // 没写路径，代表加载node的核心模块或者node_modules

 	
//  ##### 文件查找   文件名称 > .js > .json > .node > 抛错
// 	require('./main') 
// 	首先按照加载模块的文件名称进行查找；    
// 	如果没找到，则会在模块文件后加上.js后缀，进行查找；
// 	如果没找到，则会在模块文件后加上.json后缀，进行查找；
// 	如果没找到，则会在模块文件后加上.node后缀，进行查找；

// －－－－－－作用域
// 在一个模块中定义的变量，其作用域范围是当前模块，外部文件不能直接访问；
// 如果要能够访问，可以：
// ＃＃＃ 作为一个global 对象的属性，不推荐
// ＃＃＃ 使用模块对象 module 
//

// －－－－－－module对象
// 子对象：export 对象
// 可以通过这个对象吧一个模块中的局部变量对象进行提供访问
// ＃＃＃ module.exports
// let test = require("./test") // 返回值就是被加载模块中的module.exports
// console.log(test);
// ＃＃＃ 在模块作用域，还有一饿内置模块对象，exports，其实就是module.exports
// console.log(module.exports === exports); // true


// 全局变量在所有模块中均可使用。 但以下变量的作用域只在模块内;
// __dirname
// __filename
// exports
// module
// require()