#设置客户端连接mysql使用的编码
SET NAMES UTF8;
#丢弃数据库mkf,如果存在的话
DROP DATABASE IF EXISTS mkf;
#创建数据库mkf
#使用UTF8作为数据库的编码
CREATE DATABASE mkf CHARSET=UTF8;
#进入该数据库
USE mkf;
#创建用户数据表mkf_user
CREATE TABLE mkf_user(
	uid INT(11) NOT NULL,
	uname VARCHAR(16) default NULL,
	upwd VARCHAR(16) default NULL,
	email VARCHAR(32) default NULL,
	phone VARCHAR(16) default NULL,
	avatar VARCHAR(128) default NULL,
	user_name VARCHAR(32) default NULL,
	gender int(11) DEFAULT NULL
);

/****京心造物****/
CREATE TABLE mkf_jxzw(
	lid INT PRIMARY KEY AUTO_INCREMENT, #产品编号
	family_id INT,              #所属型号家族编号
	title VARCHAR(128),         #主标题
  subtitle VARCHAR(128),      #副标题
  price DECIMAL(10,2),        #价格
  promise VARCHAR(64),        #服务承诺
  spec VARCHAR(64),           #规格/颜色
  lname VARCHAR(32),          #商品名称
  category VARCHAR(32),       #所属分类
  shelf_time BIGINT,          #上架时间
  sold_count INT,             #已售出的数量
  is_onsale BOOLEAN           #是否促销中
);

/**笔记本电脑图片**/
CREATE TABLE mkf_product_pic(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  lid INT,             #产品编号
  sm VARCHAR(128),            #小图片路径
  md VARCHAR(128),            #中图片路径
  lg VARCHAR(128)             #大图片路径
);
/**手机产品图片**/
CREATE TABLE mkf_phone_pic(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  lid INT,             #产品编号
  sm VARCHAR(128),            #小图片路径
  md VARCHAR(128),            #中图片路径
  lg VARCHAR(128)             #大图片路径
);

/****首页商品/京造京选****/
CREATE TABLE mkf_index_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  details VARCHAR(128),
  pic VARCHAR(128),
  price DECIMAL(10,2),
  href VARCHAR(128),
  seq_recommended TINYINT,
  seq_new_arrival TINYINT,
  seq_top_sale TINYINT
);

/****商品/手机家族型号****/
CREATE TABLE mkf_phone_family(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  fname VARCHAR(32)
);


/************手机*************/
CREATE TABLE mkf_phone(
  lid INT PRIMARY KEY AUTO_INCREMENT, #产品编号
  family_id INT,              #所属型号家族编号
  title VARCHAR(128),         #主标题
  subtitle VARCHAR(128),      #副标题
  price DECIMAL(10,2),        #价格
  evaluate INT,       #评价数量
  sales INT,          #销量
  stock INT,          #库存量
  color VARCHAR(64),          #规格/颜色
  memory VARCHAR(32),         #内存容量
  editon VARCHAR(32)         #版本
);

/*********************************************数据导入*********************************/
/*************************************************************************************/
/***********手机产品***********/
INSERT INTO mkf_phone VALUES
(NULL,1,'Apple iPhone XS Max (A2104) 移动联通电信4G手机 双卡双待 金色 512G 全网通','移动联通电信',12799,1000,1188,200,'金色','512G','全网通'),
(NULL,1,'Apple iPhone XS Max (A2104) 移动联通电信4G手机 双卡双待 金色 256G 全网通','移动联通电信',10999,1000,1188,200,'银色','256G','全网通'),
(NULL,1,'Apple iPhone XS Max (A2104) 移动联通电信4G手机 双卡双待 金色 128G 全网通','移动联通电信',9599,1000,1188,200,'深空灰','128G','全网通'),
(NULL,2,'苹果 Apple iPhone X (A1865) 移动联通电信4G手机 银色 128G 全网通','移动联通电信',8299,888,1188,200,'银色','256G','全网通'),
(NULL,2,'苹果 Apple iPhone X (A1865) 移动联通电信4G手机 深空灰色 64G 全网通','移动联通电信',7099,888,1188,200,'深空灰色','64G','全网通'),
(NULL,5,'华为 HUAWEI nova 2 移动联通电信4G手机 双卡双待 极光蓝 4G＋64G 全网通','移动联通电信',1799,888,1188,200,'极光蓝','4+64G','全网通'),
(NULL,6,'华为 HUAWEI Mate 10 极光蓝 64G 全网通','NULL',3399,888,1188,200,'极光蓝','64G','全网通'),
(NULL,8,'三星 Galaxy S8（SM-G9500） 迷夜黑 4+64G 全网通','NULL',3699,888,1188,200,'迷夜黑','4+64G','全网通'),
(NULL,9,'魅族 16th 全面屏手机 移动联通电信4G手机 远山白 6G+128G 全网通','骁龙845！液冷散热铜管！魅族16th系列',2998,888,1188,200,'远山白','6+128G','全网通'),
(NULL,9,'魅族 16th 全面屏手机 移动联通电信4G手机 静夜黑 8G+128G 全网通','骁龙845！液冷散热铜管！魅族16th系列',3298,888,1188,200,'静夜黑','8+128G','全网通'),
(NULL,12,'小米 红米Note5A 全网通版 4G手机 双卡双待 香槟金 4G+64G 全网通','1600万像素柔光自拍，5.5”高清大屏，轻薄机身好手感！高通骁龙处理器！',999,888,1188,200,'香槟金','4+64GB','全网通');


/**手机型号家族**/
INSERT INTO mkf_phone_family VALUES
(NULL,'Apple iPhone XS Max'),
(NULL,'Apple iPhone X'),
(NULL,'Apple iphone 8 plus'),
(NULL,'Apple iphone 7 plus'),
(NULL,'HUAWEI nova 2'),
(NULL,'HUAWEI Mate 10'),
(NULL,'Galaxy Note8'),
(NULL,'Galaxy S8'),
(NULL,'魅族 16th'),
(NULL,'小米8'),
(NULL,'小米6X'),
(NULL,'红米Note5A');

/*********用户数据***********/
INSERT INTO mkf_user VALUES
('1', 'liwenhua'   ,'lwh123456' ,'lwh@tedu.com'      ,'18788089988','img/avatar/1.jpg','李文华','0'),
('2', 'chengliang' ,'ddd123456' ,'dangdang@tedu.com' ,'15832056677','img/avatar/3.jpg','成亮'  ,'0'),
('3', 'yangyan'    ,'libenka'   ,'wenhua.li@tedu.com','18712345555',null              ,'杨燕'  ,'1'),
('4', 'zhangdong'  , '123456'   ,'850248813@qq.com'  ,'15802507525',null              ,'张东'  ,'0'),
('5', 'fenglin'    , '2017713'  ,'12458148@qq.com'   ,'13596542654',null              ,'冯琳'  ,'1'),
('6', 'zhangmanman', '000009588','111111111@qq.com'  ,'12345666666',null              ,'张蔓蔓','1');

/****首页商品/京造京选****/
INSERT INTO mkf_index_product VALUES
(NULL, 'Apple MacBook Air系列', '酷睿双核i5处理器|256GB SSD|8GB内存|英特尔HD显卡620含共享显卡内存', 'img/index/study_computer_img1.png', 6988, 'product_details.html?lid=1', 0, 1, 1),
(NULL, '小米Air 金属超轻薄', '酷睿双核i5处理器|512GB SSD|2GB内存|英特尔HD独立显卡', 'img/index/study_computer_img2.png', 3488, 'product_details.html?lid=5', 0, 2, 2),
(NULL, '联想E480C 轻薄系列', '酷睿双核i7处理器|256GB SSD|4GB内存|英特尔HD显卡680M', 'img/index/study_computer_img3.png', 5399, 'product_details.html?lid=9', 0, 3, 3),
(NULL, '华硕RX310 金属超极本', '酷睿双核i5处理器|512GB SSD|4GB内存|英特尔HD游戏级显卡', 'img/index/study_computer_img4.png', 4966, 'product_details.html?lid=13', 0, 4, 4),
(NULL, '联想小新700 电竞版游戏本', '酷睿双核i7处理器|1TGB SSD|8GB内存|英特尔HD显卡620含共享显卡内存', 'img/index/study_computer_img5.png', 6299, 'product_details.html?lid=17', 0, 5, 5),
(NULL, '戴尔灵越燃7000 轻薄窄边', '酷睿双核i5处理器|512GB SSD|2GB内存|英特尔HD显卡', 'img/index/study_computer_img3.png', 5199, 'product_details.html?lid=19', 0, 6, 6),
(NULL, '神州战神Z7M 高性价比游戏本', '酷睿双核i7处理器|1TGB SSD|8GB内存|英特尔HD游戏机独立显卡', 'img/index/study_computer_img4.png', 5799, 'product_details.html?lid=38', 0, 0, 0),

(NULL,'京造 便携旅行套装 充气U型枕+眼罩+收纳袋 深灰色',NULL,'img/index/3_05905757487527204_240.jpg',54, 'product_details.html?lid=2', 1, 0, 0),
(NULL,'京造 极简主义都市双肩背包 休闲商务笔记本电脑包14英寸-15.6英寸 男女书包 浅灰色 14英寸-15.6英寸',NULL,'img/index/3_05805737840308193_240.jpg',99, 'product_details.html?lid=3', 2, 0, 0),
(NULL,'京造 微电流滚轮V脸美容器 脸部按摩仪 面部提拉紧致按摩器',NULL,'img/index/3_05866037166808466_240.jpg',199, 'product_details.html?lid=4', 3, 0, 0),
(NULL,'京造X乐范 眼部冷热按摩仪 冰暖双感护眼仪 硅胶颗粒振动焕活美眼仪 粉色',NULL,'img/index/3_05893697970309775_240.jpg',369, 'product_details.html?lid=5', 4, 0, 0),
(NULL,'京造 玻璃茶杯男不锈钢过滤办公茶具杯带盖泡花茶绿茶耐热玻璃杯套装 500ML',NULL,'img/index/3_05893690376091209_240.jpg',69.9, 'product_details.html?lid=6', 5, 0, 0);

/********笔记本电脑图片**********/
INSERT INTO mkf_product_pic VALUES
(NULL, 1, 'img/product/sm/57b12a31N8f4f75a3.jpg','img/product/md/3_05905757487527204_240.jpg','img/product/lg/57b12a31N8f4f75a3.jpg'),
(NULL, 2, 'img/product/sm/57ad359dNd4a6f130.jpg','img/product/md/3_05845469910829166_240.jpg','img/product/lg/57ad359dNd4a6f130.jpg'),
(NULL, 3, 'img/product/sm/57ad8846N64ac3c79.jpg','img/product/md/3_05805737840308193_240.jpg','img/product/lg/57ad8846N64ac3c79.jpg'),
(NULL, 4, 'img/product/sm/57ad8846N64ac3c79.jpg','img/product/md/3_05866037166808466_240.jpg','img/product/lg/57ad8846N64ac3c79.jpg'),
(NULL, 5, 'img/product/sm/57ad8846N64ac3c79.jpg','img/product/md/3_05893690376091209_240.jpg','img/product/lg/57ad8846N64ac3c79.jpg');

/***********京心造物*************/
INSERT INTO mkf_jxzw VALUES
(43,10,'神舟(HASEE)战神Z6-KP7GT 15.6英寸游戏本笔记本电脑(i7-7700HQ 8G 1T+128G SSD GTX1050 1080P)黑色','预约享5499抢！【128G SSD+1T HDD】双硬盘，春风“十”里，期待是你！',5699,' *退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货','Z6 GT【i7 128G+1T GTX1050】','神舟战神Z6-KP7GT','游戏本',156123456789,1844,true),
(1,1,'Apple MacBook Air 13.3英寸笔记本 银色(Core i5 处理器/8GB内存/128GB SSD闪存 MMGF2CH/A)','5月焕新季，领券买新机！神券满6000减600！一体成型金属机身，纤薄轻巧，长达12小时续航',6988,'*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货',null,'AppleMacBook Air','轻薄本',150123456789,0,true),
(2,1,'京造 便携旅行套装 充气U型枕+眼罩+收纳袋 深灰色','5月焕新季，领券买新机！神券满6000减600！一体成型金属机身，纤薄轻巧，长达12小时续航',54,'*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货',null,'AppleMacBook Air','轻薄本',150123456789,0,true),
(3,1,'京造 极简主义都市双肩背包 休闲商务笔记本电脑包14英寸-15.6英寸 男女书包 浅灰色 14英寸-15.6英寸','三挡风力随心调，一档自然风可连续吹11小时，让您清凉一夏！',99,'*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货',null,'AppleMacBook Air','轻薄本',150123456789,0,true),
(4,2,'京造 微电流滚轮V脸美容器 脸部按摩仪 面部提拉紧致按摩器','三挡风力随心调，一档自然风可连续吹11小时，让您清凉一夏！',199,'*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货',null,'AppleMacBook Air','轻薄本',150123456789,0,true),
(5,3,'京造X乐范 眼部冷热按摩仪 冰暖双感护眼仪 硅胶颗粒振动焕活美眼仪 粉色','三挡风力随心调，一档自然风可连续吹11小时，让您清凉一夏！',369,'*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货',null,'AppleMacBook Air','轻薄本',150123456789,0,true),
(6,4,'京造 玻璃茶杯男不锈钢过滤办公茶具杯带盖泡花茶绿茶耐热玻璃杯套装 500ML','三挡风力随心调，一档自然风可连续吹11小时，让您清凉一夏！',69.9,'*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货',null,'AppleMacBook Air','轻薄本',150123456789,0,true);


/********手机图片**********/
INSERT INTO mkf_phone_pic VALUES
(NULL, 1, 'img/product/sm/iphonsXS-3_05912976387583149_60.jpg','img/product/md/iphonsXS-3_05905759410575943_60.jpg','img/product/lg/iphonsXS-3_05912976387583149_1280.jpg'),
(NULL, 1, 'img/product/sm/XMAX-3_05907759213505068_60.jpg','img/product/md/XMAX-3_05866945637217747_240.jpg','img/product/lg/XMAX-3_05907759213505068_1280.jpg'),
(NULL, 1, 'img/product/sm/XMAX-3_05907759213505068_60.jpg','img/product/md/XMAX-3_05866945637217747_240.jpg','img/product/lg/XMAX-3_05907759213505068_1280.jpg'),
(NULL, 1, 'img/product/sm/XMAX-3_05907759213505068_60.jpg','img/product/md/XMAX-3_05866945637217747_240.jpg','img/product/lg/XMAX-3_05907759213505068_1280.jpg'),
(NULL, 1, 'img/product/sm/XMAX-3_05907759213505068_60.jpg','img/product/md/XMAX-3_05866945637217747_240.jpg','img/product/lg/XMAX-3_05907759213505068_1280.jpg'),
(NULL, 1, 'img/product/sm/XMAX-3_05907759213505068_60.jpg','img/product/md/XMAX-3_05866945637217747_240.jpg','img/product/lg/XMAX-3_05907759213505068_1280.jpg'),
(NULL, 1, 'img/product/sm/XMAX-3_05907759213505068_60.jpg','img/product/md/XMAX-3_05866945637217747_240.jpg','img/product/lg/XMAX-3_05907759213505068_1280.jpg'),
(NULL, 2, 'img/product/sm/iphonsXS-3_05912976387583149_60.jpg','img/product/md/iphonsXS-3_05905759410575943_60.jpg','img/product/lg/iphonsXS-3_05912976387583149_1280.jpg'),
(NULL, 3, 'img/product/sm/iphonsXS-3_05912976387583149_60.jpg','img/product/md/iphonsXS-3_05905759410575943_60.jpg','img/product/lg/iphonsXS-3_05912976387583149_1280.jpg'),
(NULL, 4, 'img/product/sm/iphoneX-1_05624160540953612_60.jpg','img/product/md/iphoneX-3_05810754699126377_360.jpg','img/product/lg/iphoneX-meizu-1_05580941231864847_360.jpg'),
(NULL, 5, 'img/product/sm/iphoneX-1_05624160540953612_60.jpg','img/product/md/iphoneX-3_05810754699126377_360.jpg','img/product/lg/iphoneX-meizu-1_05580941231864847_360.jpg'),
(NULL, 9, 'img/product/sm/meizu-1_05580941231864847_60.jpg','img/product/md/meizu-1_05580941231864847_360.jpg','img/product/lg/meizu-3_05905759390745784_60.jpg');