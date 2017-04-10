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
  /*@ngInject*/
  constructor(jsFonctions, coursProvider, $stateParams, souscategorieProvider, chapitreProvider) {
    // setTimeout(() => {
    this.$stateParams = $stateParams;
    console.log('param =>', this.$stateParams)
    // }, 50);
    this.message = 'Hello';
    this.jsFonctions = jsFonctions;
    this.coursProvider = coursProvider;
    this.souscategorieProvider = souscategorieProvider;
    this.chapitreProvider = chapitreProvider;
  }
  $onInit() {
    angular.element(document)
      .ready(() => {
        setTimeout(() => {
          this.jsFonctions.pluginScript();
          this.jsFonctions.otherScript();
        }, 0);
      });
    this.souscategorieProvider.getSousCatById(this.$stateParams.sousDomaine).then(list => {
      this.souscat = list;
      console.log('La Sous Catégorie', this.souscat);
    });
    this.coursProvider.FindById(this.$stateParams.idCours).then(list => {
      this.LeCours = list;
      console.log('objet cours =>>', this.LeCours);
    });
    this.chapitreProvider.getChapitreByCours(this.$stateParams.idCours).then(list => {
      this.LesChapitres = list;
      if (this.LesChapitres.length == 0) {
        console.log('Liste Vide chap', this.LesChapitres);
      } else {
        console.info('les chapitre du cours =>>', this.LesChapitres, 'et nombre ', this.LesChapitres.length);
      }
    });
  }
}

CourseSinglePageComponent.$inject = ["jsFonctions", "coursProvider", "$stateParams", "souscategorieProvider", "chapitreProvider"];
export default angular.module('samaschoolApp.courseSinglePage', [uiRouter])
  .config(routes)
  .component('courseSinglePage', {
    template: require('./courseSinglePage.html'),
    controller: CourseSinglePageComponent,
    controllerAs: 'courseCtrl'
  })
  .name;
