'use strict';
const angular = require('angular');

export class etablissementsComponent {
  /*@ngInject*/
  LesEtablissements: Array;
  constructor(etablissementProvider, jsFonctions) {
    this.etablissementProvider = etablissementProvider;
    this.jsFonctions = jsFonctions;
  }
  $onInit() {
    angular.element(document)
      .ready(() => {
        setTimeout(() => {
          // this.jsFonctions.pluginScript();
          // this.jsFonctions.otherScript();
        }, 500);
      });
    this.etablissementProvider.listeEtablissement().then(list => {
      this.LesEtablissements = list;
      console.log('les LesEtablissements =>>', this.LesEtablissements);
    });
  }
}

etablissementsComponent.$inject = ["etablissementProvider", "jsFonctions"];
export default angular.module('samaschoolApp.etablissements', [])
  .component('etablissements', {
    template: require('./etablissements.html'),
    bindings: {
      message: '<'
    },
    controller: etablissementsComponent,
    controllerAs: 'vm'
  })
  .name;
