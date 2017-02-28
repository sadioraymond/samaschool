'use strict';
const angular = require('angular');

/*@ngInject*/
export function sousCategorieProviderService() {
	// AngularJS will instantiate a singleton by calling "new" on this 
  this.listSousCat = function() {
        var deferred = $q.defer();
        var liste = [];
        $http.get('/api/sous_categories', {
            cache: true
        }).then(function(list) {
            console.log("sousCat yi bakhna", list);
            liste = list.data;
            deferred.resolve(liste);

        });
        liste = deferred.promise;

        return liste;

    }
}

export default angular.module('samaschoolApp.sousCategorieProvider', [])
  .service('sousCategorieProvider', sousCategorieProviderService)
  .name;
