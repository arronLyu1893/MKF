const express=require('express');
//引入连接池
const pool=require('../pool.js');
//创建路由器
var router=enpress.Router();//调用路由器

//在router路由器下添加路由
//1.用户注册
router.post('/register',(req,res)=>{
	//console.log(req.body);
	var obj=req.body;
	//验证表单提交的内容是否为空
	//验证用户名是否为空
	var $uname=obj.uname;
	if(#uname==''){
		res.send({code:401,msg:'uname required'});
		return;
	}
	var $upwd=obj.upwd;
	if($upwd==''){
		res.send({code:402,msg:'upwd required'});
		return;
	}
	var $email=obj.email;
	if($email==''){
		res.send({code:403,msg:'email required'});
		return;
	}
	var $phone=obj.phone;
	if($phone==''){
		res.send({code:404,msg:'phone required'});
		return;
	}
	res.send('注册成功');
});
