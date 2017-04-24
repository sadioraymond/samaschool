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
    constructor(jsFonctions, $stateParams, etablissementProvider, ouvreDialogProvider) {
        this.jsFonctions = jsFonctions;
        this.$stateParams = $stateParams;
        console.log('param etablissement =>', this.$stateParams)
        this.etablissementProvider = etablissementProvider;
        this.ouvreDialogProvider = ouvreDialogProvider;
        this.datetime = this.currentdate.getFullYear() + "-" + (this.currentdate.getMonth() + 1) + "-" + this.currentdate.getDate();
    }
    $onInit() {
        var fichier = document.querySelector('#selectPPEtab');
        fichier.addEventListener('change', (e) => {
            this.im = this.ouvreDialogProvider.uploadFile(e, "imgTagEtab");
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