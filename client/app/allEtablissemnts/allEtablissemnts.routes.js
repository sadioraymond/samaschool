'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('allEtablissemnts', {
      url: '/all/etablissements',
      template: '<all-etablissemnts></all-etablissemnts>'
    });
}
