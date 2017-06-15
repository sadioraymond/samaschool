'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './courseSinglePage.routes';

export class CourseSinglePageComponent {
  jsFonctions;
  coursProvider;
  $stateParams;
  souscategorieProvider;
  chapitreProvider;
  userProvider;
  LesChapitres: Array;
  LeCours: Array;
  getCurrentUser: Function;
  isLoggedIn: Function;
  currentdate = new Date();
  etat;

  // le user connecté n'est pas le createur du cours
  courseCreator = false
  // pour l'affichage des champs
  modif = false
  // pour changer le bouton
  bool;
  /*@ngInject*/
  constructor(jsFonctions, coursProvider, $stateParams, souscategorieProvider, chapitreProvider, userProvider, suiviCoursProvider, Auth, $state, $timeout, classeProvider, $log) {
    // setTimeout(() => {
    this.$log = $log
    this.$timeout = $timeout
    this.$stateParams = $stateParams;
    this.userProvider = userProvider;
    this.$log.log('params =>', this.$stateParams);
    // }, 50);
    this.message = 'Hello';
    this.jsFonctions = jsFonctions;
    this.coursProvider = coursProvider;
    this.souscategorieProvider = souscategorieProvider;
    this.chapitreProvider = chapitreProvider;
    this.bool = false;
    this.suiviCoursProvider = suiviCoursProvider;
    this.getCurrentUser = Auth.getCurrentUserSync;
    this.isLoggedIn = Auth.isLoggedInSync;
    this.classeProvider = classeProvider
    this.listClasseUsers = []
    //true par defaut si page accueil du cours
    this.firstPart = true
    //false par defaut si page accueil du cours
    this.secondPart = false
    // Pour la pagination
    this.isTheNext = false
    this.isThePrev = false
  }
  $onInit() {
    if (this.coursProvider.reload) {
      this.$state.reload();
      this.coursProvider.reload = false;
    }
    angular.element(document)
      .ready(() => {
        this.$timeout(() => {
          this.jsFonctions.pluginScript();
          this.jsFonctions.otherScript();
        }, 0);
      });



    this.verify = function (tab, element) {
      for (let i = 0; i < tab.length; i++) {
        if (tab[i]._id == element) {
          return true;
        }
      }
      return false;
    }

    this.verif = function (tab, element) {
      if (tab._id == element) {
        return true;
      }
      return false;
    }

    // vérification si l'utilisateur connecté suit déja le cours
    this.$timeout(() => {
      if (this.isLoggedIn()) {
        this.suiviCoursProvider.verifSuivi(this.getCurrentUser()._id, this.$stateParams.idCours).then(list => {
          this.etat = list;
          if (this.etat.length != 0) {
            this.bool = true;
          }
          console.log('khollllll', list);
        })
      }
      // Editor options. 
      this.options = {
        language: 'en',
        allowedContent: true,
        entities: false
      };
    }, 1000);




    // this.souscategorieProvider.getSousCatById(this.$stateParams.sousDomaine).then(list => {
    //   this.souscat = list;
    //   console.log('La Sous Catégorie', this.souscat);
    // });
    // Recuperation du cours en passant l'url
    this.coursProvider.FindById(this.$stateParams.idCours).then(list => {
      this.LeCours = list;
      console.log('objet cours =>>', this.LeCours);

      // le createur du cours est il connecté
      if (this.getCurrentUser()._id === this.LeCours.user._id) {
        this.courseCreator = true
      } else {
        this.courseCreator = false
      }


      // si le cours a des chapitres
      if (!this.LeCours.contenu) {
        // Recuperation des chapitres en passant l'url
        this.chapitreProvider.getChapitreByCours(this.$stateParams.idCours).then(list => {
          this.LesChapitres = list;
          console.info('les chapitre du cours =>>', this.LesChapitres, 'et nombre ', this.LesChapitres.length);
          // si un chapitre est choisi
          // recherche du chapitre choisi
          if (this.$stateParams.idChap) {
            // preparation du template à afficher [secondPart a true]
            this.exploreCourse()
            this.LesChapitres.map((chapitre) => {
              if (chapitre._id == this.$stateParams.idChap) {
                this.LeChapitre = chapitre;
                console.log('le chapitre ===>>> ', this.LeChapitre);
                // recuperation du contenu du chapitre
                this.LeChapitre.contenuChap = chapitre.contenu;
                this.LeChapitre.linkchapitre = chapitre.link;
              }
            });

            this.LesChapitres.map((chapitre) => {
              if (this.LeChapitre.numchap + 1 === chapitre.numchap) {
                this.isTheNext = chapitre
                console.log('isTheNext ===>>> ', this.isTheNext);
              }
              if (this.LeChapitre.numchap - 1 === chapitre.numchap) {
                this.isThePrev = chapitre
                console.log('isThePrev ===>>> ', this.isThePrev);
              }
              console.log('isThePrev ===>>> ', this.isThePrev);
            });


          }
        });
      }
      // this.userProvider.findById(this.LeCours.user).then(list => {
      //   this.Leprof = list;
      //   console.log('Le prof qui a cree le cours =>>', this.Leprof);
      // });
      this.coursProvider.getClasseByCours(this.LeCours._id).then((list) => {
        this.lesClasseDuCours = list
        console.log('lesClasseDuCours =<', this.lesClasseDuCours)
      })
    });

    // Recuperation des autres cours de la sous Catégorie
    this.$timeout(() => {
      this.coursProvider.getCoursBySousCat(this.LeCours.sous_categorie._id).then(list => {
        this.LesCoursDeLaSousCategorie = list;
        // suppression du cours qui est déja afficher
        this.LesCoursDeLaSousCategorie.map((x, i) => {
          if (x._id === this.LeCours._id) {
            this.LesCoursDeLaSousCategorie.splice(i, 1);
          }
        });
        console.log('LesCoursDeLaSousCategorie ==>>', this.LesCoursDeLaSousCategorie);
      });
      if (this.getCurrentUser()._id === this.LeCours.user._id) {
        this.classeProvider.getClasseByUser(this.LeCours.user._id).then((list) => {
          this.listClasseUser = list;
          if (this.listClasseUser.length === 0) {
            console.error('Liste Vide');
          } else {
            console.log('Les Classes du prof', this.listClasseUser);
            for (let i = 0; i < this.listClasseUser.length; i++) {
              for (let j = 0; j < this.listClasseUser[i].length; j++) {
                if (this.listClasseUsers.length == 0) {
                  this.listClasseUsers.push(this.listClasseUser[i][j].etablissement);
                } else {
                  if (!this.verify(this.listClasseUsers, this.listClasseUser[i][j].etablissement._id)) {
                    this.listClasseUsers.push(this.listClasseUser[i][j].etablissement);
                  }
                }
              }
            }
            var l;
            for (let k = 0; k < this.listClasseUsers.length; k++) {
              l = 0;
              var userClass = {};
              for (let i = 0; i < this.listClasseUser.length; i++) {
                for (let j = 0; j < this.listClasseUser[i].length; j++) {
                  if (this.verif(this.listClasseUsers[k], this.listClasseUser[i][j].etablissement._id)) {
                    userClass[`${l}`] = this.listClasseUser[i][j];
                    l++;
                  }
                }
              }
              this.listClasseUsers[k].classe = userClass;
            }
            console.log('Les Classes du profss', this.listClasseUsers);
          }
        })
      }

    }, 1000);

  }

  // verifie les case à cocher pour les classes du cours
  checkIfClasseMustBeChecked(classe) {
    this.mustChecked = false
    this.lesClasseDuCours.map((x) => {
      if (x._id === classe) {
        this.mustChecked = true
      }
    })
    return this.mustChecked
  }

  // TODO: regler bug ne pas suivre au premier click just apres suivre
  suivreClick() {

    var datetime = this.currentdate.getFullYear() + "-" +
      (this.currentdate.getMonth() + 1) + "-" +
      this.currentdate.getDate();
    this.suiviCoursProvider.addSuivi(this.$stateParams.idCours, this.getCurrentUser()._id, datetime);
    this.bool = true;


  }
  pasSuivreClick() {
    this.bool = false;
    this.suiviCoursProvider.delSuivi(this.etat[0]._id);
  }
  cacher() {
    if (this.bool == false && !this.isLoggedIn()) {
      return true;
    }
    if (this.bool == true) {
      return true;
    }
    // if(this.isLoggedIn){
    // return false;

    // }
    return false;
  }

  // champs editable pour le template
  doModify() {
    if (!this.modif) {
      this.modif = true
    } else {
      this.modif = false
    }

  }
  // verification du nbre d'heures du cours 
  verifyNumber() {
    if (this.LeCours.nbheures) {
      if (this.LeCours.nbheures < 1 || this.LeCours.nbheures > 99) {
        this.numberError = true;
      } else {
        this.numberError = false;
      }
    }
  }

  // update Cours
  updateCourse() {
    if (typeof this.LeCours.titre !== 'undefined') {
      this.$log.log('nouveau titre cours =>>', this.LeCours.titre)
      // Ici modifier que le titre
    } else {
      this.$log.log(`titre cours est ${typeof this.LeCours.titre} et ne doit pas etre modifié`)
    }

    if (typeof this.LeCours.nbheures !== 'undefined') {
      this.$log.log('nouvelle duree cours =>>', this.LeCours.nbheures)
      // Ici modifier que la durée
    } else {
      this.$log.log(`nbheures cours est ${typeof this.LeCours.nbheures} et ne doit pas etre modifié`)
    }

    // modifier la description si le cours a des chapitres
    if (typeof this.LeCours.contenu !== 'undefined') {
      if (typeof this.LeCours.description !== 'undefined') {
        this.$log.log('nouvelle description cours =>>', this.LeCours.description)
        // Ici modifier que la description
      } else {
        this.$log.log(`description cours est ${typeof this.LeCours.description} et ne doit pas etre modifiée`)
      }
    }

  }

  // au Click sur EXPLORER LE COURS
  exploreCourse() {
    if (this.firstPart) {
      this.firstPart = false
      this.secondPart = true
    }
  }
  // au click Sur le titre du cours rediriger a la page d'accueil et remetre les parametres par defaut
  titreClick() {
    if (this.secondPart) {
      this.secondPart = false
      this.firstPart = true
    }
  }
}

CourseSinglePageComponent.$inject = ["jsFonctions", "coursProvider", "$stateParams", "souscategorieProvider", "chapitreProvider", "userProvider", "suiviCoursProvider", "Auth", "$state", "$timeout", "classeProvider", "$log"];
export default angular.module('samaschoolApp.courseSinglePage', [uiRouter])
  .config(routes)
  .component('courseSinglePage', {
    template: require('./courseSinglePage.html'),
    controller: CourseSinglePageComponent,
    controllerAs: 'courseCtrl'
  })
  .name;
