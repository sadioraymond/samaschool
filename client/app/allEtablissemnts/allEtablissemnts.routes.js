'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('allEtablissements', {
      url: '/all/etablissements',
      template: '<all-etablissemnts></all-etablissemnts>'
    });
}
