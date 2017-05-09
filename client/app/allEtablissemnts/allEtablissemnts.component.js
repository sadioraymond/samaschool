'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './allEtablissemnts.routes';

export class AllEtablissemntsComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('samaschoolApp.allEtablissemnts', [uiRouter])
  .config(routes)
  .component('allEtablissemnts', {
    template: require('./allEtablissemnts.html'),
    controller: AllEtablissemntsComponent,
    controllerAs: 'allEtablissemntsCtrl'
  })
  .name;
