'use strict';
const angular = require('angular');

export class recentCoursComponent {
  /*@ngInject*/

  // variables globales
  lesCoursParEtab = [];
  constructor($stateParams, etablissementProvider, coursProvider) {
    this.$stateParams = $stateParams;
    this.etablissementProvider = etablissementProvider;
    this.coursProvider = coursProvider;
  }

  $onInit() {

    // recupération des cours par établissement
    this.etablissementProvider.getProfInEtablissement(this.$stateParams.id).then(profs => {
      profs.map(prof => {
        this.coursProvider.getCoursByProfAndSchool(prof[0].user._id, this.$stateParams.id).then(list => {
          list.map(x => {
            this.lesCoursParEtab.push(x.cours);
          })
        })

      })
      console.log('les coursssssssssss', this.lesCoursParEtab);

    });

  }

}

recentCoursComponent.$inject = ["$stateParams", "etablissementProvider", "coursProvider"];
export default angular.module('samaschoolApp.recentCours', [])
  .component('recentCours', {
    template: require('./recentCours.html'),
    bindings: {
      message: '<'
    },
    controller: recentCoursComponent,
    controllerAs: 'vm'
  })
  .name;
