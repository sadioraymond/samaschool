'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './etablissementPages.routes';

export class EtablissementPagesComponent {
  /*@ngInject*/
  // variables globales
  Letablissement;
  constructor(jsFonctions, $stateParams, etablissementProvider, ouvreDialog) {
    this.jsFonctions = jsFonctions;
    this.$stateParams = $stateParams;
    console.log('param etablissement =>', this.$stateParams)
    this.etablissementProvider = etablissementProvider;
    this.ouvreDialog = ouvreDialog;
  }
  $onInit() {
    // modification de l'image
    var fichier = document.querySelector('#selectPPEtab');
    fichier.addEventListener('change',  (e) => {
      this.ouvreDialog.uploadFile(e, "imgTagEtab");
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
EtablissementPagesComponent.$inject = ["jsFonctions", "$stateParams", "etablissementProvider", "ouvreDialog"];
export default angular.module('samaschoolApp.etablissementPages', [uiRouter])
  .config(routes)
  .component('etablissementPages', {
    template: require('./etablissementPages.html'),
    controller: EtablissementPagesComponent,
    controllerAs: 'etabCtrl'
  })
  .name;
