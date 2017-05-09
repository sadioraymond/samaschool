'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './search.routes';

export class SearchComponent {
  /*@ngInject*/
// les variables
lesEtab;
lesCours;
lesUsers
  constructor(jsFonctions, $stateParams, $state,etablissementProvider,coursProvider,userProvider) {
    this.jsFonctions = jsFonctions;
    this.$stateParams = $stateParams;
    this.$state = $state;
    this.etablissementProvider = etablissementProvider;
    this.coursProvider = coursProvider;
    this.userProvider = userProvider;
  }
  $onInit() {
    angular.element(document)
      .ready(() => {
        setTimeout(() => {
          this.jsFonctions.pluginScript();
          this.jsFonctions.otherScript();
        }, 0);
      });
      if(this.$stateParams.search.length < 4){
        this.$state.go('main')
        return
      }
// recherche dans les etablissements
this.etablissementProvider.getEtabByNom(this.$stateParams.search).then(etab => {
  this.lesEtab = etab;
  console.log("les etab", etab);
})
// recherche dans les cours
this.coursProvider.getCoursByTitreOrDesc(this.$stateParams.search).then(cours => {
  this.lesCours = cours;
  console.log("les cours", cours);
})
// recherche dans les users
this.userProvider.getUserByNameOrUsername(this.$stateParams.search).then(users => {
  this.lesUsers = users;
  console.log("les users", users);
})
      
  }
}

SearchComponent.$inject = ["jsFonctions", "$stateParams", "$state","etablissementProvider","coursProvider","userProvider"]
export default angular.module('samaschoolApp.search', [uiRouter])
  .config(routes)
  .component('search', {
    template: require('./search.html'),
    controller: SearchComponent,
    controllerAs: 'searchCtrl'
  })
  .name;
