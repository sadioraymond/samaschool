'use strict';
const angular = require('angular');

/*@ngInject*/
export function chapitreProviderService($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.getChapitreByCours = function(cours) {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/chapitres/cours/' + cours, {
            cache: true
        }).then(function(list) {
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;
        return liste;

    }
}

export default angular.module('samaschoolApp.chapitreProvider', [])
    .service('chapitreProvider', chapitreProviderService)
    .name;