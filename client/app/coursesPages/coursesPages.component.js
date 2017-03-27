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

  //Les variables gloabales
  tousLesCours;
  lesCategories;

  constructor(jsFonctions, coursProvider, categorieProvider) {
    this.jsFonctions = jsFonctions;
    this.coursProvider = coursProvider;
    this.categorieProvider = categorieProvider;

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
      this.coursProvider.listCours().then(list =>{
      this.tousLesCours = list;
      console.log('tous les cours',list);
    })

// Avoir toutes les categories au chargement de la page
    this.categorieProvider.listCategorie().then(list => {
      this.lesCategories = list;
      console.log('toutes les categories',list);
    })
      
  }

 

}




CoursesPagesComponent.$inject = ["jsFonctions", "coursProvider","categorieProvider"];

export default angular.module('samaschoolApp.coursesPages', [uiRouter])
  .config(routes)
  .component('coursesPages', {
    template: require('./coursesPages.html'),
    controller: CoursesPagesComponent,
    controllerAs: 'vm'
  })
  .name;
