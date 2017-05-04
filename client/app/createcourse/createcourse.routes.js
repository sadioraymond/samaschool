'use strict';

export default function ($stateProvider) {
  'ngInject';
  $stateProvider
    .state('createcourse', {
      url: '/createcourse/:id',
      template: '<createcourse></createcourse>'
    });
}
