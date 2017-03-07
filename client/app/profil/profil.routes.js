'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('profil', {
      url: '/profil',
      template: '<profil></profil>'
    });
}
