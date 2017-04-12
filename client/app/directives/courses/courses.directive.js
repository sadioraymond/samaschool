'use strict';
const angular = require('angular');
export function Controller(coursProvider) {
  // coursProvider.getCoursRecents().then(list => {
  //   this.LesCoursRecent = list;
  //   console.log('LesCoursRecent directive', this.LesCoursRecent);
  // });
  this.tabl = ['title', 'body'];
  this.customer = {
    name: 'Naomi',
    address: '1600 Amphitheatre'
  };
  console.log('okkkokokoko')
}
Controller.$inject = ["coursProvider"];
export default angular.module('samaschoolApp.courses', [])
  .controller('Controller', Controller)
  .directive('courses', function () {
    return {
      template: require('./courses.html'),
      restrict: 'EA',
      scope: {
        list: '=list'
      },
      link: function (scope, element, attrs) {}
    };
  })
  .name;
