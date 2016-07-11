var express = require('express');
var router = express.Router();
var deckCtrl = require('../deck/deckController.js');


// DEFINE ALL API REQUEST RESPONSES HERE!!!
router.get('/cards/user', deckCtrl.getDeck);
router.post('/cards/delete', deckCtrl.removeCard);
router.post('/cards/user', deckCtrl.addCard);
router.get('/cards/name', deckCtrl.searchName);
router.get('/cards/color', deckCtrl.searchColor);


module.exports = router;