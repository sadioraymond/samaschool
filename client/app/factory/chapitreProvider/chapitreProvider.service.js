'use strict';
const angular = require('angular');

/*@ngInject*/
export function chapitreProviderService($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.ajoutChapitre = function(libelle, objectif, cours) {
        var deferred = $q.defer();
        $http.post('/api/courss', {
            libelle: libelle,
            objectif: objectif,
            cours: cours
        }).then(function() {
            console.log("Bakhna");
        });
    }
}

export default angular.module('samaschoolApp.chapitreProvider', [])
    .service('chapitreProvider', chapitreProviderService)
    .name;