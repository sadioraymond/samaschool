'use strict';
const angular = require('angular');

/*@ngInject*/
export function coursProviderService($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.listeCouu = null;
    this.listCours = function() {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/courss', {
            cache: true
        }).then(function(list) {
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;
        return liste;

    }

    this.CoursPlusSuivi = function() {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/courss/cours/suivi', {
            cache: true
        }).then(function(list) {
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;
        return liste;
    }

    this.FindById = function(id) {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/courss/' + id, {
            cache: true
        }).then(function(list) {
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;
        return liste;
    }

    this.getClasseByCours = function(cours) {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/suivi_cours_classes/cours/' + cours, {
            cache: true
        }).then(function(list) {
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;

        return liste;

    }
    this.getCoursByProf = function(prof) {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/courss/prof/' + prof, {
            cache: true
        }).then(function(list) {
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;

        return liste;

    }
    this.GetCoursProfInSchool = function(prof) {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/suivi_cours_classes/school/' + prof, {
            cache: true
        }).then(function(list) {
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;

        return liste;

    }
    this.getCoursRecents = function() {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/courss/recents', {
            cache: true
        }).then(function(list) {
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;
        return liste;

    }
    this.ajoutCours = function(titre, description, date, sous_cat, user, status) {
        var deferred = $q.defer();
        $http.post('/api/courss', {
            titre: titre,
            description: description,
            date_creation: date,
            sous_categorie: sous_cat,
            user: user,
            status: status
        }).then(function() {
            console.log("Bakhna");
        });
    }
}

export default angular.module('samaschoolApp.coursProvider', [])
    .service('coursProvider', coursProviderService)
    .name;