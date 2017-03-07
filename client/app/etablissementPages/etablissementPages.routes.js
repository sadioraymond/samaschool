'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('etablissementPages', {
      url: '/etablissementPages',
      template: '<etablissement-pages></etablissement-pages>'
    });
}
