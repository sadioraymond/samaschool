'use strict';
const angular = require('angular');

export class recentPostsComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'World';
  }
}

export default angular.module('samaschoolApp.recentPosts', [])
  .component('recentPosts', {
    template: require('./recentPosts.html'),
    bindings: { message: '<' },
    controller: recentPostsComponent
  })
  .name;
