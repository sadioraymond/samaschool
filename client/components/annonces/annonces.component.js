'use strict';
const angular = require('angular');

export class annoncesComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('samaschoolApp.annonces', [])
  .component('annonces', {
    template: require('./annonces.html'),
    bindings: { message: '<' },
    controller: annoncesComponent
  })
  .name;
