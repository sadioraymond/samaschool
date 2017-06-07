'use strict';
const angular = require('angular');

/*@ngInject*/
export function multerProviderService($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    //fonction d'ajout d'une image

    this.addImage = function(form, sub, image) {
        document.querySelector(form).action = image;
        document.querySelector(sub).submit();
    }
}

export default angular.module('samaschoolApp.multerProvider', [])
    .service('multerProvider', multerProviderService)
    .name;