'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './coursesPages.routes';

export class CoursesPagesComponent {
  /*@ngInject*/

  // Les services à injecter
  jsFonctions;
  coursProvider;
  categorieProvider;
  souscategorieProvider;

  //Les variables globales
  tousLesCours;
  lesCategories;
  lesSousCategories;
  lesCoursBySousCat;
  lesCoursRecents;
  choixList: Array;
  categ = {
    id: 0,
    libelle: 'Domaine'
  };
  scateg = {
    id: 0,
    libelle: 'Sous Domaine'
  };

  // id récupéré à partir du ng-model de la premiere liste déroulante
  selectedId;

  // booleen pour cacher ou montrer la liste des sous categories
  sousCatVisible = false;

  constructor(jsFonctions, coursProvider, categorieProvider, souscategorieProvider) {
    this.jsFonctions = jsFonctions;
    this.coursProvider = coursProvider;
    this.categorieProvider = categorieProvider;
    this.souscategorieProvider = souscategorieProvider;
    this.categ.id = 0;
    this.categ.libelle = "Domaine";
    this.scateg.id = 0;
    this.scateg.libelle = "sous Domaine";

  }


  $onInit() {
    this.categ.id = 0;
    this.categ.libelle = "Domaine";
    angular.element(document)
      .ready(() => {
        setTimeout(() => {
          this.categ.id = 0;
          this.categ.libelle = "Domaine";
          this.jsFonctions.pluginScript();
          this.jsFonctions.otherScript();
        }, 0);
      });


    // Avoir la liste de tous les cour sau chargement de la page
    this.coursProvider.listCours().then(list => {
      this.tousLesCours = list;
      console.log('les cours', list);
      this.choixList = this.tousLesCours;
    })

    // Avoir toutes les categories au chargement de la page
    this.categorieProvider.listCategorie().then(list => {
      this.lesCategories = list;
    })
    // Avoir les cours recents au chargement de la page
    this.coursProvider.getCoursRecents().then(list => {
      this.lesCoursRecents = list;
      console.log('les cours recents', list);
    })

  }

  // permet d'avoir la liste des sous categories pour une categorie
  selectedCategorie() {
    this.souscategorieProvider.getSousCatByCategorie(this.selectedId).then(list => {
      this.lesSousCategories = list;
    })
    this.sousCatVisible = true;
  }

  //permet d'avoir les sous categorie par catégorie
  transfertSousCat(id) {
    this.souscategorieProvider.getSousCatByCategorie(id).then(list => {
      this.lesSousCategories = list;

    })
  }

  // permet d'avoir les cours par sous catégorie
  sousCatClick(scat) {
    this.coursProvider.getCoursBySousCat(scat).then(list => {
      this.lesCoursBySousCat = list;
    })
  }

  // filtre si tous les cours est clickés
  allCourse() {
    this.choixList = this.tousLesCours;
  }

  // filtre si les plus recents est clickés
  recentsCourse() {
    this.choixList = this.lesCoursRecents;
  }

  // permet d'avoir la liste des sous categories pour une categorie
  selectedCateg(categorie) {
    setTimeout(() => {
      this.categ.id = categorie._id;
      this.categ.libelle = categorie.libelle;
      console.log(this.categ)
      this.souscategorieProvider.getSousCatByCategorie(this.categ.id).then(list => {
        this.lesSousCategories = list;
      })
    }, 0);
  }

  // filtre si une sous categorie est clickés
  sousCategCourse(scat) {
    this.coursProvider.getCoursBySousCat(scat._id).then(list => {
      this.lesCoursBySousCat = list;
      this.choixList = this.lesCoursBySousCat;
    })
  }
}




CoursesPagesComponent.$inject = ["jsFonctions", "coursProvider", "categorieProvider", "souscategorieProvider"];

export default angular.module('samaschoolApp.coursesPages', [uiRouter])
  .config(routes)
  .component('coursesPages', {
    template: require('./coursesPages.html'),
    controller: CoursesPagesComponent,
    controllerAs: 'vm'
  })
  .name;
