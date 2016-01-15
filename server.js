/*
file name : server.js
created by : Hasan Daghash
*/

// tools ready to used
var express    = require('express');
var session  = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app        = express();
var port       = process.env.PORT || 8080;
var morgan     = require('morgan'); // loger to know what happened here!!
var mysql      = require('mysql');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash    = require('connect-flash');
var bcrypt = require('bcrypt-nodejs');
// datat base configure

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'blog'
});



app.use(bodyParser.json());
app.use(morgan('dev')); // log every request to the console

// required for passport
app.use(session({
	secret: 'vidyapathaisalwaysrunning',
	resave: true,
	saveUninitialized: true
 } )); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// get the routes file
require('./app/routes.js')(app,mysql,connection,passport,LocalStrategy,bcrypt);

// take a look on my files
app.use(express.static('public'));

// good to go
app.listen(port);
console.log('my Blog available on port :  ' + port);
