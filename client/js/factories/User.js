/**
 * Created by dustinschie on 10/8/15.
 */
Blog.factor('User', function(Restangular){
    var User;
    User = {
      create: function(user){
       return Restangular
           .one('users')
           .customPOST(user);
      }
    };
    return User;
});