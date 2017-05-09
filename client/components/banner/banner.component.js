'use strict';
const angular = require('angular');

export class bannerComponent {
  /*@ngInject*/
  constructor($state) {
    this.$state = $state
  }
  
}

bannerComponent.$inject = ["$state"]
export default angular.module('samaschoolApp.banner', [])
  .component('banner', {
    template: require('./banner.html'),
    bindings: {
      message: '<'
    },
    controller: bannerComponent
  })
  .name;
