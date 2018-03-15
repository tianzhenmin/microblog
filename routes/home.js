var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var url = require('url');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var arr = [];
var db = require('./db.js')

function selectData(){
    db.query('select * from websites', function (err, rows) {
        if (err) {
            arr = [];  // this renders "views/users.html"
        } else {
            arr = rows;
        }
    })
}

//把搜索值输出
router.get('/home', function(req, res, next) {
    selectData();
    res.render('home', { data: arr });
});
router.get('/ajax', function(req, res){
    selectData();
    res.send(arr);
});
router.get('/add', function(req, res, next) {
    res.render('add');
});
router.post('/add', function (req, res) {
    var name = req.body.name;
    var address = req.body.address;
    db.query('INSERT INTO websites (name,address) VALUES ("' + name + '","' + address + '")', function (err, rows) {
        if (err) {
            res.end('新增失败：' + err);
        } else {
            res.redirect('/home');
        }
    })
});
router.get('/del/:id', function (req, res) {
    var id = req.params.id;
    db.query("delete from websites where id=" + id, function (err, rows) {
        if (err) {
            res.end('删除失败：' + err)
        } else {
            res.redirect('/home')
        }
    });
});

router.get('/toUpdate/:id', function (req, res) {
    var id = req.params.id;
    db.query("select * from websites where id=" + id, function (err, rows) {
        if (err) {
            res.end('修改页面跳转失败：' + err);
        } else {
            res.render("update", {datas: rows});       //直接跳转
        }
    });
});
router.post('/update', function (req, res) {
    var id = req.body.id;
    var name = req.body.name;
    var address = req.body.address;
    db.query("update websites set name='" + name + "',address='" + address + "' where id=" + id, function (err, rows) {
        if (err) {
            res.end('修改失败：' + err);
        } else {
            res.redirect('/home');
        }
    });
});
//关闭连接

// router.get('/', function (req, res, next) {
//     db.query('select * from websites', function (err, rows) {
//         if (err) {
//             res.render('/home', {title: 'Express', datas: []});  // this renders "views/users.html"
//         } else {
//             res.render('/home', {title: 'Express', datas: rows});
//         }
//     })
// });

module.exports = router;