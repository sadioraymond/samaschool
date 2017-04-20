'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './etablissementPages.routes';

export class EtablissementPagesComponent {
  /*@ngInject*/
  // variables globales
  Letablissement;
  LesAnnoncesParEtab;
  constructor(jsFonctions, $stateParams, etablissementProvider) {
    this.jsFonctions = jsFonctions;
    this.$stateParams = $stateParams;
    console.log('param etablissement =>', this.$stateParams)
    this.etablissementProvider = etablissementProvider;
  }
  $onInit() {
    var fichier = document.querySelector('#selectPPEtab');
    fichier.addEventListener('change', propFichier, false);

    function propFichier(e) {
      // propfichier(e.target.files);
      let fichier = e.target.files[0]
      if (fichier.type.indexOf('image') > -1) {
        var lecteur = new FileReader();
        lecteur.onload = function (e) {
          console.log('log', e);
          let imgTagEtab = document.querySelector('#imgTagEtab');
          imgTagEtab.setAttribute('src', e.target.result);
          imgTagEtab.setAttribute('ng-src', '');
          console.log('tag', imgTagEtab);
        }
        lecteur.readAsDataURL(fichier);
        console.log('bandi bi', fichier);


      } else {
        alert('Ce n\'est pas une image');
      }
      // console.log('target', e.target.files);
    }
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
EtablissementPagesComponent.$inject = ["jsFonctions", "$stateParams", "etablissementProvider"];
export default angular.module('samaschoolApp.etablissementPages', [uiRouter])
  .config(routes)
  .component('etablissementPages', {
    template: require('./etablissementPages.html'),
    controller: EtablissementPagesComponent,
    controllerAs: 'etabCtrl'
  })
  .name;
