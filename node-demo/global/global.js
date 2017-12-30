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