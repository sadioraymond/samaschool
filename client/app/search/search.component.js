'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './search.routes';

export class SearchComponent {
  /*@ngInject*/
  constructor(jsFonctions, $stateParams, $state) {
    this.jsFonctions = jsFonctions
    this.$stateParams = $stateParams
    this.$state = $state
  }
  $onInit() {
    angular.element(document)
      .ready(() => {
        setTimeout(() => {
          this.jsFonctions.pluginScript();
          this.jsFonctions.otherScript();
        }, 0);
      });
      if(this.$stateParams.search.length < 4){
        this.$state.go('main')
        return
      }
  }
}

SearchComponent.$inject = ["jsFonctions", "$stateParams", "$state"]
export default angular.module('samaschoolApp.search', [uiRouter])
  .config(routes)
  .component('search', {
    template: require('./search.html'),
    controller: SearchComponent,
    controllerAs: 'searchCtrl'
  })
  .name;
