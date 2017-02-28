'use strict';
const angular = require('angular');

/*@ngInject*/
export function categorieProviderService() {
	// AngularJS will instantiate a singleton by calling "new" on this function
  this.listCat = function() {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/categories', {
            cache: true
        }).then(function(list) {
            console.log("Cat yi bakhna", list);
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;

        return liste;

    }
}

export default angular.module('samaschoolApp.categorieProvider', [])
  .service('categorieProvider', categorieProviderService)
  .name;
