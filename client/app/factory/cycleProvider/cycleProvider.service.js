'use strict';
const angular = require('angular');

/*@ngInject*/
export function cycleProviderService($http, $q) {

  // perment d'avoir les cycles d'un établissement
  this.getCyclebyEtab = function (etab) {
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/detail_cycles/etablissement/' + etab, {
      cache: true
    }).then(function (list) {
      liste = list.data;
      deferred.resolve(liste);
    });
    liste = deferred.promise;

    return liste;

  }
}

export default angular.module('samaschoolApp.cycleProvider', [])
  .service('cycleProvider', cycleProviderService)
  .name;
