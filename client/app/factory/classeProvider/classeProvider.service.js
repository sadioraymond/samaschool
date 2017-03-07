'use strict';
const angular = require('angular');

/*@ngInject*/
export function classeProviderService($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.listClasse = function() {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/classes', {
            cache: true
        }).then(function(list) {
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;

        return liste;

    }
    this.getClasseByNiveau = function(niveau) {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/classes/niveau/' + niveau, {
            cache: true
        }).then(function(list) {
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;

        return liste;

    }
}

export default angular.module('samaschoolApp.classeProvider', [])
    .service('classeProvider', classeProviderService)
    .name;