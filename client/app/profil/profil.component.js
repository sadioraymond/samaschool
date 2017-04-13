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
  suiviCoursProvider;

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
  lesCoursSuivis;
  userData;

  /*@ngInject*/
  constructor(jsFonctions, categorieProvider, souscategorieProvider, Auth, etablissementProvider, suiviCoursProvider, coursProvider, userProvider, $stateParams, $state) {
    this.message = 'Hello';
    this.jsFonctions = jsFonctions;
    this.sousCategorieProvider = souscategorieProvider;
    this.categorieProvider = categorieProvider;
    this.getCurrentUser = Auth.getCurrentUserSync;
    this.etablissementProvider = etablissementProvider;
    this.suiviCoursProvider = suiviCoursProvider;
    this.coursProvider = coursProvider;
    this.userProvider = userProvider;
    this.$stateParams = $stateParams;
    this.$state = $state;
    console.log('param ==>>', this.$stateParams)
    this.jsFonctions.pluginScript();
    this.jsFonctions.otherScript();
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

    // donnees du user de la page actuelle
    this.userProvider.findByUsername(this.$stateParams.username).then(list => {
      this.userDatas = list;
      if (this.userDatas.length == 0) {
        console.log('Liste Vide');
        this.$state.go('main');
      } else {
        console.log('La page du user ==>>', this.userDatas);
        this.userData = this.userDatas[0]

      }
    });

    // Liste des categorie au chargement de la page
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

    setTimeout(() => {
      console.log('id ==>>', this.userData._id)
      //Liste des Etablissements où le User est inscrit au chargement de la page
      this.etablissementProvider.getEtabByUser(this.userData._id).then(list => {
        this.LesEtabIncrit = list;
        console.log('les etablissements', list);
      });

      // Liste des cours suivis par le User
      this.suiviCoursProvider.getCoursByUser(this.userData._id).then(list => {
        this.lesCoursSuivis = list;
        console.log('les cours tout court', list);
      });

      // Liste des cours crées par le profil
      this.coursProvider.getCoursByProf(this.userData._id).then(list => {
        this.lesCoursCrees = list;
        console.log('les cours crees', this.lesCoursCrees);
      });
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

ProfilComponent.$inject = ["jsFonctions", "categorieProvider", "souscategorieProvider", "Auth", "etablissementProvider", "suiviCoursProvider", "coursProvider", "userProvider", "$stateParams", "$state"];
export default angular.module('samaschoolApp.profil', [uiRouter])
  .config(routes)
  .component('profil', {
    template: require('./profil.html'),
    controller: ProfilComponent,
    controllerAs: 'profilCtrl'
  })
  .name;
