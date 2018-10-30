const express=require('express');
//引入连接池
const pool=require('../pool.js');
//创建路由器
var router=express.Router();//调用路由器

//在router路由器下添加路由
//2.根据用户名称查询数据库中是否已存在该用户
router.get('/selectUname',(req,res)=>{
	var $uname=req.query.uname;
	if ($uname==''){
		res.send("用户名称不能为空");
		return;
	}
	var sql="SELECT * FROM mkf_user WHERE uname=?";
	pool.query(sql,[$uname],(err,result)=>{
		if(result.length>0){
			res.send('301');//用户名已存在
		}else{
			res.send('302');//用户名可用！
		}
	});
});
//1.用户注册---判断是否输入信息是否为空
router.post('/register',(req,res)=>{
	//console.log(req.body);
	var obj=req.body;
	//验证表单提交的内容是否为空
	//验证用户名是否为空
	var $uname=obj.uname;
	if($uname==''){
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
	var $user_name=obj.user_name;
	if($user_name==''){
		res.send({code:405,msg:'user_name required'});
		return;
	}
	//res.send('注册成功');
	//以上验证都通过了，执行插入数据库操作
	var sql='INSERT INTO mkf_user VALUES(NULL,?,?,?,?,NULL,?,NULL)';
	pool.query(sql,[$uname,$upwd,$email,$phone,$user_name],(err,result)=>{
		if(err) throw err;
		//res.send('insert success');
		if(result.affectedRows>0){
			res.send({code:200,msg:'reg success'});
		}else{
			res.send({code:201,msg:'reg error'});
		}
	});
});





//导出路由器
module.exports=router;
