$(function(){
  if(location.search.indexOf("kwords=")!=-1){
    var kwords=location.search.split("=")[1];
    var pno=0;
    function loadPage(no=0){//封装AJAX 发送新页码
      pno=no;
      $.ajax({
        url:"http://localhost:3000/products",
        type:"get",
        data:{kwords,pno},
        dataType:"json",
        success:function(output){
          console.log(output)
          var { products,pageCount }=output;
          var html="";
          for(var p of products){
            var {lid,title,price,md,hp,sales} = p;
              html+=`<li class="gl-item">
                      <div class="goods-content">
                        <div class="goods-pic">
                          <a href="product_details.html?lid=${lid}">
                            <img src="${md}" title="${title}" alt="${title}"></a>
                        </div>  
                        <div class="goods-info">
                          <div class="goods-pic-scroll-show">
                            <ul>
                              <li><a href="#">
                                <img src="./img/product/sm/dell_1_3_05941227187515089_60.jpg" alt="">
                              </a></li>
                              <li><a href="#">
                                <img src="./img/product/sm/dell_1_3_05941227187515089_60.jpg" alt="">
                              </a></li>
                              <li><a href="#">
                                <img src="./img/product/sm/dell_1_3_05941227187515089_60.jpg" alt="">
                              </a></li>
                              <li><a href="#">
                                <img src="./img/product/sm/dell_1_3_05941227187515089_60.jpg" alt="">
                              </a></li>
                              <li><a href="#">
                                <img src="./img/product/sm/dell_1_3_05941227187515089_60.jpg" alt="">
                              </a></li>
                            </ul>
                          </div>
                          <div class="goods-title">
                            <a href="product_details.html?lid=${lid}">${title}</a>
                          </div>
                          <div class="goods-price">
                            <em class="sale-price">￥${price.toFixed(2)}</em>
                          </div>
                          <div class="store">
                            <a href="#">官方自营</a>
                          </div>
                          <div class="btn">
                            <button>-</button>
                            <input type="text" value="1">
                            <button>+</button>
                          </div>
                          <div class="goods-sub">
                            <span><i></i>加入对比</span>
                          </div>
                          <div class="goods-add" >
                            <a href="#">
                              <i class="icon-shopping-cart" data-lid="${lid}"></i>
                              加入购物车
                            </a>
                          </div>
                          <div class="sell-stat" >
                            <ul>
                              <li><a href="#">${sales}</a><p>商品销量</p></li>
                              <li><a href="#">${hp}%</a><p>用户评论</p></li>
                              <li><a href="#">0</a><p>在线客服</p></li>
                            </ul>
                          </div>
                        </div>          
                      </div>
                    </li>`;
          }
          var $plist=$("#p_list")
          $plist.html(html)
  
          var html1="";
          html1+=`<li>
                    <a href="#" class="demo"><span>首页</span></a>
                  </li>
                  <li>
                    <a href="#" class="demo"><span>上一页</span></a>
                  </li>`;
          for(var i=1;i<=pageCount;i++){
            html1+=`<li>
              <a href="#" class="demo"><span class=" ${i==pno+1?'currentpage':''} ">${i}</span></a>
            </li>`
            }
          html1+=`<li>
                    <a href="#" class="demo"><span>...</span></a>
                  </li>
                  <li>
                    <a href="#" class="demo"><span>下一页</span></a>
                  </li>
                  <li>
                    <a href="#" class="demo"><span>末页</span></a>
                  </li>`;
          //删除自动生成的li
          // $ul.children.eq(0).remove()
          // $ul.children.eq(1).remove()
          // $ul.children.eq($ul.length-2).remove()
          // $ul.children.eq($ul.length-1).remove()

          var $ul=$plist.parent().next().find("ul");       
          $ul.html(html1)
  
          if(pno==0){//如果是第一页，禁用上一页和首页
            $ul.children().eq(1).addClass("disabled")
            $ul.children().first().addClass("disabled")
          }else{
            $ul.children().eq(1).removeClass("disabled")
            $ul.children().first().removeClass("disabled")
          }
  
          if(pno==pageCount-1){//如果是最后一页，禁用下一页和末页
            $ul.children().last().prev().addClass("disabled")//下一页
            $ul.children().last().addClass("disabled")//末页
          }else{
            $ul.children().last().prev().removeClass("disabled")//下一页
            $ul.children().last().removeClass("disabled")//末页
          }     
        }
      })
    }
    loadPage();
    //$.ajax({....})
    var $plist=$("#p_list")
    var $ul=$plist.parent().next().find("ul"); 
    //放在ajax外部  只在页面首次加载时绑定一次 
    $ul.on("click","a",function(e){
        e.preventDefault();
        var $a=$(this);
        //console.log($a)
        //除了禁用和当前正在激活按钮之外才能点击
        if(!$a.parent().is(".disabled,.currentpage")){
        //console.log($a.children().html())
          if($a.children().html()=="首页")
            var no=0;
          else if($a.children().html()=="上一页")
            var no=pno-1;  
          else if($a.children().html()=="下一页")
            var no=pno+1;
          else if($a.children().html()=="末页")
            var no=pageCount-1;
          else //1.2.3.4....按钮
            var no=$a.children().html()-1;
            //alert(no)
          loadPage(no);      //重新加载页面内容
        }
    });
    $plist.on("click","button",function(){
      //获得目标元素保存在变量btn中
      //找到$btn旁边的input，保存在变量$input中
      //获得$input的内容保存在变量n中
      //如果$btn
    })

  }
})