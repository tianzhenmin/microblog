SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` char(20) NOT NULL DEFAULT '' COMMENT '用户名',
  `icon` char(50) DEFAULT 'male.png' COMMENT '头像',
  `password` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

BEGIN;
INSERT INTO `users`(username,password) VALUES ('王磊', 123456), ('罗景', 123456), ('李柯诺', 123456), ('汪亚玲', 123456), ('张智', 123456);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
