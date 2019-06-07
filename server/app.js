const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const path = require('path');
const db = require('../db/mysqldb');
const PORT = 3003;
const app = express();

app.set('port', 3003);

app.use(parser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

//at this path, load this webpage
app.get('/restaurants/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//at this path, load this webpage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/index.html'));
});

app.get('/api/restaurants/:id/googlereviews', (req, res) => {
  console.log(req.params.id);
  db.get(req.params.id, (err, results) => {
    if (err) {
      console.log('error in server:', err)
      res.sendStatus(501);
    } else {
      res.send(results);
    }
  });
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
