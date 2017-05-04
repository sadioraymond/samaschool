'use strict';
const angular = require('angular');

export class recentCoursComponent {
  /*@ngInject*/
  //les variables
  lesCours;
  constructor(coursProvider,$stateParams,userProvider,souscategorieProvider) {
    this.coursProvider = coursProvider;
    this.$stateParams = $stateParams;
    this.userProvider = userProvider;
    this.souscategorieProvider = souscategorieProvider;
  }
// Fonction au chargement de la page
  $onInit(){
    
// chargement des cours recent de l'établissement
    this.coursProvider.getCoursByEtablissement(this.$stateParams.id).then(cours => {
      this.lesCours = cours;
      cours.map(cr => {
        // trouver chaque user par son id
        this.userProvider.findById(cr.user).then(us => {
          cr.us = us;
        })
        // trouver chaque sous categorie par son id
        this.souscategorieProvider.getSousCatById(cr.sous_categorie).then(scat => {
          cr.scat = scat;
        })
      })
      console.log("les cours recents", cours);
    })
  }
}

recentCoursComponent.$inject = ["coursProvider","$stateParams","userProvider","souscategorieProvider"];
export default angular.module('samaschoolApp.recentCours', [])
  .component('recentCours', {
    template: require('./recentCours.html'),
    bindings: { message: '<' },
    controller: recentCoursComponent,
    controllerAs: 'vm'
  })
  .name;
