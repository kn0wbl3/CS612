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
   fs.readFile( __dirname + "/" + "sleepers.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/specificUser.html', function (req, res) {
  res.sendFile(__dirname + "/" + "specificUser.html");
});

app.get('/userDetails.html/:id', function (req, res) {
	// First read existing users.
	fs.readFile( __dirname + "/" + "sleepers.json", 'utf8', function (err, data) {
       users = JSON.parse( data );
       var user = users["user" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
	});
})

var server = app.listen(PORT, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})

