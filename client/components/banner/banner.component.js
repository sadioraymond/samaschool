'use strict';
const angular = require('angular');

export class bannerComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('samaschoolApp.banner', [])
  .component('banner', {
    template: require('./banner.html'),
    bindings: { message: '<' },
    controller: bannerComponent
  })
  .name;
