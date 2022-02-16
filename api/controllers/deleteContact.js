module.exports = (req, res) => {
    
    const { id } = req.params;
    const sql = `DELETE FROM userdb.contacts WHERE idcontacts=${id}`;

    connection.query(sql, error => {
        if(error) throw error;
        res.send("Delete Contact ok")
    })
}