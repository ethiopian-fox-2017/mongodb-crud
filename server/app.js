var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');



var books = require('./routes/books');

var app = express();


app.use(logger('dev'))
// mongoose.promise = global.promise

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000)

app.use('/api/book', books);

module.exports = app
