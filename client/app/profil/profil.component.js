'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './profil.routes';

export class ProfilComponent {
  jsFonctions;
  profil = true;
  contact = true;
  etablissement = false;
  course = false;
  /*@ngInject*/
  constructor(jsFonctions) {
    this.message = 'Hello';
    this.jsFonctions = jsFonctions;
  }
  $onInit() {
    angular.element(document).ready(() => {

      setTimeout(() => {
        this.jsFonctions.pluginScript();
        this.jsFonctions.otherScript();
      }, 0);
    });
  }
  etablissementClick() {
    this.profil = false;
    this.contact = false;
    this.course = false;
    this.etablissement = true;
    window.scrollTo(0, window.scrollY + 1);
      
    // console.log(window.scrollY);
  }
  profilClick() {
    this.etablissement = false;
    this.course = false;
    this.profil = true;
    this.contact = true;
  }
  courseClick() {
    this.etablissement = false;
    this.profil = false;
    this.contact = false;
    this.course = true;
  }
}

ProfilComponent.$inject = ["jsFonctions"];
export default angular.module('samaschoolApp.profil', [uiRouter])
  .config(routes)
  .component('profil', {
    template: require('./profil.html'),
    controller: ProfilComponent,
    controllerAs: 'profilCtrl'
  })
  .name;
