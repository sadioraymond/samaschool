'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './preview.routes';

export class PreviewComponent {
  jsFonctions;
  coursProvider;
  /*@ngInject*/
  constructor(jsFonctions, coursProvider) {
    this.message = 'Hello';
    this.jsFonctions = jsFonctions;
    this.coursProvider = coursProvider;
    this.createdcourse = {};
  }
  $onInit() { 
    angular.element(document)
      .ready(() => {
        setTimeout(() => {
          this.jsFonctions.pluginScript();
          this.jsFonctions.otherScript();
        }, 0);
      });
    this.createdcourse = this.coursProvider.createdCourse;
    console.info(this.createdcourse)
    console.info(this.createdcourse.objChap)
  }
}

PreviewComponent.$inject = ["jsFonctions", "coursProvider"];
export default angular.module('samaschoolApp.preview', [uiRouter])
  .config(routes)
  .component('preview', {
    template: require('./preview.html'),
    controller: PreviewComponent,
    controllerAs: 'previewCtrl'
  })
  .name;
