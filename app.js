const express = require('express');
const app = express()
const bodyParser = require('body-parser');

const book = require('./routes/book');

app.use(bodyParser.urlencoded({extended: true}))

app.use('/book', book)

app.listen(3000)
