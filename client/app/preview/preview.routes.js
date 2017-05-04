'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('preview', {
      url: '/preview',
      template: '<preview></preview>'
    });
}
