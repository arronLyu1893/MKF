$(function(){//原window.onload=function
  if(location.search.indexOf("lid=")!=-1){
    var lid=location.search.split("=")[1];
    (async function(){
      var res=await $.ajax({//使用$.ajax代替自己封装的ajax
        url:"http://localhost:3000/details",
        type:"get",
        data:{lid},//"lid="+lid,  {lid:lid}-->{}对象语法
        dataType:"json"
      })//var res=open(res);
      console.log(res);
      var { product,pics,specs} = res;
      var {title,subtitle,price,evaluate} = product;//解构
      var divDetails=document.getElementById("details")
      var divPrice=document.getElementById("price")
      document.querySelector(".breadcrumb>li:last-Child>span").innerHTML=title; 
      divDetails.children[0].innerHTML=title;
      divDetails.children[1].innerHTML=subtitle;
      divPrice.children[1].innerHTML="￥"+price.toFixed(2);
      divPrice.nextElementSibling.children[2].innerHTML="共有"+evaluate+"条评价";
      divPrice.nextElementSibling.children[3].innerHTML="(销量："+evaluate+"0)";
      //动态加载 内存规格
      var html="";
      for(var sp of specs){
        html+=`<li><a href="product_details.html?lid=${sp.lid}">${sp.memory}</a></li>`
      }
      document.querySelector(".ncs_spec>dl:nth-child(2)>dd>ul").innerHTML=html;
      //动态加载 颜色规格
      var html="";
      for(var sp of specs){
        html+=`<li><a href="product_details.html?lid=${sp.lid}"><img src="img/product/sm/3_05899132133372532_60.jpg">${sp.color}</a>
        </li>`
      }
      document.querySelector(".ncs_spec>dl:nth-child(1)>dd>ul").innerHTML=html;
      //动态加载 大中小图片
      var divPrev=document.getElementById("preview");
      var ul=divPrev.querySelector("div>div:nth-child(2)>div>ul");
      var html="";
      for(var pic of pics){
        var {sm,md,lg}=pic;
        html+=`<li><img src="${sm}" data-md="${md}" data-lg="${lg}">
        </li>`
      }
      ul.innerHTML=html;
      ul.style.width=62*pics.length+"px";
      var mImg=divPrev.querySelector("div>div>div>img")
      mImg.src=pics[0].md;
      //var lgImg=divPrev.querySelector("div>div:nth-child(3)>img")
      //lgImg.src=pics[0].lg;
      var lgImg=document.getElementById("div-lg");
      lgImg.style.backgroundImage=`url(${pics[0].lg})`;

      //鼠标进入 小图片 自动加载中图片 大图片
      ul.onmouseover=function(e){
        if(e.target.nodeName=="IMG"){
          var img=e.target;
          var md=img.dataset.md;
          var lg=img.dataset.lg;
          mImg.src=md;
          lgImg.style.backgroundImage=`url(${lg})`; 
        }
      }
      //小图左右移动
      var $ul=$(ul);
      var $left=$("#preview>div>div.small_img>a:first")
      var $right=$left.nextAll().last();
      //如果pics中图片中数>4,才可点击左右移动按钮
      if(pics.length>5){
        var moved=0;//记录已经左移的图片个数
        console.log($left);
        $left.on("click",function(){
          if(moved>0){//如果点右键，左移次数>0 才可左移动
            moved--;//已经左移的图片个数-1
            //ul的marginLeft最终等于:-li宽度62*左移图片个数
            $ul.css("marginLeft",-62*moved)//jquery中不用px
          }
        })
        $right.on("click",function(){
          if(moved<pics.length-5){//
            moved++;//已经左移的图片个数+1
            $ul.css("marginLeft",-62*moved)
            console.log(moved,pics.length-5)
          }
        })
      }
      var MSIZE=180,//mask的值
      MAX=360-MSIZE;//top和left的最大值
      //放大镜效果
      var $mImg=$(mImg),//中图片
          $lgImg=$("#div-lg"),//大图片
          $mask=$("#mask"),//半透明遮罩
          $smask=$("#super-mask");//透明玻璃板
      $smask.hover(
        function(){
          $mask.toggleClass("none");
          $lgImg.toggleClass("none");      
        }
      )
      .mousemove(function(e){
        var left=e.offsetX-MSIZE/2;
        var top=e.offsetY-MSIZE/2;
        if(left<0) left=0; else if(left>MAX) left=MAX;
        if(top<0) top=0; else if(top>MAX) top=MAX;
        $mask.css({left,top});
        $lgImg.css("background-position",`-${2*left}px -${2*top}px`)
      })


    })()
  }
})