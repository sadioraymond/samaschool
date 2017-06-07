'use strict';
const angular = require('angular');

/*@ngInject*/
export function suiviCoursProviderService($http, $q) {

  this.getCoursByUser = function (user) {
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/suivi_courss/user/' + user, {
      cache: true
    }).then(function (list) {
      liste = list.data;
      deferred.resolve(liste);

    });
    liste = deferred.promise;

    return liste;

  }

  this.addSuivi = function (pub, user, date) {
    var deferred = $q.defer();

    $http.post('/api/suivi_courss', {
      publication: pub,
      user: user,
      date_suivie: date
    })

  }

  this.verifSuivi = function (user, cours) {
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/suivi_courss/userCours/' + user + '/' + cours, {
      cache: true
    }).then(function (list) {
      liste = list.data;
      deferred.resolve(liste);

    });
    liste = deferred.promise;

    return liste;

  }

  this.delSuivi = function (suivi) {
    var deferred = $q.defer();

    $http.delete('/api/suivi_courss/' + suivi)
  }

}



export default angular.module('samaschoolApp.suivi_coursProvider', [])
  .service('suiviCoursProvider', suiviCoursProviderService)
  .name;
