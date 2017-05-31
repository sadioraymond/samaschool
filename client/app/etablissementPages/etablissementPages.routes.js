'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('etablissement', {
      url: '/etablissement/:id/:idFiliere/:idClasse',
      template: '<etablissement-pages></etablissement-pages>',
      onEnter: function () {
        $('html, body').animate({
          scrollTop: 90
        }, 1200);
      }
    });
}
