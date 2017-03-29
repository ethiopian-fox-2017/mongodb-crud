const express = require('express');
const router = express.Router()
const bookController = require('../controllers/book');

router.get('/', bookController.findAll)
router.post('/', bookController.insertOne)


module.exports = router