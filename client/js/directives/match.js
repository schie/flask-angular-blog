/**
 * Created by dustinschie on 10/8/15.
 */
Blog.directive('match', function() {
    return {
        require: 'ngModel',
        restict: 'A',       // restrict to only Attribute names
        scope: {
            match: '='
        },
        link: function(scope, elem, attrs, ctrl){
            scope.$watch(function(){
               return (ctrl.$pristine && angular.isUndefined(ctrl.$modelValue)) || scope.match == ctrl.$modelValue;
            }, function(currentValue){
                ctrl.$setValidity('match', currentValue);
            });
        }
    };
});