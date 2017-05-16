'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('allEtablissements', {
      url: '/all/etablissements',
      template: '<all-etablissemnts></all-etablissemnts>',
      onEnter: function () {
        $('html, body').animate({
          scrollTop: 500
        }, 2000);
      }
    });
}
