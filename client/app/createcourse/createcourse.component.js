'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './createcourse.routes';

export class CreatecourseComponent {
  /*@ngInject*/
  jsFonctions;
  souscategorieProvider;
  listSousCat;
  categorieProvider;
  listCat;
  firstPart = true;
  secondPart = false;
  thirdPart = false;
  fourthPart = false;
  selectedCount = 0;
  stateProgress = 0;
  LIs = [];
  obj = {};
  elementCard = [];
  listChap = [];
  objetCours = {};
  listSouscatBycat;
  titreChap = [];
  objChap = [];
  constructor(jsFonctions, categorieProvider, souscategorieProvider) {
    this.jsFonctions = jsFonctions;
    this.categorieProvider = categorieProvider;
    this.souscategorieProvider = souscategorieProvider;
    this.message = 'Hello';
    this.firstPart = true;
  }
  getSousCatByCategorie(id) {
    this.souscategorieProvider.getSousCatByCategorie(id).then(list => {
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
        }, 0);
      });
    this.categorieProvider.listCategorie().then(list => {
      this.listCat = list;
      if (this.listCat.length == 0) {
        console.log('Liste Vide');
      } else {
        console.log('Les Categories', this.listCat);
        // for (let i = 0; i < this.listCat.length; i++) {
        //   this.getSousCatByCategorie(this.listCat[i]._id);
        // }
        // $log.info('les cat ', this.listCat);
      }
    });
    this.souscategorieProvider.listSousCategorie().then(list => {
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
  nextClick() {
    if (this.titreChap && this.objectifChap && !this.numberError && this.stateProgress == 50 && this.firstPart != true && this.secondPart != true && this.nbChap) {
      console.log('next next');
      this.firstPart = false;
      this.secondPart = false;
      this.thirdPart = false;
      this.fourthPart = true;
      this.stateProgress = 75;
      this.styleProgress = {
        'width': `${this.stateProgress}%`,
        'visibility': 'visible',
        'animation-name': 'slideInLeft'
      }
      console.info(this.nbChap);
      this.objetCours.nbChap = this.nbChap;
      for (let c = 0; c < this.nbChap; c++) {
        // var element = array[c];
        console.log('ooooo', this.titreChap[c]);

        this.objChap[c] = [
          this.titreChap[c],
          this.objectifChap[c]
        ];
      }
      this.objetCours.objChap = this.objChap;
      console.log('le cours ', this.objetCours);
    }
    if (this.titreCours && this.objectifCours && !this.numberError && this.titreCours.length >= 3 && this.objectifCours.length >= 5 && this.stateProgress == 25 && this.firstPart != true) {
      console.log('next next');
      this.firstPart = false;
      this.secondPart = false;
      this.thirdPart = true;
      this.fourthPart = false;
      this.stateProgress = 50;
      this.styleProgress = {
        'width': `${this.stateProgress}%`,
        'visibility': 'visible',
        'animation-name': 'slideInLeft'
      }
      this.objetCours.detailscours = {
        'titrecours': this.titreCours,
        'objectifcours': this.objectifCours
      };
      console.log('le cours ', this.objetCours);
    }
    if (this.selectedId && this.selectedIdsCat && this.stateProgress === 0) {
      console.log(this.selectedId)
      this.firstPart = false;
      this.secondPart = true;
      this.thirdPart = false;
      this.fourthPart = false;
      this.stateProgress = 25;
      this.styleProgress = {
        'width': `${this.stateProgress}%`,
        'visibility': 'visible',
        'animation-name': 'slideInLeft'
      }
      this.objetCours.sousCategorie = this.selectedIdsCat;
      console.log(this.objetCours.sousCategorie)
    } else {
      console.log('next no this.selectedCount === 1 && this.stateProgress === 0 ');
    }

  }
  prevClick() {
    if (this.stateProgress === 25) {
      this.firstPart = true;
      this.thirdPart = false;
      this.secondPart = false;
      this.fourthPart = false;
      this.stateProgress = 0;
      this.styleProgress = {
        'width': `${this.stateProgress}%`,
        'visibility': 'visible',
        'animation-name': 'slideInLeft'
      }
      this.selectedCount = 1;
      return;
    }
    if (this.stateProgress === 50) {
      this.firstPart = false;
      this.thirdPart = false;
      this.secondPart = true;
      this.fourthPart = false;
      this.stateProgress = 25;
      this.styleProgress = {
        'width': `${this.stateProgress}%`,
        'visibility': 'visible',
        'animation-name': 'slideInLeft'
      }
      return;
    }
    if (this.stateProgress === 75) {
      this.firstPart = false;
      this.thirdPart = true;
      this.secondPart = false;
      this.fourthPart = false;
      this.stateProgress = 50;
      this.styleProgress = {
        'width': `${this.stateProgress}%`,
        'visibility': 'visible',
        'animation-name': 'slideInLeft'
      }
      return;
    }

  }
  selectedVal() {
    this.getSousCatByCategorie(this.selectedId);
    // this.showSCat = true;
  }
  verifyNumber() {
    if (this.nbh) {
      if (this.nbh < 1 || this.nbh > 99) {
        this.numberError = true;
      } else {
        this.numberError = false;
      }
    }
  }
  verifyNumberChap() {
    if (this.nbChap) {
      if (this.nbChap < 1 || this.nbChap > 20) {
        this.numberChapError = true;
      } else {
        this.numberChapError = false;
      }
    }
  }
  GenerateFields() {
    if (this.nbChap) {
      if (this.nbChap < 1 || this.nbChap > 20) {
        this.numberChapError = true;
      } else {
        this.numberChapError = false;
        this.listChap = [];
        for (let i = 0; i < this.nbChap; i++) {
          this.listChap.push(i);
          console.log(this.listChap)
        }
      }
    }
  }
  delChap(indexTab) {
    this.listChap.splice(indexTab, 1);
    console.log(this.listChap)
  }
}

CreatecourseComponent.$inject = ["jsFonctions", "categorieProvider", "souscategorieProvider"];

export default angular.module('samaschoolApp.createcourse', [uiRouter])
  .config(routes)
  .component('createcourse', {
    template: require('./createcourse.html'),
    controller: CreatecourseComponent,
    controllerAs: 'createcourseCtrl'
  })
  .name;
