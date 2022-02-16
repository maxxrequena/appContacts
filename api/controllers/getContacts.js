module.exports = (req, res) => {
    
    const sql = 'SELECT * FROM userdb.contacts';

    connection.query(sql, (error, result) => {
        if(error) throw error;
        if(result.length > 0){
            res.json(result);
        } else {
            res.send("Not Result")
        }
    })
}