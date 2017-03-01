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
    suiviCoursClasseProvider;
    listCoursClasse;
    niveauProvider;
    listNiveau;
    /*@ngInject*/
    constructor($http, $scope, socket, coursProvider, classeProvider, suiviCoursClasseProvider, niveauProvider) {
        this.$http = $http;
        this.socket = socket;
        this.coursProvider = coursProvider;
        this.classeProvider = classeProvider;
        this.suiviCoursClasseProvider = suiviCoursClasseProvider;
        this.niveauProvider = niveauProvider;

    }
    getCoursByClasse(id) {
        this.suiviCoursClasseProvider.getCoursByClasse(id).then(list => {
            this.listCoursClasse = list;
            if (this.listCoursClasse.length == 0) {
                console.log('Liste Vide');
            } else {
                console.log('Les Cours de la classe', this.listCoursClasse);
            }
        });
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
        this.niveauProvider.listNiveau().then(list => {
            this.listNiveau = list;
            if (this.listNiveau.length == 0) {
                console.log('Liste Vide');
            } else {
                console.log('Les Niveaux', this.listNiveau);
            }
        });
        this.classeProvider.listClasse().then(list => {
            this.listClasse = list;
            if (this.listClasse.length == 0) {
                console.log('Liste Vide');
            } else {
                console.log('Les Classe', this.listClasse);
                for (var i = 0; i < this.listClasse.length; i++) {
                    this.getCoursByClasse(this.listClasse[i]._id);
                }
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