'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './etablissementPages.routes';

export class EtablissementPagesComponent {
  /*@ngInject*/
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
EtablissementPagesComponent.$inject = ["jsFonctions"];
export default angular.module('samaschoolApp.etablissementPages', [uiRouter])
  .config(routes)
  .component('etablissementPages', {
    template: require('./etablissementPages.html'),
    controller: EtablissementPagesComponent,
    controllerAs: 'etablissementPagesCtrl'
  })
  .name;
