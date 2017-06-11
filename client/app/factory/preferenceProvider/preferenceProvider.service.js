'use strict';
const angular = require('angular');

/*@ngInject*/
export function preferenceProviderService($http, $q) {
  // AngularJS will instantiate a singleton by calling "new" on this function

  // ajouter une preference
this.addPref = function(user, scat, date){
   var deferred = $q.defer();

    $http.post('/api/preferences', {
      user: user,
      sous_categorie: scat,
      date: date
    })
}
}

export default angular.module('samaschoolApp.preferenceProvider', [])
  .service('preferenceProvider', preferenceProviderService)
  .name;
