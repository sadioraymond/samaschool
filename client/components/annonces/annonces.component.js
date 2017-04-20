'use strict';
const angular = require('angular');

export class annoncesComponent {
  /*@ngInject*/
  constructor($stateParams,annonceProvider) {
    this.$stateParams = $stateParams;
    this.annonceProvider = annonceProvider;
  }

  $onInit(){
    //récupération des annonces par rapoort à létablissemnent en cours
    this.annonceProvider.getAnnonceByEtab(this.$stateParams.id).then(annonces => {
      this.LesAnnoncesParEtab = annonces;
      console.log('Les annonces =>', annonces);
    });
  }
}
annoncesComponent.$inject = [ "$stateParams","annonceProvider"];
export default angular.module('samaschoolApp.annonces', [])
  .component('annonces', {
    template: require('./annonces.html'),
    bindings: { message: '<' },
    controller: annoncesComponent,
    controllerAs: 'vm'
  })
  .name;
