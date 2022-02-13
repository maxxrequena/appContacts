const { Router } = require('express')
const router = Router();
import { getContacts } from '../controllers/getContacts.js'


router.get('/', getContacts);