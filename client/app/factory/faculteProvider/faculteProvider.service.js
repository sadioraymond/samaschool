'use strict';
const angular = require('angular');

/*@ngInject*/
export function faculteProviderService($http, $q) {
  // AngularJS will instantiate a singleton by calling "new" on this function

  // permet d'avoir les facultés d'un etablissement
  this.getFaculteByEtab = function (etab) {
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/facultes/etablissement/' + etab, {
      cache: true
    }).then(function (list) {
      liste = list.data;
      deferred.resolve(liste);
    });
    liste = deferred.promise;

    return liste;

  }
}

export default angular.module('samaschoolApp.faculteProvider', [])
  .service('faculteProvider', faculteProviderService)
  .name;
