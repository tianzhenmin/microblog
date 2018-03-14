SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `websites`;
CREATE TABLE `websites` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(20) NOT NULL DEFAULT '' COMMENT '站点名称',
  `address` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

BEGIN;
INSERT INTO `websites`(name,address) VALUES ('王磊', '未知'), ('罗景', '未知'), ('李柯诺', '未知'), ('汪亚玲', '未知'), ('张智', '未知'), ('阮富贵', '云南文山' ), ('凯萨尔', '新疆石河子' ), ('武皓尘', '广东珠海' ), ('胡亮', '湖北武穴' ), ('陈超', '贵州' ), ('李佳伟', '湖北荆州' ), ('繆德浩', '陕西' ), ('艾宗兵', '天津' ), ('周凡', '孝感' ), ('伊力哈木', '新疆和田' ), ('佘忠帅', '未知' ), ('刘增智', '沈阳' ), ('赵康康', '仙桃' ), ('罗雄', '武汉黄陂' ), ('李凯', '武汉蔡甸' ), ('叶志威', '武汉洪山' ), ('田东雄', '未知' ), ('张帅', '未知' ), ('朱学仓', '未知' ), ('周驰', '未知' ), ('常远', '未知' ), ('邓高超', '未知' ), ('项振宇', '湖北黄梅' ), ('祁新东', '未知' ), ('余典', '武汉黄陂' ), ('孙博文', '湖北襄阳' ), ('高超龙', '武汉青山' ), ('张文凯', '未知' ), ('陈子超', '湖北云梦' ), ('曹子涵', '未知' ), ('白琳', '未知' ), ('陈梦雨', '未知' ), ('任翰实', '东北' ), ('费梦媛', '未知' ), ('张蓝月', '重庆' ), ('徐思奂', '北京' ), ('张蓓蓓', '湖北襄阳' ), ('赵亚兰', '未知' ), ('张恒', '湖北' ), ('王瑞广', '湖北阴山' ), ('骆京杭', '湖北浠水' ), ('曾德义', '湖北' );
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
