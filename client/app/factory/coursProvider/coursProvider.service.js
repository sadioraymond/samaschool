'use strict';
const angular = require('angular');

/*@ngInject*/
export function coursProviderService($http, $q) {
  // AngularJS will instantiate a singleton by calling "new" on this function
  this.listeCouu = null;
  this.listCours = function () {
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/courss', {
      cache: true
    }).then(function (list) {
      liste = list.data;
      deferred.resolve(liste);

    });
    liste = deferred.promise;

    return liste;

  }

}

export default angular.module('samaschoolApp.coursProvider', [])
  .service('coursProvider', coursProviderService)
  .name;
