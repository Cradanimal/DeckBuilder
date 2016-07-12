angular.module('deckBuilder.search', [])
.controller('searchController', function($scope, $http) {
  $scope.data = {};
  $scope.username = $scope.username || undefined;
  if ($scope.username === undefined) {
    $scope.username = prompt("What name?");
  }

  $scope.nameSearch = function(name) {
    if (name !== undefined) {
      name = name.split(' ').join('+');
    }
    return $http({
      method: 'GET',
      url:'/api/cards/name?name='+name
    })
    .then(function(data){
      data = JSON.parse(data.data);
      $scope.cards = data.cards;
    });
  }
  $scope.colorSearch = function(color) {
    console.log(color);
    return $http({
      method: 'GET',
      url:'/api/cards/color?color='+color
    })
    .then(function(data){
      data = JSON.parse(data.data);
      $scope.cards = data.cards;
    });
  };
  $scope.addCard = function(source) {
    return $http({
      method: 'POST',
      url: '/api/cards/user',
      data : {
        username: $scope.username,
        card: source,
      }
    });
  };
});