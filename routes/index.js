var express = require('express');
var router = express.Router();
var db = require('./db.js');

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
    db.query(`delete from articles where id=${del_id}`, function(err, rows){
        if(err) next(err);
        else res.send({status: 200});
    })
})

var getCommondsList = function(id){
    db.query(`select u.username,u.icon,c.c_content,c.c_time from users u,articles a,commonds c where c.a_id=a.id and c.u_id=u.id and a.id=${id}`, function (err, rows) {
        console.log(err);
        if(err) {
            next(err);
        } else {
            return rows;
        }
    })
}


router.get('/blog-detail/:id', function(req, res, next){
    var id_str = req.params.id;
    var id = parseInt(id_str.substring(0, id_str.indexOf('_')));
    db.query(`select * from articles where id=${id}`, function(err, rows){
        if(err){
            next(err);
        } else {
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
            if(rows.length == 0){
                res.send({status: 400})
            } else {
                res.send({status: 200, result: rows[0]});
            }
        }
    })
})

router.post('/commond', function(req, res, next){
    var a_id = parseInt(req.body.a_id),
        u_id = parseInt(req.body.u_id),
        content = req.body.content,
        date = req.body.date;
    console.log(a_id, u_id, content, date);
    db.query(`insert into commonds (a_id,u_id,c_content,c_time) values (${a_id},${u_id},"${content}","${date}")`, function(err, rows){
        if(err){
            next(err);
        } else {
            res.send({status: 200});
        }
    })
})

router.post('/getCommonts', function(req, res, nwxt){
    var a_id = parseInt(req.body.a_id);
    db.query(`select u.username,u.icon,c.c_content,c.c_time from users u,articles a,commonds c where c.a_id=a.id and c.u_id=u.id and a.id=${a_id} `, function(err, rows){
        if(err) {
            next(err);
        } else {
            res.send(rows);
        }
    })
})

module.exports = router;