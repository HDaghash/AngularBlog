// =====================================
// configure app routes         ========
// =====================================

var routes = function(app,mysql,connection,passport,LocalStrategy,bcrypt) {

app.get('/', function(req, res) {
  res.sendfile('public/views/index.html');  // load the index file
});


app.get('/api/posts', function(req, res) {
  connection.query('SELECT * FROM posts order by postId desc;', function(err,rows){
    if (err) throw err;
    res.send(rows);
  });
});

app.get('/api/posts/:id', function(req, res) {
  connection.query('SELECT * FROM posts where postId = ' + req.params.id  , function(err,rows){
    if (err) throw err;
    console.log(rows.length)
        res.send(rows);
  });
});

app.post('/addpost',auth, function(req, res) {
  console.log(req.body);
  connection.query('INSERT INTO posts SET  ?',req.body, function(err){
    if (err) throw err;
    console.log(req.body);
    res.send("");
  });
});



// passport
// process the login form
  app.post('/login',passport.authenticate('local-login'),function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
     res.send("1");
  });

  // =====================================
 // LOGOUT ==============================
 // =====================================
 app.get('/logout', function(req, res) {
   console.log('logout done !!')
   req.logout();
   res.redirect('/');
 });


// route to test if the user is logged in or not
app.get('/loggedin', function(req, res) {
  res.send(req.isAuthenticated() ? req.user : '0');
 });

 // =========================================================================
   // passport session setup ==================================================
   // =========================================================================
   // required for persistent login sessions
   // passport needs ability to serialize and unserialize users out of session

   // used to serialize the user for the session
   passport.serializeUser(function(user, done) {
       done(null, user.id);
   });

   // used to deserialize the user
   passport.deserializeUser(function(id, done) {
       connection.query("SELECT * FROM users WHERE id = ? ",[id], function(err, rows){
           done(err, rows[0]);
       });
   });


   // =========================================================================
   // LOCAL LOGIN =============================================================
   // =========================================================================
   // we are using named strategies since we have one for login and one for signup
   // by default, if there was no name, it would just be called 'local'

   passport.use(
       'local-login',
       new LocalStrategy({
           // by default, local strategy uses username and password, we will override with email
           usernameField : 'username',
           passwordField : 'password',
           passReqToCallback : true // allows us to pass back the entire request to the callback
       },
       function(req, username, password, done) { // callback with email and password from our form
         console.log('searching for user with user name : ' + username);
           connection.query("SELECT * FROM users WHERE username = ?",[username], function(err, rows){
               if (err)
                   return done(err);
               if (!rows.length) {
                   return done(null, false, console.log( 'No user found withe user name : ' + username)); // req.flash is the way to set flashdata using connect-flash
               }

                // if the user is found but the password is wrong
              if (password != rows[0].password)
                  return done(null, false, console.log(password + ' != ' + rows[0].password)); // create the loginMessage and save it to session as flashdata

               // all is well, return successful user
               console.log(password + ' = ' + rows[0].password)
               return done(null, rows[0]);
           });
       })
   );

}
module.exports = routes;

// Define a middleware function to be used for every secured routes
var auth = function(req, res, next){
   if (!req.isAuthenticated())
    res.send(401);
     else next();
   };
