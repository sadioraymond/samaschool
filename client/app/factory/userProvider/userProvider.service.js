'use strict';
const angular = require('angular');

/*@ngInject*/
export function userProviderService($http, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.AjoutUser = function(name, email, password) {
        var deferred = $q.defer();
        $http.post('/api/users', {
            name: name,
            email: email,
            password: password
        }).then(function() {
            console.log("Bakhna");
        });
    }
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
}

export default angular.module('samaschoolApp.userProvider', [])
    .service('userProvider', userProviderService)
    .name;