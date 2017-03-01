import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
    $http;
    socket;
    newThing = '';
    coursProvider;
    listCours;
    /*@ngInject*/
    constructor($http, $scope, socket, coursProvider) {
        this.$http = $http;
        this.socket = socket;
        this.coursProvider = coursProvider;


    }

    $onInit() {
        this.coursProvider.listCours().then(list => {
            this.listCours = list;
            if (this.listCours.length == 0) {
                console.log('Liste Vide');
            } else {
                console.log('Les Cours', this.listCours);
            }
        });

    }

}

export default angular.module('samaschoolApp.main', [uiRouter])
    .config(routing)
    .component('main', {
        template: require('./main.html'),
        controller: MainController
    })
    .name;