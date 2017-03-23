'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './coursesPages.routes';

export class CoursesPagesComponent {
  /*@ngInject*/
  jsFonctions;
  categorieProvider;
  souscategorieProvider;
  constructor(jsFonctions, categorieProvider, souscategorieProvider) {
    this.jsFonctions = jsFonctions;
    this.categorieProvider = categorieProvider;
    this.souscategorieProvider = souscategorieProvider;
    this.message = 'Hello';
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
  getSousCatByCategorie(id) {
    this.souscategorieProvider.getSousCatByCategorie(id).then(list => {
      this.listSouscatBycat = list;
      console.log('Les Sous Catégories de la Categorie', this.listSouscatBycat);
    });
  }

}

CoursesPagesComponent.$inject = ["jsFonctions", "categorieProvider", "souscategorieProvider"];
export default angular.module('samaschoolApp.coursesPages', [uiRouter])
  .config(routes)
  .component('coursesPages', {
    template: require('./coursesPages.html'),
    controller: CoursesPagesComponent,
    controllerAs: 'coursesPagesCtrl'
  })
  .name;
