//  this file just to create admin user
// so you can loggin , signup will be there soon,
// make sure you run create_database.js first and import the attached db into ur workbench

var mysql = require('mysql');
var dbconfig = require('../config/database');

var connection = mysql.createConnection(dbconfig.connection);

connection.query("INSERT INTO `blog`.`users` (`username`, `password`) VALUES ('admin', 'admin');");

console.log('Success: Admin User Created!')

connection.end();
