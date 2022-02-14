const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors')
const PORT = process.env.PORT || 3001;
const app = express();
//const routers = require('./routes/index')
const { Router } = require('express')
const router = Router();

require('dotenv').config();

app.use(cors({ origin: "*", credentials: true,}));
app.use(bodyParser.json());
app.use("/", router)

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


const addContact =  async(req, res, next) => {
    
    let { name } = req.body;
    name = name.toString();
    connection.query("INSERT INTO contacts (name, lastname, email, country, comments)" + 
    " VALUE ("+name+")" ,
      {
        name        
      }
    , (err, result) => {
      console.log(err);
    });
  
}
router.post('/', addContact);

app.listen(PORT, () => console.log(`Server Running Port ${PORT}`))

