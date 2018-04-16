var express = require('express');
var router = express.Router();
var db = require('./db');

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

module.exports = router;