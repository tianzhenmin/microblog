var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: '首页'});
  //console.log(req.session.user);
});

router.get('/personal', function(req, res, next){
    res.render('personal', {title: '个人页面'});
})

module.exports = router;
