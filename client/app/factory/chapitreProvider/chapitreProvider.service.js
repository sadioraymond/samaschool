'use strict';
const angular = require('angular');

/*@ngInject*/
export function chapitreProviderService($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function


}

export default angular.module('samaschoolApp.chapitreProvider', [])
    .service('chapitreProvider', chapitreProviderService)
    .name;