import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
    $http;
    socket;
    newThing = '';
    coursProvider;
    listCours;
    classeProvider;
    listClasse;
    /*@ngInject*/
    constructor($http, $scope, socket, coursProvider, classeProvider) {
        this.$http = $http;
        this.socket = socket;
        this.coursProvider = coursProvider;
        this.classeProvider = classeProvider;

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
        this.classeProvider.listClasse().then(list => {
            this.listClasse = list;
            if (this.listClasse.length == 0) {
                console.log('Liste Vide');
            } else {
                console.log('Les Classe', this.listClasse);
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