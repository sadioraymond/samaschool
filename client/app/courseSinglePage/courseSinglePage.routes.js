'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('courseSinglePage', {
      url: '/singleCourse/:sousDomaine/:idCours',
      template: '<course-single-page></course-single-page>'
    });
}
