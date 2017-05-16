'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('courseSinglePage', {
      url: '/singleCourse/:sousDomaine/:idCours/:idChap',
      template: '<course-single-page></course-single-page>',
      onEnter: function () {
        $('html, body').animate({
          scrollTop: 500
        }, 2000);
      }
    });
}
