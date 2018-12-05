$(function(){
  if(location.search.indexOf("kwords=")!=-1){
    var kwords=location.search.split("=")[1];
    var pno=0;
    $.ajax({
      url:"http://localhost:3000/products",
      type:"get",
      data:{kwords,pno},
      dataType:"json",
      success:function(output){
        console.log(output)
        var {products}=output;
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
        $("#p_list").html(html)
      }
    })
  }



})