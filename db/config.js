const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'catherineokane',
  host: 'localhost',
  database: 'google_reviews',
  password: 'catherine',
  port: 3005,
})


module.exports = {
  pool: pool
}