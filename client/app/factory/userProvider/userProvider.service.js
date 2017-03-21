'use strict';
const angular = require('angular');

/*@ngInject*/
export function userProviderService($http, $q) {
  this.msg = false;
  this.varbi = null;
  this.partage = function (test) {
    test.dismiss('cancel');
  }

  // AngularJS will instantiate a singleton by calling "new" on this function
  this.ListUser = function () {
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/users', {
      cache: true
    }).then(function (list) {
      liste = list.data;
      deferred.resolve(liste);

    });
    liste = deferred.promise;

    return liste;

  }

}

export default angular.module('samaschoolApp.userProvider', [])
  .service('userProvider', userProviderService)
  .name;
