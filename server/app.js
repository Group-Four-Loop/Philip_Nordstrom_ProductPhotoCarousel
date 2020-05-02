const express = require('express');
const app = express();
const port = 1234;
const path = require('path');
// const staticFile =

app.use(express.static(path.join(__dirname, '../dist')));
// app.use(express.static(__dirname + '/../react-client/dist'));  IGNORE THIS


app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));