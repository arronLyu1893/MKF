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
	uid INT(11) PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(16) default NULL,
	upwd VARCHAR(16) default NULL,
	email VARCHAR(32) default NULL,
	phone VARCHAR(16) default NULL,
	avatar VARCHAR(128) default NULL,
	user_name VARCHAR(16) default NULL,
	gender VARCHAR(1)
);
#插入用户数据
INSERT INTO mkf_user VALUES
('1', 'liwenhua','lwh123456','lwh@tedu.com','18788089988','img/avatar/1.jpg','李文华','0');
INSERT INTO mkf_user VALUES
('2', 'dangdang1','ddd123456','dangdang@tedu.com','15832056677','img/avatar/3.jpg','当当当','1');
INSERT INTO mkf_user VALUES
('3', 'wenhuali','libenka','wenhua.li@tedu.com','18712345555',null,null,null);
INSERT INTO mkf_user VALUES
('4', 'hushuang', '123456', '850248813@qq.com', '15802507525', null,'华双', null);
INSERT INTO mkf_user VALUES
('5', 'test713', '2017713', '12458148@qq.com', '13596542654', null, null, null);
INSERT INTO mkf_user VALUES
('6', 'fhr9588', '000009588', '111111111@qq.com', '12345666666', null, null,'0');
