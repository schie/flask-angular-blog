/**
 * Created by dustinschie on 10/8/15.
 */

Blog.factory('Session', function(Restangular){
    var Session;
    Session = {
        create: function(data, byPassErrorInterceptor){
            return Restangular
                .one('sessions')
                .withHttpConfig({byPassErrorInterceptor: byPassErrorInterceptor})
                .customPOST(data);
        }
    };

    return Session;
});