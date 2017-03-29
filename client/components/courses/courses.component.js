'use strict';
const angular = require('angular');

export class coursesComponent {
  /*@ngInject*/
  jsFonctions;
  coursProvider;
  LesCoursRecent;
  lit = [];
  obj1 = {
    "a": 12,
    'b': 11
  };
  obj2 = {};
  obj3 = {};
  obj4 = {};
  obj5 = {};
  obj6 = {};
  obj7 = {};
  obj8 = {};
  obj9 = {};
  obj10 = {};
  obj11 = {};
  obj12 = {};
  obj13 = {};
  constructor(jsFonctions, coursProvider) {
    this.message = 'World';
    this.jsFonctions = jsFonctions;
    this.coursProvider = coursProvider;
  }

  $onInit() {
    // angular.element(document)
    //   .ready(() => {
    //     setTimeout(() => {
    //       //   this.jsFonctions.pluginScript();
    //       //   this.jsFonctions.otherScript();
    //       //   this.getClasseByUser(this.getcurrentUser()._id);
    //     }, 0);
    //   });
    this.lit = [this.obj1, this.obj2, this.obj3, this.obj4, this.obj5, this.obj6, this.obj7, this.obj8, this.obj9, this.obj10, this.obj11, this.obj12, this.obj13];
 
    this.coursProvider.getCoursRecents().then(list => {
      this.LesCoursRecent = list;
      console.log('LesCoursRecent', this.LesCoursRecent);
    });
  }
}
coursesComponent.$inject = ["jsFonctions", "coursProvider"];
export default angular.module('samaschoolApp.courses', [])
  .component('courses', {
    // template: '<h1>Hello {{ $ctrl.message }}</h1>',
    template: require('./courses.html'),
    bindings: {
      message: '<'
    },
    controller: coursesComponent,
    controllerAs: 'vm'
  })
  .name;
