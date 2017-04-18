'use strict';
const angular = require('angular');

export class teachersComponent {
  /*@ngInject*/
// Les services à injecter
profilProvider;
// Les varibles à utiliser
  LesProfsPlusSuivis;
  constructor(profilProvider) {
    this.profilProvider = profilProvider;
  }

  $onInit(){
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
    bindings: { message: '<' },
    controller: teachersComponent,
    controllerAs: 'vm'
  })
  .name;
