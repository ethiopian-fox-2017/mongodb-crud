'use strict';
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/mongodb-crud';

var book={}

book.create = (req,res,next) => {
  MongoClient.connect(url, (err, db) => {
    db.collection('books').insertOne({
      "isbn"     : req.body.isbn,
      "title"    : req.body.title,
      "author"   : req.body.author,
      "category" : req.body.category,
      "stock"    : req.body.stock
    }, (err,result) => {
      res.send(result);
    });
  });
};

book.findAll = (req,res,next) => {
  MongoClient.connect(url, (err, db) => {
    db.collection('books').find().toArray((err,books) => {
      if (err) throw err;
      res.send(books);
    });
  });
}

module.exports = book
