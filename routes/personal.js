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
selectDate();
router.get('/personal', function(req, res, next){
    res.render('personal', {title: '个人页面', listTip: listTip});
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
    console.log(content);
    if(newTip != ''){
        trueTip = newTip;
        db.query(`insert into article_tips (tip,name,icon) values ("${trueTip}","${trueTip}","icon-biaoqian-")`, function(err, rows){
            if(err) next(err);
        })
    }
    db.query(`insert into articles (name,tip,article_desc,content,auth,article_upDate) values ('${title}','${trueTip}','${desc}','${content}','${auth}','${date}')`, function(err, rows){
        if(err) res.end('fail');
        else res.send({url: '/'});
    })
})

router.post('/upIcon', upload.single('avatar'), function(req, res, next) {
    db.query(`update users set icon = "${path.basename(req.file.path)}" where id=${res.locals.user.id}`, function(err, rows){
        if(err) throw(err);
    });
    res.send({
        err: null,
        filePath: path.basename(req.file.path)
    });
});

module.exports = router;