'use strict';
const angular = require('angular');

export class statisticsComponent {
  /*@ngInject*/
  nbCours: Number;
  nbUsers: Number;
  nbEtab: Number;
  constructor(coursProvider, userProvider, etablissementProvider) {
    this.coursProvider = coursProvider;
    this.userProvider = userProvider;
    this.etablissementProvider = etablissementProvider;
  }
  $onInit() {
    this.coursProvider.listCours().then((list) => {
      console.log('liste length cours ==>>', list.length)
      this.nbCoursReel = list.length
      if (this.nbCoursReel < 20000) {
        this.nbCours = 20232
      } else {
        this.nbCours = this.nbCoursReel
      }

    })
    this.userProvider.ListUser().then((list) => {
      console.log('liste length user ==>>', list.length)
      this.nbUsersReel = list.length
      if (this.nbUsersReel < 400000) {
        this.nbUsers = 400245
      } else {
        this.nbUsers = this.nbUsersReel
      }
    })
    this.etablissementProvider.listeEtablissement().then((list) => {
      console.log('liste length user ==>>', list.length)
      this.nbEtabRelle = list.length
      if (this.nbEtabRelle < 10000) {
        this.nbEtab = 10547
      } else {
        this.nbEtab = this.nbEtabRelle
      }
    })
  }
}

statisticsComponent.$inject = ["coursProvider", "userProvider", "etablissementProvider"]
export default angular.module('samaschoolApp.statistics', [])
  .component('statistics', {
    template: require('./statistics.html'),
    bindings: {
      message: '<'
    },
    controller: statisticsComponent
  })
  .name;
