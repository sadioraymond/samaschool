'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './register.routes';

export class RegisterComponent {
  jsFonctions;
  /*@ngInject*/
  constructor(jsFonctions) {
    this.message = 'Hello';
    this.jsFonctions = jsFonctions;
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

RegisterComponent.$inject = ["jsFonctions"];
export default angular.module('samaschoolApp.register', [uiRouter])
  .config(routes)
  .component('register', {
    template: require('./register.html'),
    controller: RegisterComponent,
    controllerAs: 'registerCtrl'
  })
  .name;
