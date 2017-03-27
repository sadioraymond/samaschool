'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './coursesPages.routes';

export class CoursesPagesComponent {
  /*@ngInject*/
  jsFonctions;
  coursProvider;
  tousLesCours;
  constructor(jsFonctions, coursProvider) {
    this.jsFonctions = jsFonctions;
    this.coursProvider = coursProvider;

  }
 

  $onInit() {
    angular.element(document)
      .ready(() => {
        setTimeout(() => {
          this.jsFonctions.pluginScript();
          this.jsFonctions.otherScript();
        }, 0);
      });


      this.coursProvider.listCours().then(list =>{
      this.tousLesCours = list;
      console.log('fiii',list);
    })
     
      
  }

 

}



CoursesPagesComponent.$inject = ["jsFonctions", "coursProvider"];

export default angular.module('samaschoolApp.coursesPages', [uiRouter])
  .config(routes)
  .component('coursesPages', {
    template: require('./coursesPages.html'),
    controller: CoursesPagesComponent,
    controllerAs: 'vm'
  })
  .name;
