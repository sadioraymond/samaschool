'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './profil.routes';

export class ProfilComponent {
    jsFonctions;
    sousCategorieProvider;
    listSousCat;
    categorieProvider;
    listCat;
    profil = true;
    contact = true;
    etablissement = false;
    course = false;
    createCourse = false;
    createCourseLink = false;
    firstPart = true;
    secondPart = false;
    // thirdPart = false;
    selectedCount = 0;
    stateProgress = 0;
    LIs = [];
    elementCard = [];
    objetCours = {};
    listSouscatBycat;
    // $log;
    /*@ngInject*/
    constructor(jsFonctions, categorieProvider, souscategorieProvider) {
        // this.$log = $log;
        this.message = 'Hello';
        this.jsFonctions = jsFonctions;
        this.sousCategorieProvider = souscategorieProvider;
        this.categorieProvider = categorieProvider;

    }
    getSousCatByCategorie(id) {
        this.sousCategorieProvider.getSousCatByCategorie(id).then(list => {
            this.listSouscatBycat = list;
            console.log('Les Sous Catégories de la Categorie', this.listSouscatBycat);
        });
    }
    $onInit() {

        angular.element(document)
            .ready(() => {
                setTimeout(() => {
                    this.jsFonctions.pluginScript();
                    this.jsFonctions.otherScript();
                  // To style only <select>s with the selectpicker class
          $('.selectpicker').selectpicker();
                }, 0);
            });
        this.categorieProvider.listCategorie().then(list => {
            this.listCat = list;
            if (this.listCat.length == 0) {
                console.log('Liste Vide');
            } else {
                console.log('Les Categories', this.listCat);
                for (let i = 0; i < this.listCat.length; i++) {
                    this.getSousCatByCategorie(this.listCat[i]._id);
                }
                // $log.info('les cat ', this.listCat);
            }
        });
        this.sousCategorieProvider.listSousCategorie().then(list => {
            this.listSousCat = list;
            if (this.listSousCat.length == 0) {
                console.log('Liste Vide');
            } else {
                // console.log('Les  cat', this.listSousCat);
                console.info('les Sous catégories ', this.listSousCat);
                // $log.info('les sous cat ', this.listSousCat);
            }
        });
    }
    doActive(e) {
        this.LIs = document.querySelectorAll('#ss_sidebar > li');
        for (var i = 0; i < this.LIs.length; i++) {
            if (this.LIs[i].className == 'active') {
                this.LIs[i].className = '';
            }
        }
        var LI = $("." + e.target.className).parent('li')[0];
        $(LI).addClass('active');
    }
    etablissementClick() {
        this.createCourse = false;
        this.createCourseLink = false;
        this.profil = false;
        this.contact = false;
        this.course = false;
        this.etablissement = true;
        window.scrollTo(0, window.scrollY + 1);

        // console.log(window.scrollY);
    }
    profilClick() {
        this.createCourse = false;
        this.createCourseLink = false;
        this.etablissement = false;
        this.course = false;
        this.profil = true;
        this.contact = true;
    }
    courseClick() {
        this.createCourse = false;
        this.createCourseLink = true;
        this.etablissement = false;
        this.profil = false;
        this.contact = false;
        this.course = true;
    }
    createCourseClick() {
        // this.createCourseLink = false;
        this.etablissement = false;
        this.profil = false;
        this.contact = false;
        this.course = false;
        this.createCourse = true;

    }
    sCatClick() {
        this.elementCard = $(".scat").parent('div')[0].className;
        if (this.elementCard.includes('withcircle')) {
            $("#1").removeClass('withcircle');
            this.selectedCount = this.selectedCount + 1;
        } else {
            $("#1").addClass('withcircle');
            this.selectedCount = this.selectedCount - 1;
        }
        console.log(this.selectedCount)
    }
    nextClick() {
        if (this.titreCours && this.objectifCours && this.titreCours.length >= 3 && this.objectifCours.length >= 5 && this.stateProgress == 50 && this.firstPart != true) {
            console.log('next next');
            this.firstPart = false;
            this.secondPart = false;
            this.thirdPart = true;
            this.stateProgress = 100;
            this.styleProgress = {
                'width': `${this.stateProgress}%`,
                'visibility': 'visible',
                'animation-name': 'slideInLeft'
            }
        }
        if (this.selectedCount === 1) {

            this.firstPart = false;
            this.secondPart = true;
            // this.thirdPart = false;
            this.stateProgress = 50;
            this.styleProgress = {
                'width': `${this.stateProgress}%`,
                'visibility': 'visible',
                'animation-name': 'slideInLeft'
            }
            this.selectedCount = 0;
        } else {
            console.log('next no');
        }

    }
    prevClick() {
        if (this.stateProgress === 50) {
            this.firstPart = true;
            // this.thirdPart = false;
            this.secondPart = false;
            this.stateProgress = 0;
            this.styleProgress = {
                'width': `${this.stateProgress}%`,
                'visibility': 'visible',
                'animation-name': 'slideInLeft'
            }
            this.selectedCount = 1;
            return;
        }
        if (this.stateProgress === 100) {
            this.firstPart = false;
            // this.thirdPart = false;
            this.secondPart = true;
            this.stateProgress = 50;
            this.styleProgress = {
                'width': `${this.stateProgress}%`,
                'visibility': 'visible',
                'animation-name': 'slideInLeft'
            }
            return;
        }

    }
}

ProfilComponent.$inject = ["jsFonctions", "categorieProvider", "souscategorieProvider"];
export default angular.module('samaschoolApp.profil', [uiRouter])
    .config(routes)
    .component('profil', {
        template: require('./profil.html'),
        controller: ProfilComponent,
        controllerAs: 'profilCtrl'
    })
    .name;