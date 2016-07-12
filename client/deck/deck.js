angular.module('deckBuilder.deck', [])
.controller('deckController', function($scope, $http) {
  $scope.data = {};
  
  $scope.getDeck = function(username) {
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
});