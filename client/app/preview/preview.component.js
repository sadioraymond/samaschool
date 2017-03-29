'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './preview.routes';

export class PreviewComponent {
  jsFonctions;
  coursProvider;
  noChapitre;
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
    console.info('le cours preview', this.createdcourse)
    console.info(this.createdcourse.nbChap)
    if (this.createdcourse.nbChap === 0) {
      this.noChapitre = true;
    } else {
      this.noChapitre = false;
    }
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
