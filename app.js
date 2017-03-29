const express = require('express');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const books = require('./routes/books');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', index);
app.use('/books', books);

app.listen('3000')