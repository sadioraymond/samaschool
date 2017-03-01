'use strict';
const angular = require('angular');

/*@ngInject*/
export function detailClasseProviderService($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getClasseByEtablissement = function(school) {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/detail_classes/etabl/' + school, {
            cache: true
        }).then(function(list) {
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;

        return liste;

    }
}

export default angular.module('samaschoolApp.detail_classeProvider', [])
    .service('detailClasseProvider', detailClasseProviderService)
    .name;