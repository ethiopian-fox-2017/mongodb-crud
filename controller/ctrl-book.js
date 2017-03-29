const connect = require('../helpers/mongodb-helper')

module.exports = {

  insertDoc : (req, res)=> {
    connect.mongoConnect((db)=> {
      db.collection('books').insertOne({
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: req.body.stock
      }, (err, doc)=> {
        if(err) {
          res.send(err)
        } else {
          res.send(doc)
        }
      })
    })
  },

  findDocs : (req, res)=> {
    connect.mongoConnect((db)=> {
      db.collection('books').find({}).toArray((err, docs)=> {
        if(err) {
          res.send(err)
        } else {
          res.send(docs)
        }
      })
    })
  }
}