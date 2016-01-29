'use strict';

angular.module('personalSite')

.controller('ProjectCtrl', function($scope){
	$scope.showModal1 = false;
	$scope.toggleModal1 = function(){
		$scope.showModal1 = !$scope.showModal1;
	};
	$scope.showModal2 = false;
	$scope.toggleModal2 = function(){
		$scope.showModal2 = !$scope.showModal2;
	};
})

.directive('modal', function (){
	return{
		templateUrl: 'descriptions.html',
		restrict: 'E',
		transclude: true,
		replace:true,
		scope:true,
		link: function postLink(scope, element, attrs) {
			scope.title = attrs.title;

			scope.$watch(attrs.visible, function(value){
			  if(value == true)
			    $(element).modal('show');
			  else
			    $(element).modal('hide');
			});

			$(element).on('shown.bs.modal', function(){
			  scope.$apply(function(){
			    scope.$parent[attrs.visible] = true;
			  });
			});

			$(element).on('hidden.bs.modal', function(){
			  scope.$apply(function(){
			    scope.$parent[attrs.visible] = false;
			  });
			});
		}
	};
});