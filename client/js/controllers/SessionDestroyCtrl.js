/**
 * Created by dustinschie on 10/13/15.
 */
Blog.controller('SessionDestroyCtrl', function($scope, $location, AuthService){
    AuthService.logout();
    $location.path('/');
});