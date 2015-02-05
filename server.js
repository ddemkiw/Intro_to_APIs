var express = require('express');
var app = express();
var server = require('http').createServer(app);
var GitHubApi = require("github");
var http = require('http');
var https = require('https');


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));




// var options = {
//   hostname: 'https://api.github.com',
//   path: '/users/ddemkiw',
// };

// var req = http.request(options, function(res) {
//   res.setEncoding('utf8');
//   res.on('data', function (chunk) {
//     console.log('BODY: ' + chunk);
//   });
// });

// req.on('error', function(e) {
//   console.log('problem with request: ' + e.message);
// });

// req.end();

var username = "ddemkiw"

var options = {
    host: 'api.github.com',
    path: '/users/' + username + '/repos',
    method: 'GET',
    headers: {'user-agent': 'node.js'}
};


https.get(options, function(res) {
  console.log("Got response: " + res.statusCode);
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});




server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;