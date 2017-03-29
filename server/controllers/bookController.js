const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/bookMongodb';

let method = {}
// Use connect method to connect to the server
method.create = function (req, res) {
  MongoClient.connect(url, function(err, db) {
    console.log("Connected successfully to server");
      db.collection('books').insertOne( {
        "isbn" : req.body.isbn,
        "title" : req.body.title,
        "author" : req.body.author,
        "category" : req.body.category,
        "stock" : req.body.stock
      }, function (err, data) {
        db.close();
        res.json(data)
      });
  });
}
method.findAll = function(req, res) {
  MongoClient.connect(url, function (err, db ){
    db.collection('books')
    .find()
    .toArray(function (err, data) {
      if(err){
        res.json(err)
      }else{
        res.json(data)
      }
    })
  })
};

module.exports = method
