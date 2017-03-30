var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
 
// Connection URL 
var url = 'mongodb://localhost:27017/test';
// Use connect method to connect to the Server 
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
 	
 	insertDocumentsBook(db, function() {
    db.close();
  });

});

var insertDocumentsBook = function(db, callback) {
  // Get the documents collection 
  var collects = db.collection('books');
  // Insert some documents 
  collects.insertMany([
    {
     "isbn" : "978-1-60309-057-5",
		 "title" : "Dragon Puncher",
		 "author" : "James Kochalka",
		 "category" : "All Ages",
		 "stock" : "3"
		}, 
    {
     "isbn" : "978-1-891830-77-8",
		 "title" : "Every Girl is The End of The World for Me",
		 "author" : "Jaffrey Brown",
		 "category" : "Mature (16+)",
		 "stock" : "5"
		}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(2, result.result.n);
    assert.equal(2, result.ops.length);
    console.log("Inserted 2 books into the document collection");
    callback(result);
  });
}