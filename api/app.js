const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

// const connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'me',
//     password : 'secret',
//     database : 'userdb'
// });
console.log("port", process.env.PORT)

   
connection.connect(error => {
    if(error) throw error;
    console.log("Database server connected");
});

app.listen(PORT, () => console.log(`Server Running Port ${PORT}`))
