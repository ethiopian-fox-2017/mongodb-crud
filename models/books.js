var MongoClient = require('mongodb').MongoClient

var url = 'mongodb://localhost/library';
MongoClient.connect(url, function(err, db) {
  console.log("Server ruuning.. !");
  db.close()
})
