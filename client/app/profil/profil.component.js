'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './profil.routes';

export class ProfilComponent {
  // les services à injecter
  jsFonctions;
  sousCategorieProvider;
  categorieProvider;
  etablissementProvider;
  suiviCoursProvider;

  // Les variables
  listCat;
  selectedCount = 0;
  stateProgress = 0;
  listSousCat;
  LIs = [];
  obj = {};
  elementCard = [];
  listChap = [];
  objetCours = {};
  listSouscatBycat;
  titreChap = [];
  objChap = [];
  getCurrentUser: Function;
  isLoggedIn: Function;
  LesEtabIncrit;
  LesEtabSuivi;
  dateNaissance: Date
  currentdate = new Date();
  //les booleen pour cacher ou montrer des div
  profil = true;
  contact = true;
  etablissement = false;
  course = false;
  createCourse = false;
  createCourseLink = false;
  firstPart = true;
  secondPart = false;
  thirdPart = false;
  fourthPart = false;
  lesCoursSuivis;
  userData = {};
  permissionProfil: boolean;

  privateLink: boolean;
  im;
  ima;
  imag;
  categ = {
    id: "",
    libelle: ""
  };
  multerProvider;
  userbi;
  /*@ngInject*/
  constructor(jsFonctions, categorieProvider, souscategorieProvider, Auth, etablissementProvider, suiviCoursProvider, coursProvider, userProvider, $stateParams, $state, $location, ouvreDialogProvider, $filter, $timeout, $log, multerProvider, preferenceProvider) {
    this.$log = $log
    this.$stateParams = $stateParams;
    this.$state = $state;
    this.Auth = Auth;
    this.$filter = $filter
    this.$timeout = $timeout
    this.jsFonctions = jsFonctions;
    this.sousCategorieProvider = souscategorieProvider;
    this.categorieProvider = categorieProvider;
    this.getCurrentUser = Auth.getCurrentUserSync;
    this.isLoggedIn = Auth.isLoggedInSync;
    this.etablissementProvider = etablissementProvider;
    this.suiviCoursProvider = suiviCoursProvider;
    this.coursProvider = coursProvider;
    this.userProvider = userProvider;
    console.log('param ==>>', this.$stateParams);
    this.ouvreDialogProvider = ouvreDialogProvider;
    this.jsFonctions.pluginScript();
    this.jsFonctions.otherScript();
    this.multerProvider = multerProvider;
    this.preferenceProvider = preferenceProvider;
  }
  getSousCatByCategorie(id) {
    this.sousCategorieProvider.getSousCatByCategorie(id).then(list => {
      this.listSouscatBycat = list;
      console.log('Les Sous Catégories de la Categorie', this.listSouscatBycat);

    });
  }
  getrestPref(id){
    this.preferenceProvider.getRestPreferenceUser(id).then(list => {
        console.log("rest", list);
      })
  }
  getuserbyusername(id){
    this.userProvider.findByUsername(id).then(list => {
      this.userbi=list[0];
      this.getrestPref(this.userbi._id);
      
    })
  }
  $onInit() {
    if (this.coursProvider.reload) {
      window.location.reload();
      this.coursProvider.reload = false;
    }
    var fichier = document.querySelector('#selectPP');
    fichier.addEventListener('change', (e) => {
      this.im = this.ouvreDialogProvider.uploadFile(e, "imgTag");
      this.ima = this.im.type.split('/').pop();
      this.imag = Date.now() + '.' + this.ima;
      console.log('li ni', this.ima);
      console.log('id image', this.userDatas[0]._id);
      console.log('nom image', this.imag);
      this.multerProvider.addImage("#editprofilform", '#editprofilform', `/user/${this.imag}`);
      if (this.userDatas[0].images !== "ImageParDerfautPourLesUsers.png") {
        console.log('bien');
        this.userProvider.deleteFichier(this.userDatas[0].images);
      }
      this.userProvider.changeImages(this.userDatas[0]._id, this.imag);
    }, false);
    angular.element(document)
      .ready(() => {
        this.$timeout(() => {
          this.jsFonctions.pluginScript();
          this.jsFonctions.otherScript();
        }, 0);
      });
    // donnees du user de la page actuelle
    this.userProvider.findByUsername(this.$stateParams.username).then(list => {
      this.userDatas = list;
      if (this.userDatas.length == 0) {
        console.log('Liste Vide');
        this.userData = "";
        this.$state.go('main');
      } else {
        console.log('La page du user ==>>', this.userDatas[0]);
        this.userData = this.userDatas[0]
        console.info("date bi ", this.$filter('date')(this.userData.dateNaiss, "dd/MM/yyyy"))
        this.$timeout(() => {
          this.annee = ""
          this.annee = this.$filter('date')(this.userData.dateNaiss, "dd/MM/yyyy")
          // console.error('d', this.annee)
          this.dateNaissance = new Date(`${this.annee}`)
        }, 700)
        // le user courant ??
        if (this.userData.username === this.getCurrentUser().username) {
          this.privateLink = true;
        } else {
          this.privateLink = false;
        }
        // Liste des cours suivis par le User
        this.suiviCoursProvider.getCoursByUser(this.userData._id).then(list => {
          this.lesCoursSuivis = list;
          console.log('les cours tout court', list);
        });
        //Liste des Etablissements où le User est inscrit au chargement de la page
        this.etablissementProvider.getEtabInscritByUser(this.userData._id).then(list => {
          this.LesEtabIncrit = list;
          console.log('les etablissements', list);
        }, error => {
          console.info('les erreurs getEtabByUser ==>', error);
        });

        //Liste des Etablissements suivi par le user au chargement de la page
        this.etablissementProvider.getEtabSuiviByUser(this.userData._id).then(list => {
          this.LesEtabSuivi = list;
          console.log('les etablissements suivi', list);
        }, error => {
          console.info('les erreurs getEtabByUser ==>', error);
        });

        // voir le type de profil du user
        this.$timeout(() => {
          this.userProvider.isProf(this.userData._id).then(user => {
            console.log("user prof ==", user)
            this.isprof = user
            if (this.isprof) {
              // Liste des cours crées par le profil
              this.coursProvider.getCoursByProf(this.userData._id).then(list => {
                this.lesCoursCrees = list;
                console.log('les cours crees', this.lesCoursCrees);
              });
            }
          }, error => {
            console.log("isProf", error)
          })
          this.userProvider.isEtudiant(this.userData._id).then(user => {
            console.log("user etudiant ==", user)
            this.isetudiant = user
          }, error => {
            console.log("isetudiant", error)
          })
        }, 500);
        // setTimeout(() => {

        //   if (this.isprof) {
        //     // Liste des cours crées par le profil
        //     this.coursProvider.getCoursByProf(this.userData._id).then(list => {
        //       this.lesCoursCrees = list;
        //       console.log('les cours crees', this.lesCoursCrees);
        //     });
        //   }
        // }, 500);

      }
    });
    // Liste des categories au chargement de la page
    this.categorieProvider.listCategorie().then(list => {
      this.listCat = list;
      if (this.listCat.length == 0) {
        console.log('Liste Vide');
      } else {
        console.log('Les Categories', this.listCat);

      }
    });

    // RAYMOND
     // avoir les preferences restantes
     console.log('param yi', this.$stateParams);
     if(this.$stateParams.username !== ""){
      this.getuserbyusername(this.$stateParams.username);
     }

    // Liste des sous catégories au chargement de la page
    this.sousCategorieProvider.listSousCategorie().then(list => {
      this.listSousCat = list;
      if (this.listSousCat.length == 0) {
        console.log('Liste Vide');
      } else {
        // console.log('Les  cat', this.listSousCat);
        console.info('les Sous catégories ', this.listSousCat);
        // $log.info('les sous cat ', this.listSousCat);
      }
    });

   

  }

  // 
  showDialog() {
    $('#selectPP').click();
  }

  doActive(e) {
    this.LIs = document.querySelectorAll('#ss_sidebar > li');
    for (var i = 0; i < this.LIs.length; i++) {
      if (this.LIs[i].className == 'active') {
        this.LIs[i].className = '';
      }
    }
    var LI = $("." + e.target.className).parent('li')[0];
    $(LI).addClass('active');
  }
  etablissementClick() {
    this.createCourse = false;
    this.createCourseLink = false;
    this.profil = false;
    this.contact = false;
    this.course = false;
    this.etablissement = true;
    window.scrollTo(0, window.scrollY + 1);

    // console.log(window.scrollY);
  }
  profilClick() {
    this.createCourse = false;
    this.createCourseLink = false;
    this.etablissement = false;
    this.course = false;
    this.profil = true;
    this.contact = true;
  }
  courseClick() {
    this.createCourse = false;
    this.createCourseLink = true;
    this.etablissement = false;
    this.profil = false;
    this.contact = false;
    this.course = true;
  }
  createCourseClick() {
    // this.createCourseLink = false;
    this.etablissement = false;
    this.profil = false;
    this.contact = false;
    this.course = false;
    this.createCourse = true;

  }
  sCatClick(e) {
    // listClass = e.target.className;
    // console.log(e.target.className)
    // if (listClass.includes('withcircle')) {
    //   $(`#${e.target.getAttribute('id')}`).removeClass('withcircle');
    //   this.selectedCount = this.selectedCount + 1;
    // } else {
    //   $(`#${e.target.getAttribute('id')}`).addClass('withcircle');
    //   this.selectedCount = this.selectedCount - 1;
    // }
    // console.log(this.selectedCount)
  }
  selectedVal() {
    this.getSousCatByCategorie(this.selectedId);
    // this.showSCat = true;
  }
  verifyNumber() {
    if (this.nbh) {
      if (this.nbh < 1 || this.nbh > 99) {
        this.numberError = true;
      } else {
        this.numberError = false;
      }
    }
  }
  verifyNumberChap() {
    if (this.nbChap) {
      if (this.nbChap < 1 || this.nbChap > 20) {
        this.numberChapError = true;
      } else {
        this.numberChapError = false;
      }
    }
  }
  GenerateFields() {
    if (this.nbChap) {
      if (this.nbChap < 1 || this.nbChap > 20) {
        this.numberChapError = true;
      } else {
        this.numberChapError = false;
        this.listChap = [];
        for (let i = 0; i < this.nbChap; i++) {
          this.listChap.push(i);
          console.log(this.listChap)
        }
      }
    }
  }
  delChap(indexTab) {
    this.listChap.splice(indexTab, 1);
    console.log(this.listChap)
  }
  // pour dropdown des Categories
  selectedCateg(categorie) {
    console.log(categorie)
    console.log(this.categ)
    this.selectedIdsCat = false;
    this.categ.id = categorie._id;
    this.categ.libelle = categorie.libelle;
    this.selectedId = true;
    console.log(this.categ);
    this.getSousCatByCategorie(this.categ.id);

  }

  // enregistrement lors du click sur le bouton pour completer le profil
  completerClick() {
    // variable permettant d'avoir la date d'aujord'hui pour l'ajout de preference
    var datetime = this.currentdate.getFullYear() + "-" +
      (this.currentdate.getMonth() + 1) + "-" +
      this.currentdate.getDate();

   
    this.userData.dateNaiss = new Date(this.userData.dateNaissance)

    // permet de parcourrir la liste de sous categorie apres click de la catégorie
    for (var i = 0; i < this.listSouscatBycat.length; i++) {
      var scatBi = this.listSouscatBycat[i];
      this.preferenceProvider.addPref(this.getCurrentUser()._id, scatBi._id, datetime);

    }

    this.userProvider.completerProfil(this.userData._id, this.userData.facebook, this.userData.twitter, this.userData.linkedIn, this.userData.google, this.dateNaissance, this.userData.bio).then((msg) => {
      console.info("msg", msg)
      window.location.reload();
    }, (error) => {
      console.info("error", error)
    })

    // FIXER TODO : convertir la date de mongo en date normale
  }
  // montrer le formulaire pour compéter profil
  montrerForm() {
    this.formCompleterIns = true;
  }
  // cacher le formulaire pour compéter profil
  cacherForm() {
    this.formCompleterIns = false;
  }
}

ProfilComponent.$inject = ["jsFonctions", "categorieProvider", "souscategorieProvider", "Auth", "etablissementProvider", "suiviCoursProvider", "coursProvider", "userProvider", "$stateParams", "$state", "$location", "ouvreDialogProvider", "$filter", "$timeout", "$log", "multerProvider", "preferenceProvider"];
export default angular.module('samaschoolApp.profil', [uiRouter])
  .config(routes)
  .component('profil', {
    template: require('./profil.html'),
    controller: ProfilComponent,
    controllerAs: 'profilCtrl'
  })
  .name;
