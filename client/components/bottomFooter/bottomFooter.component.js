'use strict';
const angular = require('angular');

export class bottomFooterComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('samaschoolApp.bottomFooter', [])
  .component('bottomFooter', {
    template: require('./bottomFooter.html'),
    bindings: { message: '<' },
    controller: bottomFooterComponent
  })
  .name;
