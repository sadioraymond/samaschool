'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './courseSinglePage.routes';

export class CourseSinglePageComponent {
  jsFonctions;
  coursProvider;
  /*@ngInject*/
  constructor(jsFonctions, coursProvider) {
    this.message = 'Hello';
    this.jsFonctions = jsFonctions;
    this.coursProvider = coursProvider;
  }
  $onInit() {
    angular.element(document)
      .ready(() => {
        setTimeout(() => {
          this.jsFonctions.pluginScript();
          this.jsFonctions.otherScript();
          console.info(this.coursProvider.createdCourse)
        }, 0);
      });
  }
}

CourseSinglePageComponent.$inject = ["jsFonctions", "coursProvider"];
export default angular.module('samaschoolApp.courseSinglePage', [uiRouter])
  .config(routes)
  .component('courseSinglePage', {
    template: require('./courseSinglePage.html'),
    controller: CourseSinglePageComponent,
    controllerAs: 'courseSinglePageCtrl'
  })
  .name;
