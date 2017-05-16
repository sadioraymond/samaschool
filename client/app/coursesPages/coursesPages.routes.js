'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('coursesPages', {
      url: '/all/coursesPages',
      template: '<courses-pages></courses-pages>',
      onEnter: function () {
        $('html, body').animate({
          scrollTop: 500
        }, 2000);
      }
    });
}
