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
  jsFonctions;
  /*@ngInject*/
  constructor($http, $scope, socket, coursProvider, classeProvider, niveauProvider, etablissementProvider, suiviCoursClasseProvider, detailClasseProvider, jsFonctions) {
    this.$http = $http;
    this.socket = socket;
    this.coursProvider = coursProvider;
    this.classeProvider = classeProvider;
    this.suiviCoursClasseProvider = suiviCoursClasseProvider;
    this.niveauProvider = niveauProvider;
    this.etablissementProvider = etablissementProvider;
    this.detailClasseProvider = detailClasseProvider;
    this.jsFonctions = jsFonctions;

  }
  getClasseByNiveau(id) {
    this.classeProvider.getClasseByNiveau(id).then(list => {
      this.listClasseNiveau = list;
      if (this.listClasseNiveau.length == 0) {
        console.log('Liste Vide');
      } else {
        console.log('Les Classe du Niveau', this.listClasseNiveau);
      }

    });
  }
  getClasseByEtablissement(id) {
    this.detailClasseProvider.getClasseByEtablissement(id).then(list => {
      this.listClasseSchool = list;
      if (this.listClasseSchool.length == 0) {
        console.log('Liste Vide');
      } else {
        console.log('Les Classe de L établissement', this.listClasseSchool);
      }
    });
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
    angular.element(document)
      .ready(() => {

        this.jsFonctions.pluginScript();
        this.jsFonctions.otherScript();
      });
    // setTimeout(function () {}, 50);
    this.coursProvider.listCours().then(list => {
      this.listCours = list;
      if (this.listCours.length == 0) {
        console.log('Liste Vide');
      } else {
        console.log('Les Cours', this.listCours);
      }
    });
    this.etablissementProvider.listeEtablissement().then(list => {
      this.listeEtablissement = list;
      if (this.listeEtablissement.length == 0) {
        console.log('Liste Vide');
      } else {
        console.log('Les Etablissements', this.listeEtablissement);
        for (var i = 0; i < this.listeEtablissement.length; i++) {
          this.getClasseByEtablissement(this.listeEtablissement[i]._id);
        }
      }
    });
    this.niveauProvider.listNiveau().then(list => {
      this.listNiveau = list;
      if (this.listNiveau.length == 0) {
        console.log('Liste Vide');
      } else {
        console.log('Les Niveaux', this.listNiveau);
        for (var i = 0; i < this.listNiveau.length; i++) {
          this.getClasseByNiveau(this.listNiveau[i]._id);
        }
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
