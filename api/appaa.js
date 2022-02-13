const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();

require('dotenv').config();

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("welcome to jamaica")
} )

const connection = mysql.createConnection({
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

app.listen(PORT, () => console.log(`Server Running Port ${PORT}`))
