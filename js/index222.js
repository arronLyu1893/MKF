$(function(){//原window.onload=function
  $.ajax({
    url:"http://localhost:3000/index/",
    type:"get",
    dataType:"json",//ajax可自动将json转为obj
    success:function(res){
      console.log(res);
    //京造京选动态加载
    html=``;
    for(var p of res.slice(0)){//res去掉后面也可以
      var {href,pic,title,price}=p;
      //京造京选5个商品
      html+=`<a href="${href}">
      <img src="${pic}">
      <p>${title }</p>
      <div class="f2-price">
          <i></i>
          <b>￥${price.toFixed(2)}</b>
      </div>
      <div>京造精选</div>
    </a>`;
    }
    var parent=document.querySelector(
    "#jzjx>div:nth-child(2)>div:first-child");
    parent.innerHTML=html;
    }
  })//return promise
           //open(res)
  //.then(function(res){...})




})
