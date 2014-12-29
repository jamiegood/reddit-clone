
/* Services */
angular.module('flapperNews', ['ui.router'])
.config([
  '$stateProvider', 
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'MainCtrl'
      })
      .state('posts', {
        url: '/posts/{id}',
        templateUrl: '/posts.html',
        controller: 'PostsCtrl'
      });

      $urlRouterProvider.otherwise('home');

  }])
.factory('posts', [function() {
  //service body
  var o = {
    posts: []
  };

  return o;

}])
.controller('MainCtrl', [
'$scope', 'posts',
function($scope, posts){


  $scope.posts = posts.posts;

  $scope.test = 'Hello world!';

   $scope.incrementUpVotes = function(post) {

     post.upvotes += 1;
     
  }


  $scope.addPost = function(){
    if(!$scope.title || $scope.title === '') { return; }
    $scope.posts.push({
      title: $scope.title,
      link: $scope.link,
      upvotes: 0,
      comments: [
        {author: 'Joe', body: 'Cool post!', upvotes: 0},
        {author: 'bob', body: 'Great idea', upvotes: 0}
      ]
    });
    $scope.title = '';
    $scope.link = '';
  };


}])
.controller('PostsCtrl', [
  '$scope',
  '$stateParams',
  'posts', 
  function($scope, $stateParams, posts) {
    console.log('i am in the posts ctrl');

    $scope.post = posts.posts[$stateParams.id];


    $scope.addComment = function() {

      $scope.post.comments.push({
        body: $scope.body, 
        author: 'user',
        upvotes: 0
      })

      $scope.body = '';
      
    }
  }
]);

