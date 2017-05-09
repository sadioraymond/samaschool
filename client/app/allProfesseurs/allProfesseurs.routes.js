'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('allProfesseurs', {
      url: '/all/professeurs',
      template: '<all-professeurs></all-professeurs>'
    });
}
