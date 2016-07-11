var mongoose = require('mongoose');
var deckSchema = mongoose.Schema({
  username: String,
  deckname: { type: String, default: "myDeck"},
  card: String
});

var Deck = mongoose.model('Deck', deckSchema);

module.exports = Deck;