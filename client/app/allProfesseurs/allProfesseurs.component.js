'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './allProfesseurs.routes';

export class AllProfesseursComponent {
  /*@ngInject*/
  /*@ngInject*/
  constructor(jsFonctions, profilProvider) {
    this.jsFonctions = jsFonctions
    this.profilProvider = profilProvider
  }
  $onInit() {
    angular.element(document)
      .ready(() => {
        setTimeout(() => {
          this.jsFonctions.pluginScript();
          this.jsFonctions.otherScript();
        }, 0);
      });
    this.profilProvider.listProfesseur().then(list => {
      this.LesProfs = list;
      console.log('les prof', list);
    })
  }
}

AllProfesseursComponent.$inject = ["jsFonctions", "profilProvider"]

export default angular.module('samaschoolApp.allProfesseurs', [uiRouter])
  .config(routes)
  .component('allProfesseurs', {
    template: require('./allProfesseurs.html'),
    controller: AllProfesseursComponent,
    controllerAs: 'vm'
  })
  .name;
