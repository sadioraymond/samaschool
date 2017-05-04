'use strict';
const angular = require('angular');

export class bannerComponent {
  /*@ngInject*/
  constructor($state) {
    this.$state = $state
  }
  doSearch(e) {
    if (this.searchReq && this.searchReq.length > 3) {
      e.preventDefault()
      this.$state.go('search', {
        search: this.searchReq
      })
    } else {
      e.preventDefault()
      console.log('==> requete trop courte <==')
    }
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
