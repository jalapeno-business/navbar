const MongoClient = require('mongodb').MongoClient;

const mlab = 'mongodb://zagat:zagatnavbar1!@ds149742.mlab.com:49742/fec-zagat-reviews';

const connection = MongoClient.connect(
  mlab,
  { useNewUrlParser: true },
  (error, db) => {
    if (error) {
      console.log('Error connecting to the DB', error);
    } else {
      console.log('Connected successfully to mlab');
      return db.db('fec-zagat-reviews');
    }
  },
);

module.exports = {
  db: connection,
};
