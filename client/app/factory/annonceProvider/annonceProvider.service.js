'use strict';
const angular = require('angular');

/*@ngInject*/
export function annonceProviderService($http, $q) {
	// AngularJS will instantiate a singleton by calling "new" on this function

   this.getAnnonceByEtab = function (etab) {
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/annonces/etablissement/' + etab, {
      cache: true
    }).then(function (list) {
      liste = list.data;
      deferred.resolve(liste);

    });
    liste = deferred.promise;
    return liste;

  }
}

export default angular.module('samaschoolApp.annonceProvider', [])
  .service('annonceProvider', annonceProviderService)
  .name;
