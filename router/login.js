const express=require('express');
//引入连接池
const pool=require('../pool');
//创建路由
var router=express.Router();//调用路由器调用路由器

//在router路由器下添加路由
//1.用户登录
router.post('/login',(req,res)=>{
	var obj=req.body;
	//console.log(obj);
	var $uname=obj.uname;
	if (!$uname){
		res.send({code:401,msg:'uname required'});
		return;
	}
	//res.send('登录成功');
	var $upwd=obj.upwd;
	if (!$upwd){
		res.send({code:402,msg:'upwd required'});
		return;
	}
	//执行判断是否登录成功---用户名和密码同时正确
	//查询数据，查询的结果中，要有对应的记录
	var sql='SELECT * FROM mkf_user WHERE uname=? AND upwd=?';
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		//console.log(reslut);
		//返回一个数组
		if (result.length>0){
			res.send({code:200,msg:'login success'});
		}else{
			res.send({code:201,msg:'login err'});
		}
	});
});











module.exports=router;