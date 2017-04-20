'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './etablissementPages.routes';

export class EtablissementPagesComponent {
  /*@ngInject*/
  // variables globales
  Letablissement;
  constructor(jsFonctions, $stateParams, etablissementProvider, ouvreDialogProvider) {
    this.jsFonctions = jsFonctions;
    this.$stateParams = $stateParams;
    console.log('param etablissement =>', this.$stateParams)
    this.etablissementProvider = etablissementProvider;
    this.ouvreDialogProvider = ouvreDialogProvider;
  }
  $onInit() {
    var fichier = document.querySelector('#selectPPEtab');
    fichier.addEventListener('change', (e) => {
      this.ouvreDialogProvider.uploadFile(e, "imgTagEtab");
    });
    angular.element(document)
      .ready(() => {
        setTimeout(() => {
          this.jsFonctions.pluginScript();
          this.jsFonctions.otherScript();
        }, 0);
      });

    // recuperation de l'etablissement en cours
    this.etablissementProvider.FindEtabByID(this.$stateParams.id).then(etablissement => {
      this.Letablissement = etablissement;
      console.log(`l'etablissement =>>`, this.Letablissement);
    });



  }
  showDialog() {
    $('#selectPPEtab').click();
  }
}
EtablissementPagesComponent.$inject = ["jsFonctions", "$stateParams", "etablissementProvider", "ouvreDialogProvider"];
export default angular.module('samaschoolApp.etablissementPages', [uiRouter])
  .config(routes)
  .component('etablissementPages', {
    template: require('./etablissementPages.html'),
    controller: EtablissementPagesComponent,
    controllerAs: 'etabCtrl'
  })
  .name;
