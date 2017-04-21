'use strict';
const angular = require('angular');

export class recentCoursComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('samaschoolApp.recentCours', [])
  .component('recentCours', {
    template: require('./recentCours.html'),
    bindings: { message: '<' },
    controller: recentCoursComponent
  })
  .name;
