const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost/book'


var createBook = function(req, res) {
  MongoClient.connect(url, (err, db) => {
    console.log(url);
    db.collection('books').insertOne(req.body, (err, result) => {
        res.send(result)
    })
  })
}

var getAllBook = function(req, res) {
  MongoClient.connect(url, (err, db) => {
    db.collection('books').find().toArray((err, result) => {
      res.send(result)
    })
  })
}


module.exports = {
  createBook, getAllBook
};
