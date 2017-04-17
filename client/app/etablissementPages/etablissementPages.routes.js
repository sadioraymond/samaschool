'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('etablissement', {
      url: '/etablissement/:id',
      template: '<etablissement-pages></etablissement-pages>'
    });
}
