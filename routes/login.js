var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/login', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    console.log(username);
    if(username == 'admin' && password == 'admin'){
        res.send({status:200, url:"/"});
    } else {
        res.send({status:500});
    }
});

module.exports = router;