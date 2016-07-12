angular.module('deckBuilder.search', [])
.controller('searchController', function($scope, $http) {
  $scope.data = {};

  $scope.nameSearch = function(name) {
    if (name !== undefined) {
      name = name.split(' ').join('+');
    }
    return $http({
      method: "GET",
      url:'/api/cards/name?name='+name
    })
    .then(function(data){
      data = JSON.parse(data.data);
      $scope.cards = data.cards;
    });
  }
  $scope.colorSearch = function(color) {
    return $http({
      method: "GET",
      url:'/api/cards/color?color='+color
    })
    .then(function(data){
      data = JSON.parse(data.data);
      $scope.cards = data.cards;
    });
  };
  console.log($scope.cards);
});