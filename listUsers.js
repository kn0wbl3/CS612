const express = require('express');
const app = express();
var fs = require("fs");

// Constants
const PORT = 80;

app.get('/fullUsers.html', function (req, res) {
	fs.readFile(__dirname + "/" + "sleepers.json", 'utf8', function(err, data){
	  console.log( data );
	  res.end( data );
	});
})

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);