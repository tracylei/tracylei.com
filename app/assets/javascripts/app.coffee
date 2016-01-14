
personalSite = angular.module('personalSite',[
  'templates',
  'ngRoute',
  'controllers',
])

personalSite.config([ '$routeProvider',
  ($routeProvider)->
    $routeProvider
      .when('/',
        templateUrl: "index.html"
        controller: 'MainCtrl'
      )
])

controllers = angular.module('controllers',[])
controllers.controller("MainCtrl", [ '$scope',
  ($scope)->
])