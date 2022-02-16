const { Router } = require('express');
const router = Router();
const addContact = require('../controllers/addContact');
const deleteContact = require('../controllers/deleteContact');
const getContacts = require('../controllers/getContacts');

router.get('/contacts', getContacts);
router.post('/contact', addContact);
router.delete('/delete/:id', deleteContact);

module.exports = router;