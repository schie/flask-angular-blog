/**
 * Created by dustinschie on 10/13/15.
 */
Blog.controller('ApplicationCtrl', function($scope, $location, Post, AuthService){
   $scope.$on('$routeChangeStart', function(event, next){
      if(AuthService.isAuthenticated()){
          $scope.isLoggedIn = true;
      } else{
          $scope.isLoggedIn = false;
      }
   });

    $scope.isActive = function(path){
        if ($location.path().substr(0, path.length) !== path) {
            return false;
        } else {
            if (path === "/" && $location.path() === "/") {
                return true;
            } else if (path === "/") {
                return false;
            } else {
                return true;
            }
        }
    };
});