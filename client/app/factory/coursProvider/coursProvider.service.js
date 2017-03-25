'use strict';
const angular = require('angular');

/*@ngInject*/
export function coursProviderService($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.listeCouu = null;
    this.createdCourse = {};
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
    this.ajoutCours = function(titre, description, date, sous_cat, user, status, nbheures, images) {
        var deferred = $q.defer();
        $http.post('/api/courss', {
            titre: titre,
            description: description,
            date_creation: date,
            sous_categorie: sous_cat,
            user: user,
            status: status,
            nbheures: nbheures,
            images: images
        }).then(function() {
            console.log("Bakhna");
        });
    }

    this.ajoutCours2 = function(titre, description, date, sous_cat, user, nbheures, tab, taille, act) {
        var deferred = $q.defer();
        $http.post('/api/courss', {
            titre: titre,
            description: description,
            date_creation: date,
            sous_categorie: sous_cat,
            user: user,
            nbheures: nbheures,
            actif: act
        }).then(function(data) {
            console.log("Cours bi Bakhna");
            for (let i = 0; i < taille; i++) {
                $http.post('/api/chapitres', {
                    libelle: tab[`${i}`].titre,
                    objectif: tab[`${i}`].objectif,
                    cours: data.data._id
                }).then(function(datas) {
                    console.log("Chapitre yi Bakhnagnou");
                    $http.post('/api/fichiers', {
                        cours: datas.data._id,
                        link: tab[`${i}`].lienVideo,
                        contenu: tab[`${i}`].contenu
                    }).then(function() {
                        console.log("Fichiers yi Bakhnagnou");
                    });
                });
            }
        });
    }

}

export default angular.module('samaschoolApp.coursProvider', [])
    .service('coursProvider', coursProviderService)
    .name;