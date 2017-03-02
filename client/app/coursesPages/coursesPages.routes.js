'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('coursesPages', {
      url: '/coursesPages',
      template: '<courses-pages></courses-pages>'
    });
}
