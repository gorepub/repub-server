const mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/repubdb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
