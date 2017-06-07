'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './etablissementPages.routes';

export class EtablissementPagesComponent {
  /*@ngInject*/
  // variables globales
  Letablissement;
  imag;
  currentdate = new Date();
  datetime;
  im;
  ima;
  LesProfs;
  imC;
  imaC;
  imagC;
  bool;
  getCurrentUser: Function;
  isLoggedIn: Function;
  etat;
  constructor(jsFonctions, $stateParams, etablissementProvider, ouvreDialogProvider, $log, $state, Auth,$timeout) {
    this.$log = $log
    this.$state = $state
    this.jsFonctions = jsFonctions;
    this.$stateParams = $stateParams;
    this.getCurrentUser = Auth.getCurrentUserSync;
    this.isLoggedIn = Auth.isLoggedInSync;
    this.bool = false;
    this.$timeout = $timeout;

    console.log('param etablissement =>', this.$stateParams)
    this.etablissementProvider = etablissementProvider;
    this.ouvreDialogProvider = ouvreDialogProvider;
    this.datetime = this.currentdate.getFullYear() + "-" + (this.currentdate.getMonth() + 1) + "-" + this.currentdate.getDate();
  }
  $onInit() {
    var fichier = document.querySelector('#selectPPEtab');
    fichier.addEventListener('change', (e) => {
      this.im = this.ouvreDialogProvider.uploadFile(e, "imgTagEtab", false, "Etablissement");
      this.ima = this.im.type.split('/').pop();
      this.imag = Date.now() + '.' + this.ima;
      console.log('li ni', this.ima);
      console.log('id image', this.$stateParams.id);
      console.log('nom image', this.imag);
      document.querySelector("#editschoolform").action = `/etablissement/${this.imag}`;
      document.querySelector('#editschoolform').submit();
      this.etablissementProvider.changeImages(this.$stateParams.id, this.imag);
      if (this.Letablissement.images !== "imageParDefautPourLesEtablissement.png") {
        console.log('bien');
        this.etablissementProvider.deleteFichier(this.Letablissement.images);
      }
    });
    var fichiers = document.querySelector('#selectPPEtabC');
    fichiers.addEventListener('change', (e) => {
      this.imC = this.ouvreDialogProvider.uploadFile(e, "imgTagEtabC", true, "Etablissement");
      this.imaC = this.imC.type.split('/').pop();
      this.imagC = Date.now() + '.' + this.imaC;
      console.log('li ni', this.imaC);
      console.log('id image', this.$stateParams.id);
      console.log('nom image', this.imagC);
      document.querySelector("#editPhotoCouvertureEtab").action = `/etablissement/${this.imagC}`;
      document.querySelector('#editPhotoCouvertureEtab').submit();
      this.etablissementProvider.changeImagesC(this.$stateParams.id, this.imagC);
      this.etablissementProvider.deleteFichier(this.Letablissement.imagecouverture);
    });
    angular.element(document)
      .ready(() => {
        setTimeout(() => {
          this.jsFonctions.pluginScript();
          this.jsFonctions.otherScript();
        }, 0);
        setTimeout(() => {
          this.jsFonctions.mapjs();
        }, 2000);
      });

    // recuperation de l'etablissement en cours
    this.etablissementProvider.FindEtabByID(this.$stateParams.id).then(etablissement => {
      this.Letablissement = etablissement;
      console.log(`l'etablissement =>>`, this.Letablissement);
    }, (error) => {
      this.$log.error('from component', error)
      this.$state.go('main')
    });


    // Les profs d'un établissement
    // TODO: reglage du bug, le nom du prof par souvent
    this.etablissementProvider.getProfInEtablissement(this.$stateParams.id).then(profs => {
      this.LesProfs = profs;
      console.log(`les Profs=>>`, profs);

    })

    // vérification si l'utilisateur connecté suit déja l'etablissement'
    this.$timeout(() => {
      if (this.isLoggedIn()) {
        this.etablissementProvider.SuiviVerif(this.getCurrentUser()._id, this.$stateParams.id).then(list => {
          this.etat = list;
          if (this.etat.length != 0) {
            this.bool = true;
          }
          console.log('khollllll', list);
        })
      }
    }, 1000);


  }

  // click sur le boutton suivre
  suivreClick() {
    this.etablissementProvider.addSuivi(this.getCurrentUser()._id, this.$stateParams.id, true, true);
    this.bool = true;
  }
// TODO : régler ne pas suivre juste apres avoir cliqué sur suivre
  //click sur le boutton ne plus suivre un cours 
  nePlusSuivreClick(){
    this.bool = false;
    this.etablissementProvider.delSuivi(this.etat[0]._id);
  } 

  cacher() {
    if (this.bool == false && !this.isLoggedIn()) {
      return true;
    }
    if (this.bool == true) {
      return true;
    }
   
    return false;
  }

  showDialog() {
    $('#selectPPEtab').click();

  }
  showDialogs() {
    $('#selectPPEtabC').click();

  }
}
EtablissementPagesComponent.$inject = ["jsFonctions", "$stateParams", "etablissementProvider", "ouvreDialogProvider", "$log", "$state", "Auth","$timeout"];
export default angular.module('samaschoolApp.etablissementPages', [uiRouter])
  .config(routes)
  .component('etablissementPages', {
    template: require('./etablissementPages.html'),
    controller: EtablissementPagesComponent,
    controllerAs: 'etabCtrl'
  })
  .name;
