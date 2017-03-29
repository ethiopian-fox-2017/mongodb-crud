var MongoClient = require('mongodb').MongoClient;

module.exports = {

  create : function(req,res, next){
    MongoClient.connect("mongodb://localhost:27017/Books", (err, db) => {
      if (err)
        console.log(`Error nih`, err)
      else
        console.log(`Database terkoneksi`)


      var collections = db.collection('Book')

      collections.insert(req.body,(err, books) => {
        if (err)
          res.json({success : false, msg : err , data : null})
        else
          res.json({success : true, msg: 'successs bro!', data : books})
      })
      db.close()
    })// this function for create

  },

  show : function(req, res){
    MongoClient.connect("mongodb://localhost:27017/Books", (err, db) => {
      if (err)
        console.log(`Error nih`, err)
      else
        console.log(`Database terkoneksi`)


      var collections = db.collection('Book')

      collections.find().toArray((err, books) => {
        if (err)
          res.json({success : false, msg : err, data : null})
        else
          res.json({success : true, msg : 'success bro!', data : books})
      })

    })// this function for create

  }
}
