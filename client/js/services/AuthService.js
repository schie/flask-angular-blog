/**
 * Created by dustinschie on 10/8/15.
 */
Blog.service('AuthService', AuthService = function($q, localStorageService, Session){
    // login function
   this.login = function(credentials){
     var me = this;
       deferred = $q.defer();
       Session
           .create(credentials, true)
           .then(function(user){
               me.setToken(credentials);
               return deferred.resolve(user);
            }, function(response){
               if(response.status == 401){
                   return deferred.reject(false);
               }
               throw new Error('No handler for status code ' + response.status);
           });
       return deferred.promise;
   };

    // logout function
    this.logout = function(){
        localStorageService.clearAll();
    }

    // is authenticated function
    this.isAuthenticated = function(){
        var token = this.getToken();
        if(token){
            return true;
        }
        return false;
    }

    // set token function
    this.setToken = function(credentials){
      localStorageService.set('token', btoa(credentials.email + ':' + credentials.password));
    };

    // get token function
    this.getToken = function(){
        return localStorageService.get('token');
    }

    return this;
});