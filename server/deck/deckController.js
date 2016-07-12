var Deck = require('./deckModel.js');
var request = require('request');


module.exports = {

  getDeck: function(req, res) {
    console.log(req.query);
    Deck.find({ username : req.query.username.toLowerCase() })
      .then(function(data) {
        res.json(data);
      });
  },

  removeCard: function(req, res) {
    var card = req.body.id;
    // var username = req.body.username.toLowerCase();
    console.log(card);
    Deck.findOne({_id: card}).remove().exec();
    res.sendStatus(201);
  },

  addCard: function(req, res) {
    console.log(req.body);
    Deck.create({
      username: req.body.username.toLowerCase(),
      deckname: req.body.deckname || 'myDeck',
      card: req.body.card
    });
    res.sendStatus(201);
  },

  searchName: function(req, res) {
    var name = req.query.name.split(" ").join("+");
    request("https://api.magicthegathering.io/v1/cards?name=" + name + "&page=", function(err, resp, body) {
      if (err) {
        console.log('request errr');
        res.send(404);
      } else {
        res.json(body);
      }
    });
  },

  searchColor: function(req, res) {
    var color = req.query.color;
    request("https://api.magicthegathering.io/v1/cards?colors=" + color + "&set=ktk", function(err, resp, body) {
      if (err) {
        console.log('request errr');
        res.send(404);
      } else {
        res.json(body);
      }
    });
  },
}