'use strict';
const angular = require('angular');

/*@ngInject*/
export function etablissementProviderService($http, $q, $log) {
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
    }, function (error) {
      $log.error('from provider',error)
      deferred.reject(error);

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
  this.getEtabInscritByUser = function (user) {
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/etablissements/userInscrit/' + user, {
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
   this.getEtabSuiviByUser = function (user) {
    var deferred = $q.defer();
    var liste = [];
    $http.get('/api/etablissements/userSuivi/' + user, {
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

  // ajout du suivi d'un étalbissement
  this.addSuivi = function ( user, etab, suivre, active) {
    var deferred = $q.defer();

    $http.post('/api/detail_users', {
      user: user,
      etablissement: etab,
      suivre: suivre,
      active: active
    })

  }

// verifier le suivi d'un etablissement
this.SuiviVerif = function(user, etab){
  var deferred = $q.defer();
    var liste = [];
    $http.get('/api/detail_users/userEtab/' + user + '/' + etab, {
      cache: true
    }).then(function (list) {
      liste = list.data;
      deferred.resolve(liste);

    });
    liste = deferred.promise;

    return liste;

}

  // supprimmer le suivi d'un etablissement
  this.delSuivi = function (suivi) {
    var deferred = $q.defer();

    $http.delete('/api/detail_users/' + suivi)
  }
}


export default angular.module('samaschoolApp.etablissementProvider', [])
  .service('etablissementProvider', etablissementProviderService)
  .name;
