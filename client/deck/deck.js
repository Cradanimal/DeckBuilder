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

  $scope.removeCard = function(card, id) {
    console.log(id)
    return $http({
      method: 'POST',
      url: '/api/cards/delete',
      data: {
        id: id,
      }
    });
  };
});