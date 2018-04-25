var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
const multer = require('multer');
var db = require('./db');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve('public/images'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({storage: storage});

var listTip = [];
var selectDate = function () {
    db.query(`select * from article_tips`, function (err, rows) {
        if(err) listTip = [];
        else listTip = rows;
    })
}

var randomString = function(len) {
    len = len || 35;
    var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}

selectDate();
router.get('/addArticle', function(req, res, next){
    res.render('admin/addArticle', {title: '新的文章', listTip: listTip});
})

router.get('/personal', function(req, res, next){
    res.render('admin/admin', {title: '个人页面'});
})

router.get('/articleManage', function(req, res, next){
    if(res.locals.user){
        db.query(`select * from articles where auth = "${res.locals.user.username}"`, function(err, rows){
            if(err) {
                next(err);
            } else {
                console.log(rows[0]);
                res.render('admin/articleManage', {title: '文章管理', artList: rows});
            }
        })
    } else {
        res.render('admin/articleManage', {title: '未登录文章管理'});
    }
})

router.get('/catagoryManage', function(req, res, next){
    res.render('admin/catagoryManage', {title: '标签管理'});
})

router.post('/upInfo', function(req, res, next){
    var title = req.body.title,
        desc = req.body.desc,
        content = req.body.content,
        tip = req.body.tip,
        newTip = req.body.newTip,
        auth = req.body.auth,
        date = req.body.fullDate;
    var trueTip = tip;
    var str = randomString(35);
    console.log(str);
    if(newTip != ''){
        trueTip = newTip;
        db.query(`insert into article_tips (tip,name,icon) values ("${trueTip}","${trueTip}","icon-biaoqian-")`, function(err, rows){
            if(err) next(err);
        })
    }
    db.query(`insert into articles (name,tip,article_desc,content,auth,article_upDate,article_link_str) values ('${title}','${trueTip}','${desc}','${content}','${auth}','${date}','${str}')`, function(err, rows){
        if(err) res.end('fail');
        else res.send({url: '/'});
    })
})

router.post('/upIcon', upload.single('avatar'), function(req, res, next) {
    res.locals.user.icon = path.basename(req.file.path);
    db.query(`update users set icon = "${path.basename(req.file.path)}" where id=${res.locals.user.id}`, function(err, rows){
        if(err) throw(err);
    });
    res.send({
        err: null,
        filePath: path.basename(req.file.path)
    });
});

router.post('/delete', function(req, res, next){
    var id = req.body.id;
    db.query(`delete from articles where id=${id}`, function(err, rows){
        if(err){
            next(err);
        } else {
            res.send({url: '/admin/articleManage'});
        }
    })
})

router.get('/editArticle/:id', function(req, res, next){
    var id = req.params.id;
    db.query("select * from articles where id=" + id, function (err, rows) {
        if (err) {
            res.end('修改页面跳转失败：' + err);
        } else {
            res.render("admin/editArticle", {datas: rows[0], listTip: listTip});       //直接跳转
        }
    });
})

router.post('/updateArticle', function(req, res, next){
    var id = req.body.id,
        title = req.body.title,
        desc = req.body.desc,
        content = req.body.content,
        tip = req.body.tip,
        fullDate = req.body.date;
    db.query(`update articles set name="${title}",tip="${tip}",article_desc="${desc}",content="${content}",article_upDate="${fullDate}" where id=${id}`, function(err, rows){
        if(err){
            next(err);
        } else {
            res.send({url: '/admin/articleManage'});
        }
    })
})

module.exports = router;