SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `articles`;
DROP TABLE IF EXISTS `article_tips`;
CREATE TABLE `articles` (
   `id` int(11) auto_increment not null comment '编号',
   `name` char(50) not null comment '文章名',
   `tip` char(20) default '未分类' not null comment '文章标签/类型',
   `article_desc` longtext comment '摘要',
   `content` longtext comment '正文',
   `auth` char(20) not null comment '作者',
   `article_upDate` Date not null default '1997-07-02',
   PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE `article_tips` (
    `id` int(11) auto_increment not null comment '编号',
    `tip` char(20) not null comment '文章标签/类型',
    `name` char(20) not null comment '类型简称',
    `icon` char(20) not null comment '字体图标',
    PRIMARY KEY(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

BEGIN;
INSERT INTO `articles`(name,tip,article_desc,content,auth,article_upDate) VALUES
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04'),
('C从入门到放弃', 'C', 'C从入门到放弃文章摘要', 'C从入门到放弃文章主体', '田振民', '2018-04-04'),
('HTML5从入门到放弃', 'HTML5', 'HTML5从入门到放弃文章摘要', 'HTML5从入门到放弃文章主体', '王磊', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '汪亚玲', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '张智', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '王晓峰', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '王晓峰', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '汪亚玲', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '张智', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '王磊', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '张智', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '王磊', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '汪亚玲', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '汪亚玲', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '王磊', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '汪亚玲', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '张智', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '王磊', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '汪亚玲', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '张智', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '汪亚玲', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '王磊', '2018-04-04'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04');

INSERT INTO `article_tips`(tip,name,icon) VALUES
('java', 'java编程技巧', 'icon-java'),
('C','C语言编程技巧','icon-C'),
('HTML5','HTML5编程技巧','icon-html5');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
