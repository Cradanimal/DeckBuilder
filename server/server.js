var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var cardRouter = require('./config/routes.js');

var app = express();

mongoose.connect('mongodb://localhost/deckBuilder');

require("./config/middleware.js")(app, express);
app.use('/api', cardRouter);
app.get('/*', function(req, res) {
  res.sendFile(path.resolve("./client/index.html"));
});




app.listen(8080, function(){
  console.log("DeckBuilder listening on 8080");
});