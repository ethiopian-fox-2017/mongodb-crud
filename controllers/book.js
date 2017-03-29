var express = require('express');
var app = express.Router()
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/library';
let methods = {}

methods.create = function (req,res) {
  MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    db.collection('books').insertOne({
      "isbn" : req.body.isbn,
      "title" : req.body.title,
      "author" : req.body.author,
      "catagory" : req.body.catagory,
      "stock" : req.body.stock
    }, function (err, data) {
      db.close()
      res.json(data)
    })
  })
}

methods.findAll = function (req,res) {
  MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    db.collection('books')
    .find()
    .toArray(function (err, doc) {
      if (err) {
        res.json(err)
      }else{
        res.json(doc)
      }
    })
  })
}


module.exports = methods
