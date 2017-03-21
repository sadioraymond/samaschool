'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './createcourse.routes';

export class CreatecourseComponent {
  /*@ngInject*/
  jsFonctions;
  constructor(jsFonctions) {
    this.jsFonctions = jsFonctions;
    this.message = 'Hello';
  }
  $onInit() {
    angular.element(document)
      .ready(() => {
        setTimeout(() => {
          this.jsFonctions.pluginScript();
          this.jsFonctions.otherScript();
        }, 0);
      });
  }
}

CreatecourseComponent.$inject = ["jsFonctions"];

export default angular.module('samaschoolApp.createcourse', [uiRouter])
  .config(routes)
  .component('createcourse', {
    template: require('./createcourse.html'),
    controller: CreatecourseComponent,
    controllerAs: 'createcourseCtrl'
  })
  .name;
