(async function(){//用匿名函数自调 可以防止使用全局变量
    var res=await ajax({//await作用：挂起/等待,前提ajax为promise
        url:"http://localhost:3000/index/",
        type:"get",
        dataType:"json"
    });
    //console.log(res);
		// var p=res[0];	//取第一个商品
		// var {href,pic,title,price}=p;	//解构第一个商品的属性
		// var html=`<a href="${href}">
		// 	<img src="${pic}">
		// 	<p>${title }</p>
		// 	<div class="f2-price">
		// 			<i></i>
		// 			<b>￥${price.toFixed(2)}</b>
		// 	</div>
		// 	<div>京造精选</div>
		// </a>`;
		// /**
		//  * <div id="jzjx"
		//  * 		<img src="..
		//  * 		<div class="floor-2-box">
		//  * 				<div class="
		//  * 						 <div class="item-
		//  */
    // var parent=document.querySelector(
    //     "#jzjx>div:nth-child(2)>div:first-child");
		// parent.innerHTML=html;

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
		

})()
//测试 localhost:3000/index.html f12  结果返回[{},{},{},{},{}











// 以下为首页轮播特效JS
var slideshow = document.getElementById("slideshow");
var is = slideshow.getElementsByTagName('img');
var ls = slideshow.getElementsByTagName('li');

var c = 0;

setInterval(function(){
    c++;
// if (c==4){
//     c=0;
// }
    c = c==4?0:c;
    // document.title = c;

//  让所有图片都隐藏 所有li变灰色

    for (var i=0;i<is.length;i++) {
        is[i].style.display = 'none';
        ls[i].style.background = '#DDDDDD';
    }
//  让c号图片显示
    is[c].style.display = 'block';
//  让c号li变红
    ls[c].style.background = '#A10000';
},2000)