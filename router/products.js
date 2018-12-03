const express = require("express")
const router = express.Router()
const pool = require("../pool")

//http://localhost:3000/products?kwords=macbook i5 128g
router.get("/",(req,res)=>{
              //url.parse(req.url,true) 
  var kwords = req.query.kwords;//"macbook i5 128g"
  console.log("0001+"+kwords)
  var arr=kwords.split(" ")//arr[macbook,i5,128g]
  for(var i=0;i<arr.length;i++){
    arr[i]=`title like '%${arr[i]}%'`
  }//arr[title like '%macbook%',...]
  var where=" where "+arr.join(" and ")
  console.log("where:"+where)
  //where title like '%macbook%' and title like '%i5%' and title like '%128g%'
  var output={//要回发客户端支持分页的对象
    //pno:0,//页号，从0开始
    pageSize:8,//每页9个商品
    //count:0,//查询结果的总记录数
  }
  output.pno=req.query.pno;
  console.log("001:"+output.pno)
  var sql="SELECT * FROM mkf_phone ";
  //var sql="SELECT *,( SELECT md from mkf_phone_pic where lid=lid LIMIT 1 ) as md FROM mkf_phone ";
  console.log("002:"+sql+where);
  pool.query(sql+where,[],(err,result)=>{
    if(err) console.log(err);
    output.count=result.length;//获得总记录数
    output.pageCount=Math.ceil(//计算总页数
      output.count/output.pageSize);
      console.log(output.pno*8,output.pno*8+8);
    output.products=//截取分页后的集
      result.slice(output.pno*8,output.pno*8+8);
    console.log(output)

    res.writeHead(200,{
      "Content-Type":"application/json;charset=utf-8",
      "Access-Control-Allow-Origin":"*"
    })
    res.write(JSON.stringify(output))
    res.end()
  })
  //测试地址：products?kwords=i5&pno=1



})

module.exports=router;