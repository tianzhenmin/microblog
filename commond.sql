SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `commonds`;

CREATE TABLE `commonds` (
   `id` int(11) auto_increment not null comment '评论编号',
   `a_id` int(11) not null comment '评论文章id',
   `u_id` int(11) not null comment '评论人id',
   `c_content` char(255) not null comment '评论主体',
   `c_time` Datetime not null comment '评论时间',
   PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

COMMIT;

SET FOREIGN_KEY_CHECKS = 1;

