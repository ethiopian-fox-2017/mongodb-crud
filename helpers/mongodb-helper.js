const MongoClient = require('mongodb').MongoClient

module.exports = {

  mongoConnect : (cb)=> {
    MongoClient.connect('mongodb://localhost:27017/mongodb-crud', (err, db)=> {
      if (err) {
        console.log(err)
      } else {
        console.log('MONGO DATABASE CONNECTED')
        cb(db)

        db.close()
      }
    })
  }
}

