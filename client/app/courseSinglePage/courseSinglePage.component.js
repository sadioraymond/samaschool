'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './courseSinglePage.routes';

export class CourseSinglePageComponent {
    jsFonctions;
    coursProvider;
    $stateParams;
    souscategorieProvider;
    chapitreProvider;
    userProvider;
    LesChapitres: Array;
    LeCours: Array;
    getCurrentUser: Function;
    isLoggedIn: Function;
    currentdate = new Date();
    etat;

    // pour changer le bouton
    bool;
    /*@ngInject*/
    constructor(jsFonctions, coursProvider, $stateParams, souscategorieProvider, chapitreProvider, userProvider, suiviCoursProvider, Auth, $state) {
        // setTimeout(() => {
        this.$stateParams = $stateParams;
        this.userProvider = userProvider;
        console.log('params =>', this.$stateParams);
        // }, 50);
        this.message = 'Hello';
        this.jsFonctions = jsFonctions;
        this.coursProvider = coursProvider;
        this.souscategorieProvider = souscategorieProvider;
        this.chapitreProvider = chapitreProvider;
        this.bool = false;
        this.suiviCoursProvider = suiviCoursProvider;
        this.getCurrentUser = Auth.getCurrentUserSync;
        this.isLoggedIn = Auth.isLoggedInSync;
    }
    $onInit() {
        angular.element(document)
            .ready(() => {
                setTimeout(() => {
                    this.jsFonctions.pluginScript();
                    this.jsFonctions.otherScript();
                }, 0);
            });
        // vérification si l'utilisateur connecté suit déja le cours

        setTimeout(() => {
            if (this.isLoggedIn()) {
                this.suiviCoursProvider.verifSuivi(this.getCurrentUser()._id, this.$stateParams.idCours).then(list => {
                    this.etat = list;
                    if (this.etat.length != 0) {
                        this.bool = true;
                    }
                    console.log('khollllll', list);
                })
            }
        }, 1000);




        // this.souscategorieProvider.getSousCatById(this.$stateParams.sousDomaine).then(list => {
        //   this.souscat = list;
        //   console.log('La Sous Catégorie', this.souscat);
        // });
        // Recuperation du cours en passant l'url
        this.coursProvider.FindById(this.$stateParams.idCours).then(list => {
            this.LeCours = list;
            console.log('objet cours =>>', this.LeCours);
            // si le cours a des chapitres
            if (!this.LeCours.contenu) {
                // Recuperation des chapitres en passant l'url
                this.chapitreProvider.getChapitreByCours(this.$stateParams.idCours).then(list => {
                    this.LesChapitres = list;
                    console.info('les chapitre du cours =>>', this.LesChapitres, 'et nombre ', this.LesChapitres.length);
                    // si un chapitre est choisi
                    // recherche du chapitre choisi
                    if (this.$stateParams.idChap) {
                        this.LesChapitres.map((chapitre) => {
                            if (chapitre._id == this.$stateParams.idChap) {
                                this.LeChapitre = chapitre;
                                console.log('le chapitre ===>>> ', this.LeChapitre);

                                // recuperation du contenu du chapitre
                                this.chapitreProvider.getFichierByChapitre(chapitre._id).then(list => {
                                    this.LeContenuDuChapitre = list[0];
                                    console.info('le contenu du chapitre du cours =>>', this.LeContenuDuChapitre);
                                    this.LeChapitre.contenuChap = this.LeContenuDuChapitre.contenu;
                                    this.LeChapitre.linkchapitre = this.LeContenuDuChapitre.link;
                                });
                            }
                        });
                    }
                });
            }
            // this.userProvider.findById(this.LeCours.user).then(list => {
            //   this.Leprof = list;
            //   console.log('Le prof qui a cree le cours =>>', this.Leprof);
            // });
        });

        // Recuperation des autres cours de la sous Catégorie
        setTimeout(() => {
            this.coursProvider.getCoursBySousCat(this.LeCours.sous_categorie._id).then(list => {
                this.LesCoursDeLaSousCategorie = list;
                // suppression du cours qui est déja afficher
                this.LesCoursDeLaSousCategorie.map((x, i) => {
                    if (x._id === this.LeCours._id) {
                        console.info('ok 1', i);
                        this.LesCoursDeLaSousCategorie.splice(i, 1);
                    }
                });
                console.log('LesCoursDeLaSousCategorie ==>>', this.LesCoursDeLaSousCategorie);
            });
        }, 50);
    }

    suivreClick() {

        var datetime = this.currentdate.getFullYear() + "-" +
            (this.currentdate.getMonth() + 1) + "-" +
            this.currentdate.getDate();
        this.suiviCoursProvider.addSuivi(this.$stateParams.idCours, this.getCurrentUser()._id, datetime);
        this.bool = true;


    }
    pasSuivreClick() {
        this.bool = false;
        this.suiviCoursProvider.delSuivi(this.etat[0]._id);
    }
    cacher() {
        if (this.bool == false && !this.isLoggedIn()) {
            return true;
        }
        if (this.bool == true) {
            return true;
        }
        // if(this.isLoggedIn){
        // return false;

        // }
        return false;
    }
}

CourseSinglePageComponent.$inject = ["jsFonctions", "coursProvider", "$stateParams", "souscategorieProvider", "chapitreProvider", "userProvider", "suiviCoursProvider", "Auth", "$state"];
export default angular.module('samaschoolApp.courseSinglePage', [uiRouter])
    .config(routes)
    .component('courseSinglePage', {
        template: require('./courseSinglePage.html'),
        controller: CourseSinglePageComponent,
        controllerAs: 'courseCtrl'
    })
    .name;