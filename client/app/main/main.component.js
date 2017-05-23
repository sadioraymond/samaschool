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
    etablissementProvider;
    listeEtablissement;
    listClasseSchool;
    listClasseNiveau;
    listCoursClasse;
    profilProvider;
    listProf;
    listCoursProf;
    jsFonctions;
    listCoursPlussuivi;
    listProfplussuivi;
    listeEtablissementPlussuivi;
    listProfSchool;
    /*@ngInject*/
    constructor($state, $scope, socket, coursProvider, classeProvider, niveauProvider, etablissementProvider, suiviCoursClasseProvider, jsFonctions, profilProvider, $filter) {
        this.$filter = $filter
        this.$state = $state
        this.socket = socket;
        this.coursProvider = coursProvider;
        this.classeProvider = classeProvider;
        this.suiviCoursClasseProvider = suiviCoursClasseProvider;
        this.niveauProvider = niveauProvider;
        this.etablissementProvider = etablissementProvider;
        this.jsFonctions = jsFonctions;
        this.profilProvider = profilProvider;
    }
    GetCoursProfInSchool(id) {
        this.coursProvider.GetCoursProfInSchool(id).then(list => {
            this.listProfSchool = list;
            if (this.listProfSchool.length == 0) {
                console.log('Liste Vide');
            } else {
                console.log('Les Cours du prof', this.listProfSchool);
            }
        });
    }
    getClasseByNiveau(id) {
        this.classeProvider.getClasseByNiveau(id).then(list => {
            this.listClasseNiveau = list;
            if (this.listClasseNiveau.length == 0) {
                console.log('Liste Vide');
            } else {
                // console.log('Les Classe du Niveau', this.listClasseNiveau);
            }

        });
    }
    getClasseByEtablissement(id) {
        this.classeProvider.getClasseByEtablissement(id).then(list => {
            this.listClasseSchool = list;
            if (this.listClasseSchool.length == 0) {
                console.log('Liste Vide');
            } else {
                //console.log('Les Classe de L établissement', this.listClasseSchool);
            }
        });
    }
    getCoursByClasse(id) {
        this.suiviCoursClasseProvider.getCoursByClasse(id).then(list => {
            this.listCoursClasse = list;
            if (this.listCoursClasse.length == 0) {
                console.log('Liste Vide');
            } else {
                //console.log('Les Cours de la classe', this.listCoursClasse);
            }
        });
    }
    $onInit() {
        console.log('VERSION ANGULAR', angular.version.full)
        angular.element(document)
            .ready(() => {
                setTimeout(() => {
                    this.jsFonctions.pluginScript();
                    this.jsFonctions.otherScript();
                }, 500);
            });
        this.etablissementProvider.listeEtablissement().then(list => {
            this.listeEtablissement = list;
            if (this.listeEtablissement.length == 0) {
                console.log('Liste Vide');
            } else {
                //console.log('Les Etablissements', this.listeEtablissement);
                for (let i = 0; i < this.listeEtablissement.length; i++) {
                    //this.getClasseByEtablissement(this.listeEtablissement[i]._id);
                }
            }
        });
        this.etablissementProvider.EtablissementPlussuivi().then(list => {
            this.listeEtablissementPlussuivi = list;
            if (this.listeEtablissementPlussuivi.length == 0) {
                console.log('Liste Vide');
            } else {
                console.log('Les Etablissements les plus suivis', this.listeEtablissementPlussuivi);
            }
        });
        this.niveauProvider.listNiveau().then(list => {
            this.listNiveau = list;
            if (this.listNiveau.length == 0) {
                console.log('Liste Vide');
            } else {
                //console.log('Les Niveaux', this.listNiveau);
                for (let i = 0; i < this.listNiveau.length; i++) {
                    this.getClasseByNiveau(this.listNiveau[i]._id);
                }
            }
        });
        this.classeProvider.listClasse().then(list => {
            this.listClasse = list;
            if (this.listClasse.length == 0) {
                console.log('Liste Vide');
            } else {
                //console.log('Les Classe', this.listClasse);
                for (let i = 0; i < this.listClasse.length; i++) {
                    this.getCoursByClasse(this.listClasse[i]._id);
                }
            }
        });
        this.profilProvider.listProfesseur().then(list => {
            this.listProf = list;
            if (this.listProf.length == 0) {
                // console.log('Aucun Professeur');
            } else {
                //console.log('Les professeurs sont', this.listProf);
                for (let i = 0; i < this.listProf.length; i++) {
                    this.GetCoursProfInSchool(this.listProf[i]._id);
                }
            }
        });


    }
}
export default angular.module('samaschoolApp.main', [uiRouter, 'angular-loading-bar'])
    .config(routing)
    .component('main', {
        template: require('./main.html'),
        controller: MainController
    })
    .name;