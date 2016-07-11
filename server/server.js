var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/deckBuilder');




app.listen(8080, function(){
  console.log("DeckBuilder listening on 8080");
});