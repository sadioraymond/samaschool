'use strict';
const angular = require('angular');

/*@ngInject*/
export function classeProviderService() {
	// AngularJS will instantiate a singleton by calling "new" on this function
}

export default angular.module('samaschoolApp.classeProvider', [])
  .service('classeProvider', classeProviderService)
  .name;
