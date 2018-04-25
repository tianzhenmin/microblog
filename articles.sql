SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `articles`;
DROP TABLE IF EXISTS `article_tips`;
CREATE TABLE `articles` (
   `id` int(11) auto_increment not null comment '编号',
   `name` char(50) not null comment '文章名',
   `tip` char(20) default '未分类' not null comment '文章标签/类型',
   `article_desc` longtext comment '摘要',
   `article_link_str` char(50) not null comment '文章访问地址掩饰串',
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
INSERT INTO `articles`(name,tip,article_desc,content,auth,article_upDate,article_link_str) VALUES
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04', 'FNker6BYhyarXa2PY5WFsKezijmXGZhH'),
('C从入门到放弃', 'C', 'C从入门到放弃文章摘要', 'C从入门到放弃文章主体', '田振民', '2018-04-04', 'FNker6BYhyarXa24Y5WFsKezijmXGZhH'),
('HTML5从入门到放弃', 'HTML5', 'HTML5从入门到放弃文章摘要', 'HTML5从入门到放弃文章主体', '王磊', '2018-04-04', 'FNker6B5hyarXa2PY5WFsKezijmXGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '汪亚玲', '2018-04-04', 'FNker6rYhyarXa2PY5WFsKezijmXGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '张智', '2018-04-04', 'FNker6BYhysarXa2PY5WFsKezijmXGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '王晓峰', '2018-04-04', 'FNker6BYhyarXva2PY5WFsKezijmXGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '王晓峰', '2018-04-04', 'FNker6BYdhyarXa2PY5WFsKezijmXGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04', 'FNkexr6BYhyarXa2PY5WFsKezijmXGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04', 'FNkeer6BYhyarXa2PY5WFsKezijmXGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '汪亚玲', '2018-04-04', 'FaNker6BYhyarXa2PY5WFsKezijmXGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '张智', '2018-04-04', 'FNqker6BYhyarXa2PY5WFsKezijmXGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04', 'FNker6BYhyarXa2PY5WFsxKezijmXGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '王磊', '2018-04-04', 'FNker6BYhyarXa2PY5WFsKezijmXsGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '张智', '2018-04-04', 'FNker6BYhyarXax2PY5WFsKezijmXGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04', 'FNker6BYhyarXa2PY5WFsKezijmXaGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04', 'FNker6BYhyarXa2PY5WFsKezijmXGrZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '王磊', '2018-04-04', 'FNker6BYhyarXa2PdY5WFsKezijmXGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04', 'FNker6BYhyarXa2PY5WFsKezijmaXGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04', 'FNker6BYhyarrXa2PY5WFsKezijmXGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '汪亚玲', '2018-04-04', 'FNker6BaYhyarXa2PY5WFsKezijmXGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04', 'FNker6BYhyarXa2PY5WFsKezyijmXGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04', 'FNkery6BYhyarXa2PY5WFsKezijmXGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '汪亚玲', '2018-04-04', 'FNtker6BYhyarXa2PY5WFsKezijmXGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04', 'FNketr6BYhyarXa2PY5WFsKezijmXGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '王磊', '2018-04-04', 'FNker6BYhyarXa2PtY5WFsKezijmXGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04', 'FNker6BYhyarXa2PY5WFsKezijrmXGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04', 'FNker6BYhyarXa2PY5WFsKezi4jmXGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '汪亚玲', '2018-04-04', 'FNker6BYhyar7Xa2PY5WFsKezijmXGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '张智', '2018-04-04', 'FNker6BYhyarXa2PY125WFsKezijmXGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04', 'FNker6BYhy7arXa2PY5WFsKezijmXGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04', 'FNker6BYhyarXa2PY5WFsKezijm8XGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04', 'FNker6BYhyarXa2PY5W9FsKezijmXGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04', 'FNker6BYhyarXa2PY58WFsKezijmXGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '王磊', '2018-04-04', 'FNker6BYhy0arXa2PY5WFsKezijmXGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '汪亚玲', '2018-04-04', 'FNker6BYhyar7Xa2PY5WFsKezijmXGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '张智', '2018-04-04', 'FNker6BYhyarXa2PY5WpFsKezijmXGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04', 'FNker6BYhyarXa2PYm5WFsKezijmXGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '汪亚玲', '2018-04-04', 'FNker6BYhyarXa2PYu5WFsKezijmXGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '王磊', '2018-04-04', 'FNker6BYhyarXa2PY5WFysKezijmXGZhH'),
('java从入门到放弃', 'java', 'java从入门到放弃文章摘要', 'java从入门到放弃文章主体', '田振民', '2018-04-04', 'FNker6BYhyarXa2PY5WFssKezijmXGZhH');

INSERT INTO `article_tips`(tip,name,icon) VALUES
('java', 'java编程技巧', 'icon-java'),
('C','C语言编程技巧','icon-C'),
('HTML5','HTML5编程技巧','icon-html5');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
