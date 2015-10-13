/**
 * Created by dustinschie on 10/13/15.
 */
Blog.controller('HomeDetailCtrl', function($scope, Post){
   Post.get().then(function(posts){
       $scope.posts = posts;
   });
});