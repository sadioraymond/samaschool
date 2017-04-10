'use strict';
const angular = require('angular');

export class formationsComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('samaschoolApp.formations', [])
  .component('formations', {
    template: require('./formations.html'),
    bindings: { message: '<' },
    controller: formationsComponent
  })
  .name;
