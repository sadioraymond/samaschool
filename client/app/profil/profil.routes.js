'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('profil', {
      url: '/:username',
      template: '<profil></profil>',
      onEnter: function () {
        $('html, body').animate({
          scrollTop: 50
        }, 1200);
      }
    });
}
