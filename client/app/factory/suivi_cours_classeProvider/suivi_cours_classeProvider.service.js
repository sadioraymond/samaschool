'use strict';
const angular = require('angular');

/*@ngInject*/
export function suiviCoursClasseProviderService($http, $q) {
  // AngularJS will instantiate a singleton by calling "new" on this function
  this.getCoursByClasse = function (classe) {
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/suivi_cours_classes/classe/' + classe, {
      cache: true
    }).then(function (list) {
      liste = list.data;
      deferred.resolve(liste);

    });
    liste = deferred.promise;

    return liste;

  }
}

export default angular.module('samaschoolApp.suivi_cours_classeProvider', [])
  .service('suiviCoursClasseProvider', suiviCoursClasseProviderService)
  .name;
