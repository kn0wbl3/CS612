const express = require('express');
const app = express();
var fs = require("fs");

// Constants
const PORT = 80;

// App index

app.get('/index.html', function (req, res) {
  res.sendFile(__dirname + "/" + "index.html");
});

app.get('/fullUsers.html', function (req, res) {
  res.sendFile(__dirname + "/" + "fullUsers.html");
});

app.get('/specificUser.html', function (req, res) {
  res.sendFile(__dirname + "/" + "specificUser.html");
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);

