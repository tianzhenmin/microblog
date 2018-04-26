var express = require('express');
var router = express.Router();
var db = require('./db.js');

// var listItem = [
//     {lan:'java编程', icon:'icon-java', category:'java', articals:['java从入门到放弃', 'java起源', '黑马java', 'java开发宝典']},
//     {lan:'C编程', icon:'icon-C', category:'C', articals:['C语言入门', '基于C语言的OpenGL','C语言指针详解', '如果不了解这种用法，你真的学过C语言么']},
//     {lan:'js编程', icon:'icon-socialjavascript', category:'js', articals:['JS 前台编程最方便的语言', '有人说js将会引领潮流，带你看看为什么', 'JS从入门到精通']},
//     {lan:'C#编程', icon:'icon-chilun', category:'c', articals:['C++++的来源', 'C#全栈开发', 'C#应用大全', 'C#宝典']},
//     {lan:'Python编程', icon:'icon-socialpython', category:'python', articals:['python为什么被称为最好的编程语言', '人工智能-Python', 'Python入门需知']},
//     {lan:'HTML编程', icon:'icon-html5', category:'html', articals:['html发展史', 'H5与H4的区别与联系', '你真的了解H5？？']},
//     {lan:'javaee编程', icon:'icon-java', category:'javaee', articals:['javaee异军突起', 'javaee Web 全站开发', '五分钟读懂javaee']}
// ];

var listItem = [];
var listTip = [];

var selectDate = function () {
    db.query(`select * from articles`, function(err, rows){
        if(err) listItem = [];
        else listItem = rows;
    })
    db.query(`select * from article_tips`, function (err, rows) {
        if(err) listTip = [];
        else listTip = rows;
    })
}

selectDate();
/* GET home page. */
router.get('/', function(req, res, next) {
  selectDate();
  res.render('index', {
      title: '首页',
      listTip: listTip
  });
  //console.log(req.session.user);
});

router.get('/funny', function(req, res, next){
    res.render('funny');
})

router.post('/getPost', function(req, res, next){
    var category = req.body.category;
    var result = [];
    for(var i = 0, len = listItem.length ; i < len ; i++){
        if(listItem[i].tip == category){
            result.push(listItem[i]);
        }
        if(category == 'all'){
            result.push(listItem[i]);
        }
    }
    res.send({result: result});
})

router.post('/right', function(req, res, next){
    var id = parseInt(req.body.id);
    db.query(`select * from articles where id=${id}`, function(err, rows){
        if(err) next(err);
        else res.send(rows[0]);
    })
})

router.post('/deleteOwnArticle', function(req, res, next){
    var del_id = parseInt(req.body.del_id);
    console.log(del_id);
    db.query(`delete from articles where id=${del_id}`, function(err, rows){
        if(err) next(err);
        else res.send({status: 200});
    })
})

router.get('/blog-detail/:id', function(req, res, next){
    var id_str = req.params.id;
    var id = parseInt(id_str.substring(0, id_str.indexOf('_')));
    db.query(`select * from articles where id=${id}`, function(err, rows){
        if(err){
            next(err);
        } else {
            console.log(rows[0].content);
            res.render('blog-detail', {title: `blog - ${rows[0].name}`, data:rows[0]})
        }
    })
})

router.post('/showauth', function(req, res, next) {
    var auth = req.body.auth;
    db.query(`select * from users where username="${auth}"`, function(err, rows){
        if(err){
            next(err);
        } else {
            res.send({result: rows[0]});
        }
    })
})

module.exports = router;