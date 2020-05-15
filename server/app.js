const express = require('express');
const app = express();
const port = 1234;
const path = require('path');
const { getAll } = require('../database/index.js');
const cors = require('cors');

app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors())

//returns all data from database.
app.get('/items', (req, res) => {
  getAll((data) => {
    res.send(data);
  })
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));