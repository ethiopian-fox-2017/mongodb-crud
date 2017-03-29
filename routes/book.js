var express = require('express');
var app = express.Router()
var book = require('../controllers/book')

app.post('/', book.create)
app.get('/', book.findAll)

module.exports = app
