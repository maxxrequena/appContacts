// const express = require('express');
// const router = express.Router();
// const fs = require('fs');
// const uuidv4 = require('uuid/v4');

// const json_contacts = fs.readFileSync('src/books.json', 'utf-8');
// let contacts = JSON.parse(json_contacts);

// router.get('/', (req, res) => {
//   res.render('index', { contacts });
// });

// router.get('/new-entry', (req, res) => {
//   res.render('new-entry');
// });

// router.post('/newcontact', (req, res) => {

//   const { name, lastname, email, country, comments } = req.body;

//   if (!name || !lastname || !email || !country) {
//     res.status(400).send("Entries must have");
//     return;
//   }

//   var newContact = {
//     id: uuidv4(),
//     name,
//     lastname,
//     email,
//     country,
//     comments 
//   };

//   // add a new book to the array
//   contacts.push(newBook);

//   // saving the array in a file
//   const json_contacts = JSON.stringify(books);
//   fs.writeFileSync('src/contacts.json', json_contacts, 'utf-8');

//   res.redirect('/');
// });

// router.get('/delete/:id', (req, res) => {
//   contacts = contacts.filter(contacts => contacts.id != req.params.id);

  
//   const json_contacts = JSON.stringify(contacts);
//   fs.writeFileSync('src/books.json', json_contacts, 'utf-8');

//   res.redirect('/')
// });

// module.exports = router;