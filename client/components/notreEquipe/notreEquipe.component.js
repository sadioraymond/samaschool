'use strict';
const angular = require('angular');

export class notreEquipeComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('samaschoolApp.notreEquipe', [])
  .component('notreEquipe', {
    template: require('./notreEquipe.html'),
    bindings: { message: '<' },
    controller: notreEquipeComponent
  })
  .name;
