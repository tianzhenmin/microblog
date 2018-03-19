var express = require('express');
var router = express.Router();
var mysql = express.Router('mysql');
var db = require('./db.js');
var session = require('express-session');
var redisStore = require('connect-redis')(session);
var cookieParser = require('cookie-parser');
var app = require('../app');

router.use(session({secret: 'keyboard cat', store: new redisStore()}));
router.use(cookieParser());

/* GET home page. */
router.post('/login', function(req, res, next) {
    var username = req.body.username.trim();
    var password = req.body.password.trim();
    db.query(`select * from users where username="${username}" and password="${password}"`, function(err, rows){
        if(err) {
            res.end('登陆出错');
        } else{
            if(rows.length>0){
                res.send({status: 200, url: '/home'});
                req.session.user = username;
                res.locals.name = 'sss';
                console.log(req.session);
                console.log(res.locals);
            } else{
                res.send({status: 500, message: '用户名或密码错误，请重试!'});
            }
        }
    });
});

router.post('/regist', function(req, res, next){
    var username = req.body.username.trim();
    var password = req.body.password.trim();
    if(username === ''){
        res.send({status: 400, message: '请正确输入用户名！'})
    } else{
        db.query(`select * from users where username="${username}"`, function(err, rows){
            if(err){
                throw err;
            } else {
                if(rows.length>0){
                    res.send({status: 500, message: "用户名已存在，请选用其他用户名重新注册!"});
                } else {
                    db.query(`insert into users (username,password) values ("${username}","${password}")`, function(err, rows){
                        if(err){
                            res.end('注册失败')
                        } else {
                            res.send({status: 200});
                        }
                    })
                }
            }
        })
    }
})

module.exports = router;