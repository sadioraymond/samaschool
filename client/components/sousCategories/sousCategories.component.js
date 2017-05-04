'use strict';
const angular = require('angular');

export class sousCategoriesComponent {
  sousCategorieProvider;
  /*@ngInject*/
  constructor(sousCategorieProvider) {
    this.message = 'World';
    this.sousCategorieProvider = sousCategorieProvider;
  }
  $onInit() {}
}

export default angular.module('samaschoolApp.sousCategories', [])
  .component('sousCategories', {
    template: require('./sousCategories.html'),
    bindings: {
      message: '<'
    },
    controller: sousCategoriesComponent
  })
  .name;
