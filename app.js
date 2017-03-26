var express = require('express');
var app = express();
var favicon = require('serve-favicon');

app.use(favicon(__dirname + '/favicon.ico'));

app.get('*', function(request, response) {
  response.sendFile(__dirname + request.url);
});

app.listen(80, function() {
  console.log('App Launched');
});
