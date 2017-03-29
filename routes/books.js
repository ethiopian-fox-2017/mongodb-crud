const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const booksModel = require("../models/books_model")

router.post("/", (req, res) => {
  MongoClient.connect(booksModel, (err, db) => {
    let table = db.collection("books");
    table.insertOne({
      "isbn": req.body.isbn,
      "title": req.body.title,
      "author": req.body.author,
      "category": req.body.category,
      "stock": req.body.stock
    }, (err, dataBook) => {
      res.send(dataBook)
      db.close()
    })
  })
})

router.get("/", (req, res) => {
  MongoClient.connect(booksModel, (err, db) => {
    let table = db.collection("books");
    table.find().toArray((err, result) => {
      res.send(result)
      db.close()
    })
  })
})

module.exports = router
