'use strict';
const angular = require('angular');

export class etablissementsComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('samaschoolApp.etablissements', [])
  .component('etablissements', {
    template: require('./etablissements.html'),
    bindings: { message: '<' },
    controller: etablissementsComponent
  })
  .name;
