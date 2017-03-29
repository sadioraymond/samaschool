'use strict';
const angular = require('angular');

/*@ngInject*/
export function suiviCoursProviderService($http, $q) {
	
 this.getCoursByUser = function(user) {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/suivi_courss/user/' + user, {
            cache: true
        }).then(function(list) {
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;

        return liste;

    }

}

export default angular.module('samaschoolApp.suivi_coursProvider', [])
  .service('suiviCoursProvider', suiviCoursProviderService)
  .name;
