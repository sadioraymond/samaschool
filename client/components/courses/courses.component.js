'use strict';
const angular = require('angular');

export class coursesComponent {
    /*@ngInject*/
    coursProvider;
    LesCoursRecent;
    constructor(coursProvider) {
        this.message = 'World';
        this.coursProvider = coursProvider;
    }

     $onInit() {
      this.coursProvider.getCoursRecents().then(list =>{
      this.LesCoursRecent = list;
      console.log('LesCoursRecent',list);
    })
     
      
  }
}
coursesComponent.$inject = [ "coursProvider"];
export default angular.module('samaschoolApp.courses', [])
    .component('courses', {
        // template: '<h1>Hello {{ $ctrl.message }}</h1>',
        template: require('./courses.html'),
        bindings: { message: '<' },
        controller: coursesComponent,
        controllerAs: 'vm'
    })
    .name;