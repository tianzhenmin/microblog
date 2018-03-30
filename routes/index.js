var express = require('express');
var router = express.Router();
var db = require('./db.js');

var listItem = [
    {lan:'java编程', icon:'icon-java', category:'java', articals:['java从入门到放弃', 'java起源', '黑马java', 'java开发宝典']},
    {lan:'C编程', icon:'icon-C', category:'C', articals:['C语言入门', '基于C语言的OpenGL','C语言指针详解', '如果不了解这种用法，你真的学过C语言么']},
    {lan:'js编程', icon:'icon-socialjavascript', category:'js', articals:['JS 前台编程最方便的语言', '有人说js将会引领潮流，带你看看为什么', 'JS从入门到精通']},
    {lan:'C#编程', icon:'icon-chilun', category:'c', articals:['C++++的来源', 'C#全栈开发', 'C#应用大全', 'C#宝典']},
    {lan:'Python编程', icon:'icon-socialpython', category:'python', articals:['python为什么被称为最好的编程语言', '人工智能-Python', 'Python入门需知']},
    {lan:'HTML编程', icon:'icon-html5', category:'html', articals:['html发展史', 'H5与H4的区别与联系', '你真的了解H5？？']},
    {lan:'javaee编程', icon:'icon-java', category:'javaee', articals:['javaee异军突起', 'javaee Web 全站开发', '五分钟读懂javaee']}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      title: '首页',
      listItem: listItem,
      currentCate: 'java'
  });
  //console.log(req.session.user);
});

router.get('/personal', function(req, res, next){
    res.render('personal', {title: '个人页面'});
})

router.post('/getPost', function(req, res, next){
    var category = req.body.category;
    var result = [];
    for(var i = 0, len = listItem.length ; i < len ; i++){
        if(listItem[i].category == category){
            result.push(listItem[i]);
        }
        if(category == 'all'){
            result.push(listItem[i]);
        }
    }
    res.send({result: result});
})

module.exports = router;