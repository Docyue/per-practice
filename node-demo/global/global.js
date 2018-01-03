// __dirname	当前模块文件所在目录解析后的绝对路径————该属性并非全局，而是模块作用域下的    
// __filename   当前模块文件解析后的绝对路径————该属性并非全局，而是模块作用域下的    
// console.log(__dirname);
// console.log(__filename);

// 日期对象
// var d = new Date();
// var arr = new Array(1,2,3);

// 全局对象
// ＃＃＃＃＃＃process
// console.log(process);

// ＃＃＃process 属性
// console.log(process.argv)  // 带参数执行
// console.log(process.version) // node 版本
// console.log(process.versions) // node 版本node依赖包版本信息
// console.log(process.execPath) // 开启当前进程的绝对路径
// console.log(process.env) // 当前用户信息
// console.log(process.pid) // 当前进程的pid
// console.log(process.title) // 当前进程的显示名称
// console.log(process.arch) // 当前cpu处理器架构
// console.log(process.platform) // 当前操作系统平台
// console.log(process.cwd) // 当前进程的工作目录
// console.log(process.chdir(directory)) // 改变当前进程的工作目录
// console.log(process.memoryUsage) // 返回node进程的内存使用情况，单位byte
// console.log(process.exit(code)) // 推出
// console.log(process.kill(pid)) // 向进程发送信息

// setInterval(function(){
// 	console.log("a");
// }, 10000)

// setTimeout(function(){
// 	process.exit();
// }, 50000)

// ＃＃＃标准输入输出流（i/o） stdin stdout
// stdin stdout 提供了操作输入数据和输出数据的方法，通常称为io操作
// stadin 标准输入流
// stadout 标准输出流	

// ＃＃＃buffer类
// 可以用于更好的操作二进制数据的类
// 类方法：
const buf = Buffer.alloc(5);
const buf0 = Buffer.alloc(5, 'a');
const buf1 = Buffer.allocUnsafe(5); // 以这种方式创建的 Buffer 实例的底层内存是未初始化的。 新创建的 Buffer 的内容是未知的，且可能包含敏感数据。 可以使用 buf.fill(0) 初始化 Buffer 实例为0。
const buf2 = Buffer.allocUnsafeSlow(5); // 以这种方式创建的 Buffer 实例的底层内存是未初始化的。 新创建的 Buffer 的内容是未知的，且可能包含敏感数据。 可以使用 buf.fill(0) 初始化 Buffer 实例为0。
const buf3 = Buffer.byteLength('\u00bd + \u00bc = \u00be','utf8'); // 要计算长度的值
const buf4 = Buffer.compare(Buffer.from('1234'),Buffer.from('0123')); //比较 buf1 和 buf2 ，通常用于 Buffer 实例数组的排序。
const buf5 = Buffer.concat(list); // 返回一个合并了 list 中所有 Buffer 实例的新建的 Buffer 
const buf6 = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]); // 通过一个八位字节的 array 创建一个新的 Buffer 
const boolean = Buffer.isEncoding(encoding); // 如果 encoding 是一个支持的字符编码则返回 true，否则返回 false
const boolean = Buffer.isBuffer(obj); // 如果 obj 是一个 Buffer 则返回 true ，否则返回 false 。
const boolean = Buffer.poolSize(encoding) // 这是用于决定预分配的、内部 Buffer 实例池的大小的字节数。 这个值可以修改

