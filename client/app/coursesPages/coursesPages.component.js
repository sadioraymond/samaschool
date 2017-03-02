'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './coursesPages.routes';

export class CoursesPagesComponent {
  /*@ngInject*/
  jsFonctions;
  constructor(jsFonctions) {
    this.jsFonctions = jsFonctions;
    this.message = 'Hello';
  }
  $onInit() {
    // setTimeout(function () {
      angular.element(document)
        .ready(() => {

          this.jsFonctions.pluginScript();
          this.jsFonctions.otherScript();
        });
    // }, 0);
  }
}

CoursesPagesComponent.$inject = ["jsFonctions"];
export default angular.module('samaschoolApp.coursesPages', [uiRouter])
  .config(routes)
  .component('coursesPages', {
    template: require('./coursesPages.html'),
    controller: CoursesPagesComponent,
    controllerAs: 'coursesPagesCtrl'
  })
  .name;
