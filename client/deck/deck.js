angular.module('deckBuilder.deck', [])
.controller('deckController', function($scope, $http) {
  $scope.data = {};
  
  $scope.getDeck = function(username) { 
    $scope.data.username = username;
    username = username.split(' ').join('+');

    return $http({
      method: 'GET',
      url: '/api/cards/user?username=' + username
    })
    .then(function(data){
      console.log(data.data);
      // data = data.data;
      $scope.data.cards = data.data
    });
  };

  $scope.removeCard = function(id) {
    var indexForSplice = null;
    $scope.data.cards.forEach(function(card, ind){
      if (card._id === id) {
        indexForSplice = ind;
      }
    });
    $scope.data.cards.splice(indexForSplice, 1);

    console.log($scope.data.cards);
    return $http({
      method: 'POST',
      url: '/api/cards/delete',
      data: {
        id: id,
      }
    });
  };
});