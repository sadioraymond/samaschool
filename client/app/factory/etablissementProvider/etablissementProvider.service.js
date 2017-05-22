'use strict';
const angular = require('angular');

/*@ngInject*/
export function etablissementProviderService($http, $q) {
  // AngularJS will instantiate a singleton by calling "new" on this function
  this.listeEtab = null;
  this.listeEtablissement = function () {
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/etablissements', {
      cache: true
    }).then(function (list) {
      liste = list.data;
      deferred.resolve(liste);

    });
    liste = deferred.promise;

    return liste;

  }

  this.EtablissementPlussuivi = function () {
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/detail_users/suivi', {
      cache: true
    }).then(function (list) {
      liste = list.data;
      deferred.resolve(liste);

    });
    liste = deferred.promise;

    return liste;

  }
  this.FindEtabByID = function (id) {
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/etablissements/' + id, {
      cache: true
    }).then(function (list) {
      liste = list.data;
      deferred.resolve(liste);

    });
    liste = deferred.promise;

    return liste;

  }
  this.ajoutEtablissement = function (libelle, adresse, tel, email, images, imagecouverture, slogan) {
    var deferred = $q.defer();
    $http.post('/api/etablissements', {
      libelle: libelle,
      adresse: adresse,
      tel: tel,
      email: email,
      images: images,
      imagecouverture: imagecouverture,
      slogan: slogan
    }).then(function () {
      console.log("School yi Bakhna");
    });
  }
  this.changeImages = function (id, images) {
    var deferred = $q.defer();
    $http.put('/api/etablissements/' + id, {
      images: images
    }).then(function () {
      console.log("Modifié bi Bakhna");
    });
  }
  this.changeImagesC = function (id, images) {
    var deferred = $q.defer();
    $http.put('/api/etablissements/' + id, {
      imagecouverture: images
    }).then(function () {
      console.log("Modifié bi Bakhna");
    });
  }
  this.getEtabByUser = function (user) {
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/etablissements/user/' + user, {
      cache: true
    }).then(function (list) {
      liste = list.data;
      deferred.resolve(liste);

    }, function (error) {
      // console.error(error)
      deferred.reject(error);

    });
    liste = deferred.promise;

    return liste;

  }
  this.getProfInEtablissement = function (school) {
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/etablissements/prof/' + school, {
      cache: true
    }).then(function (list) {
      liste = list.data;
      deferred.resolve(liste);

    });
    liste = deferred.promise;

    return liste;

  }
  this.deleteFichier = function (images) {
    var deferred = $q.defer();
    console.log('image bi', images)
    $http.get('/deletepictureschool/' + images, {}).then(function () {
      console.log("Image bi dégne na");
    });
  }

  this.getEtabByNom = function (nom) {
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/etablissements/nom/' + nom, {

      cache: true
    }).then(function (list) {
      liste = list.data;
      deferred.resolve(liste);

    });
    liste = deferred.promise;

    return liste;

  }
  this.getEquipeByEtablissement = function (school) {
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/equipes/etablissement/' + school, {
      cache: true
    }).then(function (list) {
      liste = list.data;
      deferred.resolve(liste);

    });
    liste = deferred.promise;

    return liste;

  }
}


export default angular.module('samaschoolApp.etablissementProvider', [])
  .service('etablissementProvider', etablissementProviderService)
  .name;
