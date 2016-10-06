const { MongoClient } = require('mongodb');
const assert = require('assert');

exports.getDatabase = function() {
  // Local connection URL
  var url = process.env.MONGODB_URI;

  console.log('new promise');
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, (err, db) => {
      console.log('connected promise');
      assert.equal(null, err);
      resolve(db);
    });
  });
}

exports.fixtures = function(db) {
  const fakePeeps = require('./test/fixtures/model-peeps.json');
  const fakeUsers = require('./test/fixtures/model-users.json');
  console.log('fixtures:');
  console.log(fakePeeps);
  console.log(fakeUsers);
}
