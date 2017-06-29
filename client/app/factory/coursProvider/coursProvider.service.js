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
    this.scategorie = null;
    this.reload = false;
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

        }, function(error) {
            liste = error.data;
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


    this.getSuividuCours = function(cours) {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/courss/suiviparcours/' + cours, {
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

    //fonction d'ajout du cours
    this.ajoutCours = function(objetCours, images) {
        var deferred = $q.defer();
        var contenu;
        var lienVideo;
        var chap = 0;
        //verifier si le cours a un contenu direct c'est à dire cours sans chapitre
        if (objetCours.contenuCours) {
            contenu = objetCours.contenuCours
            lienVideo = objetCours.lienVideo;
        }
        //verifier si le cours a des chapitres
        if (objetCours.nbChap) {
            chap = objetCours.nbChap;
        }
        //ajout du cours
        $http.post('/api/courss', {
            titre: objetCours.titre,
            description: objetCours.description,
            date_creation: objetCours.date,
            sous_categorie: objetCours.sous_cat,
            user: objetCours.user,
            nbheures: objetCours.nbheures,
            images: images,
            actif: objetCours.act,
            link: lienVideo,
            contenu: contenu
        }).then(function(data) {
            console.log("Bakhna");
            if (chap > 0) {
                //ajout des chapitres
                for (let i = 0; i < chap; i++) {
                    $http.post('/api/chapitres', {
                        libelle: objetCours.objChap[`${i}`].titre,
                        objectif: objetCours.objChap[`${i}`].objectif,
                        cours: data.data._id,
                        link: objetCours.objChap[`${i}`].lienVideo,
                        contenu: objetCours.objChap[`${i}`].contenu,
                        numchap: objetCours.objChap[`${i}`].numChap
                    }).then(function(datas) {
                        console.log("Chapitre yi Bakhnagnou");
                    });
                }
            }
            //ajout des suivi cours classes
            for (let j = 0; j < objetCours.lesClasses.length; j++) {
                $http.post('/api/suivi_cours_classes', {
                    publication: data.data._id,
                    classe: objetCours.lesClasses[j],
                    date: objetCours.date
                }).then(function(da) {
                    console.log("Suivi yi Bakhnagnou");
                });
            }


        });
    }
    this.ajoutChapitre = function(id, tab, taille) {
        var deferred = $q.defer();
        console.log("Cours bi Bakhna");
        for (let i = 0; i < taille; i++) {
            $http.post('/api/chapitres', {
                libelle: tab[`${i}`].titre,
                objectif: tab[`${i}`].objectif,
                cours: id,
                link: tab[`${i}`].lienVideo,
                contenu: tab[`${i}`].contenu
            }).then(function(datas) {
                console.log("Chapitre yi Bakhnagnou");
            });
        }
    }
    this.objetCours = {};
    this.params;
    this.modifierCours = function(id, titre, description, date, sous_cat, nbheures, act, images) {
        var deferred = $q.defer();
        $http.put('/api/courss/' + id, {
            titre: titre,
            description: description,
            date_creation: date,
            sous_categorie: sous_cat,
            nbheures: nbheures,
            images: images,
            actif: act,
            /*link: lienVideo,
            contenu: contenu*/
        }).then(function() {
            console.log("Modifié bi Bakhna");
        });
    }
    this.modifierCou = function(id, titre, description, date, sous_cat, nbheures, act, images, lienVideo, contenu) {
        var deferred = $q.defer();
        $http.put('/api/courss/' + id, {
            titre: titre,
            description: description,
            date_creation: date,
            sous_categorie: sous_cat,
            nbheures: nbheures,
            images: images,
            actif: act,
            link: lienVideo,
            contenu: contenu
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
                objectif: tab[`${i}`].objectif,
                link: tab[`${i}`].lienVideo,
                contenu: tab[`${i}`].contenu
            }).then(function() {
                console.log("Modifié bi Bakhna");
            });
        }
    }
    this.deleteFichier = function(images) {
        var deferred = $q.defer();
        console.log('image bi', images)
        $http.get('/deletepicture/' + images, {}).then(function() {
            console.log("Image bi dégne na");
        });
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
    this.getCoursByProfAndSchool = function(prof, school) {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/courss/coursprof/' + prof + '/' + school, {
            cache: true
        }).then(function(list) {
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;

        return liste;
    }
    this.getCoursByEtablissement = function(etablissement) {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/courss/school/' + etablissement, {
            cache: true
        }).then(function(list) {
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;

        return liste;

    }
    this.getCoursByTitreOrDesc = function(rech) {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/courss/search/' + rech, {
            cache: true
        }).then(function(list) {
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;

        return liste;

    }
    this.getCoursByCategorie=function(categorie){
         var deferred = $q.defer();
        var liste = [];
        $http.get('/api/courss/categorie/' + categorie, {
            cache: true
        }).then(function(list) {
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;

        return liste;
    }
}

export default angular.module('samaschoolApp.coursProvider', ['angular-loading-bar'])
    .service('coursProvider', coursProviderService)
    .name;