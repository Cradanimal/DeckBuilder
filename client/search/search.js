angular.module('deckBuilder.search', [])
.controller('searchController', function($scope, $http) {

  $scope.data = {};

  // $scope.username = $scope.username || undefined;

  if (window.username === undefined) {
    window.username = prompt("What your name?");
  }

  $scope.page = 30;

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
      url:"https://api.magicthegathering.io/v1/cards?colors=" + color + page
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
        username: window.username.toLowerCase(),
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
    if ($scope.lastSearch !== '') {
        $scope.page--;
        $scope.colorSearch($scope.lastSearch);
      }
    };

});