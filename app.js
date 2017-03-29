const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express()

const books = require('./routes/book')

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));


app.use('/api/books', books)

app.listen(3000, function () {
  console.log('app listening on port 3000!');
});

module.exports = app
