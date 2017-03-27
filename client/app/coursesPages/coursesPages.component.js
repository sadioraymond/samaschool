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

  //Les variables gloabales
  tousLesCours;
  lesCategories;
  lesSousCategories;
  // id récupéré à partir du ng-model de la premiere liste déroulante
  selectedId;
  // booleen pour cacher ou montrer la liste des sous categories
  sousCatVisible = false;

  constructor(jsFonctions, coursProvider, categorieProvider, souscategorieProvider) {
    this.jsFonctions = jsFonctions;
    this.coursProvider = coursProvider;
    this.categorieProvider = categorieProvider;
    this.souscategorieProvider = souscategorieProvider;

  }


  $onInit() {
    angular.element(document)
      .ready(() => {
        setTimeout(() => {
          this.jsFonctions.pluginScript();
          this.jsFonctions.otherScript();
        }, 0);
      });


    // Avoir la liste de tous les coursau chargement de la page
    this.coursProvider.listCours().then(list => {
      this.tousLesCours = list;
    })

    // Avoir toutes les categories au chargement de la page
    this.categorieProvider.listCategorie().then(list => {
      this.lesCategories = list;
    })

  }

// peermet d'avoir la liste des sous categories pour une categorie
selectedCategorie(){
  this.souscategorieProvider.getSousCatByCategorie(this.selectedId).then(list => {
      this.lesSousCategories = list;

    })

  
 this.sousCatVisible = true;
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
