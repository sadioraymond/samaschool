'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('courseSinglePage', {
      url: '/courseSinglePage',
      template: '<course-single-page></course-single-page>'
    });
}
