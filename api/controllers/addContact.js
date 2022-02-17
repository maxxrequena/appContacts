
module.exports = (req, res) => {
    
  const { name, lastname, email, country, comments } = req.body;
  const sql =`INSERT INTO userdb.contacts 
  (name, lastname, email, country, comments)
  VALUES 
  (?, ?, ?, ?, ?)`;

  if (!name || !lastname || !email || !country) {
    res.status(400).send("Entries parametres");
  }
  
  connection.query(sql, [name, lastname, email, country, comments],(err, result) => {
    console.log(err);
  });
    
  res.send("ok");
}

