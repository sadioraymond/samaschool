'use strict';
const angular = require('angular');

/*@ngInject*/
export function userProviderService($http, $q) {
    this.msg = false;
    this.varbi = null;
    this.inscription = false;
    this.partage = function(test) {
        test.dismiss('cancel');
    }

    // AngularJS will instantiate a singleton by calling "new" on this function
    this.ListUser = function() {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/users', {
            cache: true
        }).then(function(list) {
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;

        return liste;

    }
    this.findById = function(id) {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/users/' + id, {
            cache: true
        }).then(function(list) {
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;
        return liste;
    }
    this.findByUsername = function(username) {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/users/username/' + username, {
            cache: true
        }).then(function(list) {
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;
        return liste;
    }
    this.isProf = function(id) {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/profils/isprof/' + id, {
            cache: true
        }).then(function(list) {
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;
        return liste;
    }
    this.isEtudiant = function(id) {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/profils/isetudiant/' + id, {
            cache: true
        }).then(function(list) {
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;
        return liste;
    }
    this.isUsersimple = function(id) {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/profils/isusersimple/' + id, {
            cache: true
        }).then(function(list) {
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;
        return liste;
    }
    this.changeImages = function(id, images) {
        var deferred = $q.defer();
        $http.put('/api/users/' + id, {
            images: images
        }).then(function() {
            console.log("Modifié bi Bakhna");
        });
    }
    this.deleteFichier = function(images) {
        var deferred = $q.defer();
        console.log('image bi', images)
        $http.get('/deletepictureuser/' + images, {}).then(function() {
            console.log("Image bi dégne na");
        });
    }
     this.getUserByNameOrUsername = function(rech) {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/users/search/' + rech, {
            cache: true
        }).then(function(list) {
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;
        return liste;
    }
    this.completerProfil = function(id, facebook, twitter, linkedIn, google, dateNaiss, bio){
        var deferred = $q.defer();
        $http.put('/api/users/' + id, {
            facebook: facebook,
            twitter: twitter,
            linkedIn: linkedIn,
            google: google,
            dateNaiss : dateNaiss,
            bio: bio
        }).then(function() {
            console.log("Modifié bi Bakhna");
        });
    }
}

export default angular.module('samaschoolApp.userProvider', [])
    .service('userProvider', userProviderService)
    .name;