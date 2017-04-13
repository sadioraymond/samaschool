'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('profil', {
      url: '/profil/:username',
      template: '<profil></profil>'
    });
}
