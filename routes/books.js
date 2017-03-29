'use strict'

var express = require('express');
var router = express.Router();
let MongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost/mongodb_crud';
let ObjectId = require('mongodb').ObjectID;

/* GET home page. */
router.get('/', function(req, res, next) {
  MongoClient.connect(url, function(err, db){
    db.collection('books').find().toArray(function(err,books){
      if(err) throw error;
      res.send(books);
    })
  })
});

router.get('/create', function(req, res, next) {
  MongoClient.connect(url, function(err, db){
    db.collection('books').insertOne({
      "isbn" : "978-1-891830-77-8",
      "title" : "Every Girl is the End of the World for Me",
      "author" : "Jeffrey Brown",
      "category" : "Mature (16+)",
      "stock" : 5
    })
    .then((data)=>{
      res.send(data);
    })
    .catch((err)=>{
      res.send(err);
    })
  })
});

module.exports = router;
