var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var fs = require('fs');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('routes',__dirname + '/routes/');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());
app.use(session({ secret: 'zhenmin', cookie: { maxAge: 60000*30 },saveUninitialized:true,resave:true}));

var index = require('./routes/index');
var users = require('./routes/users');
var home = require('./routes/home');
var login = require('./routes/login');
var personal = require('./routes/personal');


app.all("*",function(req,res,next){
    res.locals.user=req.session.user;
    console.log(res.locals.user);
    next();
})

// var routes=app.get("routes");
// fs.readdirSync(routes).forEach(function(fileName) {
//     var filePath = routes + fileName;
//     var rname=fileName.substr(0,fileName.lastIndexOf("."));
//     if(!fs.lstatSync(filePath).isDirectory()) {
//         if(rname==="index"){
//             app.use("/",require(filePath));
//         }else{
//             app.use("/"+rname,require(filePath));
//         }
//     }
// });


app.use('/', index);
app.use('/users', users);
app.get('/personal', personal)
app.post('/getPost', index);
app.post('/right', index);
app.post('/deleteOwnArticle', index);
app.get('/home', home);
app.get('/ajax', home);
app.get('/add', home);
app.get('/del/:id', home);
app.get('/toUpdate/:id', home);
app.get('/logout', login);
app.post('/add', home);
app.post('/update', home);
app.post('/login', login);
app.post('/regist', login);
app.post('/upInfo', personal);
app.post('/upIcon', personal);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
