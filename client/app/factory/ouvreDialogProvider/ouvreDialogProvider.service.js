git log
'use strict';
const angular = require('angular');

/*@ngInject*/
export function ouvreDialogProviderService() {
	// AngularJS will instantiate a singleton by calling "new" on this function
}

export default angular.module('samaschoolApp.ouvreDialogProvider', [])
  .service('ouvreDialogProvider', ouvreDialogProviderService)
  .name;
