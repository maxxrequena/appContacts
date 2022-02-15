const mysql = require('mysql');
require('dotenv').config();

global.connection = mysql.createConnection({
    host     : process.env.MYSQL_HOST,
    user     : process.env.MYSQL_USER,
    password : process.env.MYSQL_PWD,
    database : process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT
});
   
connection.connect(error => {
    if(error) throw error;
    console.log("Database server connected");
});
