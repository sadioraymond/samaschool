'use strict';
const angular = require('angular');

export class completerStructureEtablissementComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('samaschoolApp.completerStructureEtablissement', [])
  .component('completerStructureEtablissement', {
    template: require('./structure.html'),
    bindings: { message: '<' },
    controller: completerStructureEtablissementComponent
  })
  .name;
