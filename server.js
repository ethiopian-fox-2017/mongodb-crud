var express = require('express');
var server = express();
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./routes/index');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:false}));

server.use('/',index);

server.listen(3000);