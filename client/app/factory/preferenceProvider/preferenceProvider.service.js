'use strict';
const angular = require('angular');

/*@ngInject*/
export function preferenceProviderService($http, $q) {
  // AngularJS will instantiate a singleton by calling "new" on this function

  // ajouter une preference
  this.addPref = function (user, scat, date) {
    var deferred = $q.defer();

    $http.post('/api/preferences', {
      user: user,
      sous_categorie: scat,
      date: date
    })
  }

  this.getRestPreferenceUser = function (user) {
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/preferences/restpreference/' + user, {
      cache: true
    }).then(function (list) {
      liste = list.data;
      deferred.resolve(liste);
    });
    liste = deferred.promise;

    return liste;

  }
  this.getPrefByUser = function (user) {
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/preferences/user/' + user, {
      cache: true
    }).then(function (list) {
      liste = list.data;
      deferred.resolve(liste);
    });
    liste = deferred.promise;

    return liste;

  }
  this.delPref = function (pref) {
    var deferred = $q.defer();

    $http.delete('/api/preferences/' + pref)
  }

}


export default angular.module('samaschoolApp.preferenceProvider', [])
  .service('preferenceProvider', preferenceProviderService)
  .name;
