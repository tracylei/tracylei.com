// angular.module('personalSite'
// 	).factory('postData', ['$http', function($http){
// 	var postData = {
// 		data: {
// 			posts: [
// 			{
// 				title: "First",
// 				contents: "First post"
// 			},
// 			{
// 				title: "Second",
// 				contents: "Second post"
// 			}
// 		]},
// 		isLoaded: false
// 	};

// 	postData.loadPosts = function(){
// 		$http.get('./posts.json').success(function(data){
// 			postData.data.posts = data;
// 			postData.isLoaded = true;
// 			console.log('Successfully loaded posts.');
// 		}).error(function() {
// 			console.error('Failed to load posts.');
// 		});
// 	};

// 	return postData;
// }]);