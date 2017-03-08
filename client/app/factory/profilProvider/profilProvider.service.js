'use strict';
const angular = require('angular');

/*@ngInject*/
export function profilProviderService($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.listProfesseur = function() {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/profils/professeur', {
            cache: true
        }).then(function(list) {
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;

        return liste;

    }

    this.ProfesseurPlusSuivi = function() {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/suivis/plussuivi', {
            cache: true
        }).then(function(list) {
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;

        return liste;

    }

    this.FindProfByID = function(id) {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/users/' + id, {
            cache: true
        }).then(function(list) {
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;

        return liste;

    }
}

export default angular.module('samaschoolApp.profilProvider', [])
    .service('profilProvider', profilProviderService)
    .name;