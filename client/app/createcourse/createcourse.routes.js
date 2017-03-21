'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('createcourse', {
      url: '/createcourse',
      template: '<createcourse></createcourse>'
    });
}
