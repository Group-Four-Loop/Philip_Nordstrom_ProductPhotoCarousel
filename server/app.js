const express = require('express');
const app = express();
const port = 1234;
const path = require('path');
// const staticFile =
const { getAll } = require('../database/index.js')

app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.get('/items', (req, res) => {
  getAll((data) => {

    res.send(data);
  })
  // res.send('hello world')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));