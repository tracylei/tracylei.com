var personalSite = angular.module('personalSite',[
  'templates',
  'ngRoute'
]);

personalSite.config(function($routeProvider){
    $routeProvider
      .when('/',{
        templateUrl: "index.html",
        controller: "MainCtrl"
      });
});


personalSite.controller("MainCtrl", function($scope){
  $scope.message = "message";
});