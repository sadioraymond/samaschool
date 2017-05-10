'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './register.routes';

export class RegisterComponent {
    jsFonctions;
    /*@ngInject*/
    etablissementProvider;
    libelle;
    adresse;
    tel;
    email;
    images;
    imagecouverture;
    slogan;
    constructor(jsFonctions, etablissementProvider) {
        this.message = 'Hello';
        this.jsFonctions = jsFonctions;
        this.etablissementProvider = etablissementProvider;
        this.images = "imageParDefautPourLesEtablissement.png";
        this.imagecouverture = "ucad.jpg";
    }
    ajoutEtablissement() {
        this.etablissementProvider.ajoutEtablissement(this.libelle, this.adresse, this.tel, this.email, this.images, this.imagecouverture,this.slogan);
        window.location.reload();
    }
    $onInit() {
        angular.element(document)
            .ready(() => {
                setTimeout(() => {
                    this.jsFonctions.pluginScript();
                    this.jsFonctions.otherScript();
                }, 0);
            });
    }
}

RegisterComponent.$inject = ["jsFonctions", "etablissementProvider"];
export default angular.module('samaschoolApp.register', [uiRouter])
    .config(routes)
    .component('register', {
        template: require('./register.html'),
        controller: RegisterComponent,
        controllerAs: 'registerCtrl'
    })
    .name;