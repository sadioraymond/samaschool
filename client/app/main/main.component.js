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
    detailClasseProvider;
    listClasseSchool;
    listClasseNiveau;
    listCoursClasse;
    profilProvider;
    listProf;
    listCoursProf;
    listschoolClass;
    listschoolClasse = [];
    tabclasse;
    schoolClasse;
    jsFonctions;
    listCoursPlussuivi;
    listProfplussuivi;
    listeEtablissementPlussuivi;
    listeEPlussuivi;
    CoursPlusSuivi;
    Profplussuivi;
    /*@ngInject*/
    constructor($http, $scope, socket, coursProvider, classeProvider, niveauProvider, etablissementProvider, suiviCoursClasseProvider, detailClasseProvider, jsFonctions, profilProvider) {
        this.$http = $http;
        this.socket = socket;
        this.coursProvider = coursProvider;
        this.classeProvider = classeProvider;
        this.suiviCoursClasseProvider = suiviCoursClasseProvider;
        this.niveauProvider = niveauProvider;
        this.etablissementProvider = etablissementProvider;
        this.detailClasseProvider = detailClasseProvider;
        this.jsFonctions = jsFonctions;
        this.profilProvider = profilProvider;

    }
    FindEtabByID(id, nbfois) {
        this.etablissementProvider.FindEtabByID(id).then(list => {
            this.listeEPlussuivi = list;
            if (this.listeEPlussuivi.length == 0) {
                console.log('Liste Vide');
            } else {
                this.listeEPlussuivi.nbsuivi = nbfois;
                console.log('Les Etablissements les plus suivis', this.listeEPlussuivi);
            }
        });
    }
    FindProfByID(id, nbfois) {
        this.profilProvider.FindProfByID(id).then(list => {
            this.Profplussuivi = list;
            if (this.Profplussuivi.length == 0) {
                // console.log('Aucun Professeur');
            } else {
                this.Profplussuivi.nb_suivi = nbfois;
                console.log('Les professeurs les plus suivi sont', this.Profplussuivi);
            }
        });
    }
    FindCoursById(id, nb) {
        this.coursProvider.FindById(id).then(list => {
            this.CoursPlusSuivi = list;
            if (this.CoursPlusSuivi.length == 0) {
                console.log('Liste Vide');
            } else {
                this.CoursPlusSuivi.suivi = nb;
                console.log('Les Cours les plus suivi', this.CoursPlusSuivi);
            }
        });
    }
    getEtabByClasse(id, cours) {
        this.detailClasseProvider.getEtabByClasse(id).then(list => {
            this.listschoolClass = list;
            cours.school = this.listschoolClass;
            this.listschoolClasse = cours;
        });
    }
    getCoursByProf(id) {
        this.coursProvider.getCoursByProf(id).then(liste => {
            this.listCoursProf = liste;
            if (this.listCoursProf.length == 0) {
                // console.log('Aucun cours pour ce prof');
            } else {
                for (let i = 0; i < this.listCoursProf.length; i++) {
                    this.getClasseByCours(this.listCoursProf[i]._id, this.listCoursProf[i]);
                }
            }
        });
    }
    getClasseByCours(id, cours) {
        this.coursProvider.getClasseByCours(id).then(list => {
            this.listCoursClasse = list;
            if (this.listCoursClasse.length == 0) {
                console.log('Liste Vide');
            } else {
                this.tabclasse = cours;
                this.tabclasse.classe = this.listCoursClasse;
                console.log('Dafa leer', this.tabclasse);
                for (let i = 0; i < this.tabclasse.classe.length; i++) {
                    this.getEtabByClasse(this.tabclasse.classe[i]._id, this.tabclasse.classe[i]);
                }

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
        this.detailClasseProvider.getClasseByEtablissement(id).then(list => {
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
        angular.element(document)
            .ready(() => {
                setTimeout(() => {
                    this.jsFonctions.pluginScript();
                    this.jsFonctions.otherScript();
                }, 0);
            });
        this.coursProvider.listCours().then(list => {
            this.listCours = list;
            if (this.listCours.length == 0) {
                console.log('Liste Vide');
            } else {
                //console.log('Les Cours', this.listCours);
            }
        });
        this.coursProvider.CoursPlusSuivi().then(list => {
            this.listCoursPlussuivi = list;
            if (this.listCoursPlussuivi.length == 0) {
                console.log('Liste Vide');
            } else {
                for (let i = 0; i < this.listCoursPlussuivi.length; i++) {
                    this.FindCoursById(this.listCoursPlussuivi[i].id, this.listCoursPlussuivi[i].nb_suiv);
                }
            }
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
                for (let i = 0; i < this.listeEtablissementPlussuivi.length; i++) {
                    this.FindEtabByID(this.listeEtablissementPlussuivi[i].id, this.listeEtablissementPlussuivi[i].nbfois);
                }
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
                    this.getCoursByProf(this.listProf[i]._id);
                }
            }
        });
        this.profilProvider.ProfesseurPlusSuivi().then(list => {
            this.listProfplussuivi = list;
            if (this.listProfplussuivi.length == 0) {
                // console.log('Aucun Professeur');
            } else {
                for (let i = 0; i < this.listProfplussuivi.length; i++) {
                    this.FindProfByID(this.listProfplussuivi[i].id, this.listProfplussuivi[i].nbfois);
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