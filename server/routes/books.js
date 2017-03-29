const express = require('express');
const router = express.Router();
const book = require('../controllers/bookController');

router.post('/', book.create);
router.get('/', book.findAll);

module.exports = router
