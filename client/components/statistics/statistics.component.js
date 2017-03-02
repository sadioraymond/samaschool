'use strict';
const angular = require('angular');

export class statisticsComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('samaschoolApp.statistics', [])
  .component('statistics', {
    template: require('./statistics.html'),
    bindings: { message: '<' },
    controller: statisticsComponent
  })
  .name;
