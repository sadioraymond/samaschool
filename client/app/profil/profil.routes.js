'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('profil', {
      url: '/:username',
      template: '<profil></profil>'
    });
}
