'use strict';
const angular = require('angular');

/*@ngInject*/
export function niveauProviderService($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.listNiveau = function() {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/niveaus', {
            cache: true
        }).then(function(list) {
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;

        return liste;

    }
}

export default angular.module('samaschoolApp.niveauProvider', [])
    .service('niveauProvider', niveauProviderService)
    .name;