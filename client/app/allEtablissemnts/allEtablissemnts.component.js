'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './allEtablissemnts.routes';

export class AllEtablissemntsComponent {
  /*@ngInject*/
  constructor(jsFonctions, etablissementProvider) {
    this.jsFonctions = jsFonctions
    this.etablissementProvider = etablissementProvider
  }
  $onInit() {
    angular.element(document)
      .ready(() => {
        setTimeout(() => {
          this.jsFonctions.pluginScript();
          this.jsFonctions.otherScript();
        }, 0);
      });
    this.etablissementProvider.listeEtablissement().then(list => {
      this.LesEtablissements = list;
      console.log('les etablissements', list);
    })
  }
}

AllEtablissemntsComponent.$inject = ["jsFonctions", "etablissementProvider"]
export default angular.module('samaschoolApp.allEtablissemnts', [uiRouter])
  .config(routes)
  .component('allEtablissemnts', {
    template: require('./allEtablissemnts.html'),
    controller: AllEtablissemntsComponent,
    controllerAs: 'vm'
  })
  .name;
