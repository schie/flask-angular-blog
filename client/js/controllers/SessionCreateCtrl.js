/**
 * Created by dustinschie on 10/13/15.
 */
Blog.controller('SessionCreateCtrl', function($scope, $location, Session, AuthService){
    $scope.submit = function(isValid, credentials){
        $scope.submitted = true;
        $scope.authenticationForm.$setDirty();

        if(!isValid){
            return;
        }

        AuthService.login(credentials).then(function(){
            $location.path('/posts/create');

        }, function(response){
            $scope.failedLoginAttempt = true;
        });
    };
});