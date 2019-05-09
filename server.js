var bodyParser = require('body-parser')
const express = require('express');
let app = express();
// let db = require('database/dataIndex.js');
// const mongoose = require('mongoose');

app.use(express.static('public'));
app.use(bodyParser());

var port = 3000;

app.listen(port, function() {
    console.log(`listening on port ${port}`);
  });


