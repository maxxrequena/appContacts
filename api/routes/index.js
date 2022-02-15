const { Router } = require('express');
const router = Router();
const addContact = require('../controllers/addContact')

router.post('/contact', addContact);

module.exports = router;