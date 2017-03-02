'use strict';
const angular = require('angular');

export class teachersComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('samaschoolApp.teachers', [])
  .component('teachers', {
    template: require('./teachers.html'),
    bindings: { message: '<' },
    controller: teachersComponent
  })
  .name;
