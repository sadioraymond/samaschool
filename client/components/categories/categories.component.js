'use strict';
const angular = require('angular');

export class categoriesComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('samaschoolApp.categories', [])
  .component('categories', {
    template: '<h1>Hello {{ $ctrl.message }}</h1>',
    bindings: { message: '<' },
    controller: categoriesComponent
  })
  .name;
