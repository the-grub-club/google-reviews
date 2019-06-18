const {Pool}  = require('pg');

const config = {
  user: 'catherineokane',
  host: 'localhost',
  database: 'google_reviews',
  password: 'catherine',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
};

const pool = new Pool(config);

// the pool with emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
// pool.on('error', (err, client) => {
//   console.error('Unexpected error on idle client', err)
//   process.exit(-1)
// })

//a function that queries the database for reviews of a restaurant given the id
const getRestaurantReviews = (id, callback) => {
  //checkout a client
  pool.connect((err, client, done) => {
    if (err) {
      console.log('Error checking out a client', err);
    }
    client.query(`SELECT * FROM reviews WHERE restaurant_id = $1`, [id], (err, results) => {
      done();
      if (err) {
          callback(err);
      } else {
        callback(null, results.rows);
        //return the client
      }
    })
  })
}

  module.exports.getRestaurantReviews = getRestaurantReviews;