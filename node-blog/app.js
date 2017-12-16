// 应用程序的启动入口文件

// 加载express模块
var express = require('express');
// 家在模版应用
var swig = require('swig');
// 创建应用
var app = express();

/*
	配置应用模版
	定义当前应用所使用的模版引擎
	第一个参数：模版引擎的名称，同事也是模版文件的后缀；
	第二个参数表示用于解析处理模版内容的方法
 */
app.engine('html',swig.renderFile);
// 设置模版文件存放的目录，第一个参数必须是views,第二个参数是目录
app.set('views','./views')
// 注册模版引擎，第一个参数必须是view engine，第二个参数和app.engine这个方法中第一个
app.set('view engine','html')
// 开发过程中，需要取消缓存
swig.setDefaults({
	cache: false
})
/* 
	首页
	req request对象
	res response对象
	next 函数
 */
app.get('/',function(req,res,next){
	// res.send('<h1>欢迎光临我的博客</h1>')
	/*
		读取views目录下指定文件，解析并返回客户端
		第一个参数：表示模版文件，相对于views目录 views/index.html
		第二个参数：传递给模版使用的数据
	 */
	
	res.render('index');
})


// 监听http请求
app.listen(8081);