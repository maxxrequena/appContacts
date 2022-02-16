const express = require('express');
const cors = require('cors')
const app = express();
const mysql = require('mysql');

const PORT = process.env.PORT || 3001;

require('dotenv').config();

app.use(cors());
app.use(express.json());

const router = require('./routes/index')
app.use("/", router);

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

app.listen(PORT, () => console.log(`Server Running Port ${PORT}`))

module.exports = app;