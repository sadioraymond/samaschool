'use strict';
const angular = require('angular');

export class teachersComponent {
  /*@ngInject*/
  // Les services à injecter
  profilProvider;
  // Les varibles à utiliser
  LesProfsPlusSuivis;
  constructor(profilProvider, jsFonctions) {
    this.jsFonctions = jsFonctions;
    this.profilProvider = profilProvider;
  }

  $onInit() {
    angular.element(document)
      .ready(() => {
        setTimeout(() => {
          // this.jsFonctions.pluginScript();
          // this.jsFonctions.otherScript();
        }, 500);
      });
    this.profilProvider.ProfesseurPlusSuivi().then(list => {
      this.LesProfsPlusSuivis = list;
      console.log("les profs plus suivis", list);
    })
  }
}

teachersComponent.$inject = ["profilProvider", "jsFonctions"];
export default angular.module('samaschoolApp.teachers', [])
  .component('teachers', {
    template: require('./teachers.html'),
    bindings: {
      message: '<'
    },
    controller: teachersComponent,
    controllerAs: 'vm'
  })
  .name;
