var express = require('express');
var app = express();
var server = require('http').createServer(app);
var https = require('https');
var gitInfo = require('./public/javascript/gitInfo.js')

app.set('view engine', 'ejs');
app.use('/stylesheets', express.static(__dirname + '/public/stylesheets'));
app.use('/javascript', express.static(__dirname + '/public/javascript'));


app.get('/', function(request, response){
  response.header('Access-Control-Allow-Origin','*');
  response.render('index');
});

app.get('/test/ddemkiw', function(request,response) {
  response.header('Access-Control-Allow-Origin','*');
  response.json({"id": gitInfo.ddemkiw.id, 
                 "login": gitInfo.ddemkiw.login, 
                 "public_repos": gitInfo.ddemkiw.public_repos, 
                 "location": gitInfo.ddemkiw.location});
});


app.get('/users/:username', function(request, response) {

  var username = request.params.username;

  var options = {
    host: 'api.github.com',
    path: '/users/' + username,
    headers: {'User-Agent': 'derpkiw'},
    method:'GET'
  };

  callback = function(res) {

    var str = '';

    res.on('data', function(chunk) {
      str += chunk;
    });

    res.on('error', function(e) {
      console.log('Got error: ' + e);
    });

    res.on('end', function() {
      response.json(JSON.parse(str));
    });
  };

  https.request(options, callback).end();

});


server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;