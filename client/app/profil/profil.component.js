'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './profil.routes';

export class ProfilComponent {
  // les services à injecter
  jsFonctions;
  sousCategorieProvider;
  categorieProvider;
  etablissementProvider;
  
  // Les variables
  listCat;
  selectedCount = 0;
  stateProgress = 0;
   listSousCat;
  LIs = [];
  obj = {};
  elementCard = [];
  listChap = [];
  objetCours = {};
  listSouscatBycat;
  titreChap = [];
  objChap = [];
  getCurrentUser: Function;
  LesEtabIncrit;

//les booleen pour cacher ou montrer des div
   profil = true;
  contact = true;
  etablissement = false;
  course = false;
  createCourse = false;
  createCourseLink = false;
  firstPart = true;
  secondPart = false;
  thirdPart = false;
  fourthPart = false;

  /*@ngInject*/
  constructor(jsFonctions, categorieProvider, souscategorieProvider, Auth, etablissementProvider) {
    this.message = 'Hello';
    this.jsFonctions = jsFonctions;
    this.sousCategorieProvider = souscategorieProvider;
    this.categorieProvider = categorieProvider;
    this.getCurrentUser = Auth.getCurrentUserSync;
    this.etablissementProvider = etablissementProvider;

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
        }, 0);
      });

// Liste des categorie au hargement de la page
    this.categorieProvider.listCategorie().then(list => {
      this.listCat = list;
      if (this.listCat.length == 0) {
        console.log('Liste Vide');
      } else {
        console.log('Les Categories', this.listCat);
        
      }
    });

// Liste des sous catégories au chargement de la page
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

//Liste des Etablissements où le User est inscrit au chargement de la page
   setTimeout(() => {
       
    this.etablissementProvider.getEtabByUser(this.getCurrentUser()._id).then(list => {
      this.LesEtabIncrit = list;
      console.log('les etablissements', list);
    })
     }, 1000);
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
  sCatClick(e) {
    // listClass = e.target.className;
    // console.log(e.target.className)
    // if (listClass.includes('withcircle')) {
    //   $(`#${e.target.getAttribute('id')}`).removeClass('withcircle');
    //   this.selectedCount = this.selectedCount + 1;
    // } else {
    //   $(`#${e.target.getAttribute('id')}`).addClass('withcircle');
    //   this.selectedCount = this.selectedCount - 1;
    // }
    // console.log(this.selectedCount)
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

ProfilComponent.$inject = ["jsFonctions", "categorieProvider", "souscategorieProvider", "Auth","etablissementProvider"];
export default angular.module('samaschoolApp.profil', [uiRouter])
  .config(routes)
  .component('profil', {
    template: require('./profil.html'),
    controller: ProfilComponent,
    controllerAs: 'profilCtrl'
  })
  .name;
