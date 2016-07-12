angular.module('deckBuilder', [
  'deckBuilder.search',
  'deckBuilder.deck',
  'ngRoute'])
  .config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/search', {
      templateUrl: 'search/search.html',
      controller: 'searchController'
    })
    .when('/deck', {
      templateUrl: 'deck/deck.html',
      controller: 'deckController'
    })
    .otherwise('/deck');
 
    $locationProvider.html5Mode(true);
  });