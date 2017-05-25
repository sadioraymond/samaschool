'use strict';
const angular = require('angular');

/*@ngInject*/
export function filiereProviderService($http, $q) {

  // permet d'avoir toutes les fileres par etablissement
  this.getAllFilierebyEtab = function (etab) {
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/filieres/etablissement/' + etab, {
      cache: true
    }).then(function (list) {
      liste = list.data;
      deferred.resolve(liste);
    });
    liste = deferred.promise;

    return liste;

  }

  // permet d'avoir toutes les fileres par departement
  this.getAllFilierebyDepartement = function (dep) {
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/filieres/departement/' + dep, {
      cache: true
    }).then(function (list) {
      liste = list.data;
      deferred.resolve(liste);
    });
    liste = deferred.promise;

    return liste;

  }
}

export default angular.module('samaschoolApp.filiereProvider', [])
  .service('filiereProvider', filiereProviderService)
  .name;
