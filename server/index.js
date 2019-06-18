//require('newrelic'); //new relic config
const redis = require('redis');
var client = redis.createClient(); //creates a new client. default host: 127.0.0.1, port: 6739
const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const path = require('path');
const db = require('../db/index.js');
const PORT = 3005;
const app = express();

app.use(parser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

let proxy = require('http-proxy').createProxyServer();

let serverOne = 'http://localhost:3001';

app.all('/api/restaurants/:id/googlereviews', (req,res) => proxy.web(req, res, { target: serverOne }));

// //at this path, load this webpage
// app.get('/restaurants/:id', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });

// //at this path, load this webpage
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '/../public/index.html'));
// });

//GET Request for reviews of a restaurant given the id
app.get('/api/restaurants/:id/googlereviews', (req, res) => {
  const id = req.params.id;
  db.getRestaurantReviews(id, (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200);
      res.send(results);
    }
  });
});

//connect to redis
//on receipt of request, check if key value pair exists in redis
  //if yes return value
  //if not query the database
  //when database returns value for key
  //store the pair in the redis cache
//consider when to delete items from the cache LRU vs LFU

//check if we successfully connected to the redis-server
client.on('connect', () => {
  console.log(`connected to redis`);
});

//check if we failed to connect to the redis-server
client.on('error', err => {
  console.log(`Error: ${err}`);
});
