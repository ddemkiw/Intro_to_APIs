var express = require('express');
var app = express();
var server = require('http').createServer(app);
var GitHubApi = require("github");
var http = require('http');
var https = require('https');
var gitInfo = require('./src/gitInfo.js')
var username = "ddemkiw";

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


// app.get('/', function(request, response){
//   response.render(obj)
// });

app.get('/users/ddemkiw', function(request,response) {
  response.json({"id": gitInfo.ddemkiw.id, 
                 "login": gitInfo.ddemkiw.login, 
                 "public_repos": gitInfo.ddemkiw.public_repos, 
                 "location": gitInfo.ddemkiw.location});
});


var options = {
    host: 'api.github.com',
    path: '/users/' + username,
    method: 'GET',
    headers: {'user-agent': 'node.js'}
};


// https.get(options, function(res) {
//   var str = ""
//   console.log("Got response: " + res.statusCode);
      
//   res.on('data', function (chunk) {
//       str += chunk;
//       console.log(str);
//   });

//   res.on('error', function(e) {
//     console.log("Got error: " + e.message);
//   });

//   res.on('end', function(e){
//     JSON.parse(str)
//   });

// });

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;