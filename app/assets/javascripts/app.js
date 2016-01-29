'use strict';

angular.module('personalSite',[
  'templates',
  'ngRoute'
])

.config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'index.html',
        controller : 'MainCtrl',
      })
      .when('/blog/:postId', {
        templateUrl: 'post.html',
        controller : 'BlogCtrl',
      })
      .when('/projects',{
      	templateUrl: 'projects.html',
      	controller : 'ProjectCtrl',
      })
      .when('/contact', {
      	templateUrl: 'contact.html'
      })
      .otherwise({
        redirectTo: '/'
      });
});
