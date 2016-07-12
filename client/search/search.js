angular.module('deckBuilder.search', [])
.controller('searchController', function($scope, $http) {

  $scope.data = {};

  $scope.username = $scope.username || undefined;

  if ($scope.username === undefined) {
    $scope.username = prompt("What name?");
  }

  $scope.page = 0;

  $scope.lastSearch = '';  

  $scope.nameSearch = function(name) {
    if (name !== undefined) {
      name = name.split(' ').join('+');
    }
    return $http({
      method: 'GET',
      url:"https://api.magicthegathering.io/v1/cards?name="+name
    })
    .then(function(data){
      console.log(data);
      $scope.cards = data.data.cards;
      $scope.nameQ = '';
    });
  }
  $scope.colorSearch = function(color) {
    var page = '';
    if ($scope.page !== 0) {
      page = '&page='+$scope.page;
      console.log(page)
    }
    
    $scope.lastSearch = color;
    return $http({
      method: 'GET',
      url:"https://api.magicthegathering.io/v1/cards?set=RAV&color=" + color + page
    })
    .then(function(data){
      $scope.cards = data.data.cards
      $scope.colorQ = '';
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

  $scope.nextPage = function() {
    if ($scope.lastSearch !== '') {
        $scope.page++;
        $scope.colorSearch($scope.lastSearch);
      }
    };

  $scope.prevPage = function() {
    $scope.page--;
  }

});