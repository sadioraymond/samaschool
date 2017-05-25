'use strict';
const angular = require('angular');

/*@ngInject*/
export function departementProviderService($http, $q) {
  
  // permet d'avoir tous les departements par etablissement
  this.getAllDepartementbyEtab = function (etab) {
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/departements/etablissement/' + etab, {
      cache: true
    }).then(function (list) {
      liste = list.data;
      deferred.resolve(liste);
    });
    liste = deferred.promise;

    return liste;

  }

  // permet d'avoir tous les départements par faculté
  this.getAllDepartementbyFaculte = function (fac) {
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/departements/faculte/' + fac, {
      cache: true
    }).then(function (list) {
      liste = list.data;
      deferred.resolve(liste);
    });
    liste = deferred.promise;

    return liste;

  }
}

export default angular.module('samaschoolApp.departementProvider', [])
  .service('departementProvider', departementProviderService)
  .name;
