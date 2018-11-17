//使用express创建web服务器
const express=require('express');
const bodyParser=require('body-parser');
/*引入路由模块*/
// const user=require('./router/user.js');
// const login=require('./router/login.js');
const index=require("./router/index222222")
const details=require("./router/details.js")

//1.构建服务器
var app=express();
app.listen(3000,()=>{
	console.log('success');
});

//2.托管静态资源public
app.use(express.static('public'));

//3.使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));

//使用路由器
//把用户路由器挂载到/user
//  /user/register
//app.use('/user',user);
//
//app.use('/login',login);
app.use("/index",index);
app.use("/details",details);
//接口地址地址http://localhost:3000/details/?lid=5

