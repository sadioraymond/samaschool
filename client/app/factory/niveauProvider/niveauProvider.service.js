'use strict';
const angular = require('angular');

/*@ngInject*/
export function niveauProviderService() {
	// AngularJS will instantiate a singleton by calling "new" on this function
}

export default angular.module('samaschoolApp.niveauProvider', [])
  .service('niveauProvider', niveauProviderService)
  .name;
