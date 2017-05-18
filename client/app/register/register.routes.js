'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('register', {
      url: '/register/etablissement',
      template: '<register></register>',
      onEnter: function () {
        $('html, body').animate({
          scrollTop: 500
        }, 2000);
      }
    });
}
