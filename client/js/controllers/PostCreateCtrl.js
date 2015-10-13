/**
 * Created by dustinschie on 10/13/15.
 */
Blog.controller('PostCreateCtrl', function($scope, $location, Post){
   $scope.submit = function(isValid, post){
       $scope.submitted = true;
       $scope.postCreateForm.$setDirty();

       if(!isValid){
           return;
       }

       Post.create(post).then(function(response){
          $location.path('/');
       });
   };
});