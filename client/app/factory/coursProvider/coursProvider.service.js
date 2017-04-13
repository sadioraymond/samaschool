'use strict';
const angular = require('angular');
/*@ngInject*/
export function coursProviderService($http, $q, cfpLoadingBar) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.listeCouu = null;
    this.createdCourse = {};
    this.show = "";
    this.show = false;
    this.chapitreCoursAModifie = {};
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
        this.show = false;
        $http.get('/api/courss/recents', {
            cache: true
        }).then(function(list) {
            liste = list.data;
            deferred.resolve(liste);

        }).finally(function() {
            cfpLoadingBar.start()
            setTimeout(function() {
                cfpLoadingBar.complete();
                this.show = true;
            }, 3000);
        });
        liste = deferred.promise;
        return liste;

    }

    this.ajoutCours = function(titre, description, date, sous_cat, user, nbheures, act, classes, lienVideo, contenu, images) {
        var deferred = $q.defer();
        $http.post('/api/courss', {
            titre: titre,
            description: description,
            date_creation: date,
            sous_categorie: sous_cat,
            user: user,
            nbheures: nbheures,
            images: images,
            actif: act,
            link: lienVideo,
            contenu: contenu
        }).then(function(data) {
            console.log("Bakhna");
            for (let j = 0; j < classes.length; j++) {
                $http.post('/api/suivi_cours_classes', {
                    publication: data.data._id,
                    classe: classes[j],
                    date: date
                })
            }
        });
    }
    this.ajoutCours2 = function(titre, description, date, sous_cat, user, nbheures, tab, taille, act, classes, images) {
        var deferred = $q.defer();
        $http.post('/api/courss', {
            titre: titre,
            description: description,
            date_creation: date,
            sous_categorie: sous_cat,
            user: user,
            nbheures: nbheures,
            images: images,
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
                        chapitre: datas.data._id,
                        link: tab[`${i}`].lienVideo,
                        contenu: tab[`${i}`].contenu
                    }).then(function() {
                        console.log("Fichiers yi Bakhnagnou");
                    });
                });
            }

            for (let j = 0; j < classes.length; j++) {
                $http.post('/api/suivi_cours_classes', {
                    publication: data.data._id,
                    classe: classes[j],
                    date: date
                })
            }
        });
    }
    this.objetCours = {};
    this.params;
    this.modifierCours = function(id, titre, description, date, sous_cat, user, nbheures, act, images) {
        var deferred = $q.defer();
        $http.put('/api/courss/' + id, {
            titre: titre,
            description: description,
            date_creation: date,
            sous_categorie: sous_cat,
            user: user,
            nbheures: nbheures,
            images: images,
            actif: act,
            /* link: lienVideo,
             contenu: contenu*/
        }).then(function() {
            console.log("Modifié bi Bakhna");
        });
    }
    this.modifierChapitre = function(tab, taille) {
        var deferred = $q.defer();
        console.log('khol', tab);
        console.log('taille bi', taille);
        for (let i = 0; i < taille; i++) {
            $http.put('/api/chapitres/' + tab[`${i}`].id_chap, {
                libelle: tab[`${i}`].titre,
                objectif: tab[`${i}`].objectif
            }).then(function() {
                console.log("Modifié bi Bakhna");
            });
        }
    }

    this.getCoursBySousCat = function(scat) {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/courss/sousCat/' + scat, {
            cache: true
        }).then(function(list) {
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;

        return liste;

    }
     this.deletepicture = function(image) {
          var deferred = $q.defer();
        $http.get('/api/courss/deletepicture/' + image, {
            cache: true
        });
    }
}

export default angular.module('samaschoolApp.coursProvider', ['angular-loading-bar'])
    .service('coursProvider', coursProviderService)
    .name;