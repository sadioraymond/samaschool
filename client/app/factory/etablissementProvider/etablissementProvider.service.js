'use strict';
const angular = require('angular');

/*@ngInject*/
export function etablissementProviderService($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.listeEtab = null;
    this.listeEtablissement = function() {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/etablissements', {
            cache: true
        }).then(function(list) {
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;

        return liste;

    }

    this.EtablissementPlussuivi = function() {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/detail_users/suivi', {
            cache: true
        }).then(function(list) {
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;

        return liste;

    }
    this.FindEtabByID = function(id) {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/etablissements/' + id, {
            cache: true
        }).then(function(list) {
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;

        return liste;

    }
    this.ajoutEtablissement = function(libelle, adresse, tel, email) {
        var deferred = $q.defer();
        $http.post('/api/etablissements', {
            libelle: libelle,
            adresse: adresse,
            tel: tel,
            email: email,
        }).then(function() {
            console.log("Bakhna");
        });
    }
    this.getEtabByUser = function(user) {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/etablissements/user/' + user, {
            cache: true
        }).then(function(list) {
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;

        return liste;

    }
    this.getProfInEtablissement = function(school) {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/etablissements/prof/' + school, {
            cache: true
        }).then(function(list) {
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;

        return liste;

    }
}


export default angular.module('samaschoolApp.etablissementProvider', [])
    .service('etablissementProvider', etablissementProviderService)
    .name;