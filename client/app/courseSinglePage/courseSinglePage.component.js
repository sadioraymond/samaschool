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
  // pour mode modification ou non
  inModif = false
  // pour changer le bouton
  bool;
  // 
  lesSousCategories
  categ = {}
  scateg = {}
  /*@ngInject*/
  constructor(jsFonctions, coursProvider, $stateParams, souscategorieProvider, chapitreProvider, userProvider, suiviCoursProvider, Auth, $state, $timeout, classeProvider, $log, ouvreDialogProvider, categorieProvider) {
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
    this.ouvreDialogProvider = ouvreDialogProvider
    this.categorieProvider = categorieProvider
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



      // creation de categ et scateg
      this.scateg.id = this.LeCours.sous_categorie._id
      this.scateg.libelle = this.LeCours.sous_categorie.libelle

      this.categ.id = this.LeCours.sous_categorie.categorie
      this.categ.libelle = `libelle de l'id ${this.LeCours.sous_categorie.categorie}`

      this.souscategorieProvider.getSousCatByCategorie(this.scateg.id).then(list => {
        this.lesSousCategories = list;
      })

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

    // Avoir toutes les categories au chargement de la page
    this.categorieProvider.listCategorie().then(list => {
      this.lesCategories = list;
    })
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

  // mode modification ou non en live 
  doModify() {
    if (!this.inModif) {
      this.inModif = true
    } else {
      this.inModif = false
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
    if (typeof this.LeCours.titre !== 'undefined' && typeof this.LeCours.nbheures !== 'undefined' && typeof this.LeCours.contenu !== 'undefined', this.scateg.id !== 0) {
      this.$log.log('nouveau titre cours =>>', this.LeCours.titre)
      this.$log.log('nouvelle duree cours =>>', this.LeCours.nbheures)
      this.$log.log('nouvelle description cours =>>', this.LeCours.description)
      this.$log.log('nouvelle scat cours =>>', this.scateg.id)
      // Ici modifier que le titre
    } else {
      this.$log.info('titre cours =>>', this.LeCours.titre)
      this.$log.info('duree cours =>>', this.LeCours.nbheures)
      this.$log.info('description cours =>>', this.LeCours.description)
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

  showDialog() {
    $('#coursePoster').click();

  }
  // permet d'avoir la liste des sous categories pour une categorie
  selectedCategorie() {
    this.souscategorieProvider.getSousCatByCategorie(this.selectedId).then(list => {
      this.lesSousCategories = list;
    })
    this.sousCatVisible = true;
  }
  // permet d'avoir la liste des sous categories pour une categorie
  selectedCateg(categorie) {
    this.categ.id = categorie._id;
    this.categ.libelle = categorie.libelle;
    console.log(this.categ)
    this.souscategorieProvider.getSousCatByCategorie(this.categ.id).then(list => {
      this.lesSousCategories = list;
    })
    this.scateg.id = 0;
    this.scateg.libelle = "Domaine";
  }
  // filtre si une sous categorie est clickés
  sousCategCourse(scat) {
    this.coursProvider.getCoursBySousCat(scat._id).then(list => {
      this.lesCoursBySousCat = list;
      this.choixList = this.lesCoursBySousCat;
    });
    this.scateg.id = scat._id;
    this.scateg.libelle = scat.libelle;
    console.log(this.scateg)
  }
}

CourseSinglePageComponent.$inject = ["jsFonctions", "coursProvider", "$stateParams", "souscategorieProvider", "chapitreProvider", "userProvider", "suiviCoursProvider", "Auth", "$state", "$timeout", "classeProvider", "$log", "ouvreDialogProvider", "categorieProvider"];
export default angular.module('samaschoolApp.courseSinglePage', [uiRouter])
  .config(routes)
  .component('courseSinglePage', {
    template: require('./courseSinglePage.html'),
    controller: CourseSinglePageComponent,
    controllerAs: 'courseCtrl'
  })
  .name;
