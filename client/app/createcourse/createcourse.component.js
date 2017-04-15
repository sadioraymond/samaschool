'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './createcourse.routes';

export class CreatecourseComponent {
  /*@ngInject*/
  jsFonctions;
  souscategorieProvider;
  listSousCat;
  categorieProvider;
  listCat;
  coursProvider;
  listClass;
  classeProvider;
  firstPart = true;
  secondPart = false;
  thirdPart = false;
  fourthPart = false;
  selectedCount = 0;
  stateProgress = 0;
  LIs = [];
  obj = {};
  elementCard = [];
  listChap = [];
  objetCours = {};
  listSouscatBycat;
  idChap = [];
  titreChap = [];
  objectifChap = [];
  contenuChap = [];
  lienVideoChap = [];
  objChap = {};
  getcurrentUser;
  currentdate = new Date();
  datetime;
  activite;
  etabProf;
  categ = {
    id: "",
    libelle: ""
  };
  sCateg = {
    id: "",
    libelle: ""
  };
  listClasseUser;
  listClasseUsers = [];
  boolCoursAModifie = false;
  FichierAmodifier = [];
  constructor(jsFonctions, categorieProvider, souscategorieProvider, coursProvider, Auth, classeProvider, $stateParams, chapitreProvider, $state, $location) {
    this.$state = $state;
    this.params = $stateParams;
    this.coursProvider = coursProvider;
    this.jsFonctions = jsFonctions;
    this.categorieProvider = categorieProvider;
    this.souscategorieProvider = souscategorieProvider;
    this.classeProvider = classeProvider;
    this.chapitreProvider = chapitreProvider;
    this.message = 'Hello';
    this.firstPart = true;
    this.directpublish = false;
    this.getcurrentUser = Auth.getCurrentUserSync;
    this.datetime = this.currentdate.getFullYear() + "-" + (this.currentdate.getMonth() + 1) + "-" + this.currentdate.getDate();
    //check if the user is logged-in
    Auth.isLoggedIn(function (loggedIn) {
      if (!loggedIn) {
        //if the user is not logged  Redirect to login
        event.preventDefault();
        $location.path('/');
      }
    });
    console.log('param =>', this.params)
    // Preparation de l'objet cours a modifier si c'est le cas
    if (this.params.id !== "") {
      this.coursProvider.params = this.params.id;
      this.coursProvider.FindById(this.params.id).then(list => {
        this.coursAModifie = list;
        if (!this.coursAModifie._id) {
          console.log('Liste Vide ');
          this.$state.go("main");
          // setTimeout(() => {
          // $location.path(`/`);
          // }, 1000);
        } else {
          // console.log('Les  cat', this.listSousCat);
          console.info('le cours a modifié =>', this.coursAModifie);
          // $log.info('les sous cat ', this.listSousCat);
        }
      });
    }
    // this.jsFonctions.pluginScript();
    // this.jsFonctions.otherScript();
    // Editor options. 
    this.options = {
      language: 'en',
      allowedContent: true,
      entities: false
    };
  }
  getSousCatByCategorie(id) {
    this.souscategorieProvider.getSousCatByCategorie(id).then(list => {
      this.listSouscatBycat = list;
      console.log('Les Sous Catégories de la Categorie', this.listSouscatBycat);
    });
  }
  uploadImage() {
    console.log('1');
    this.coursProvider.uploadImage();
  }
  $onInit() {
    angular.element(document)
      .ready(() => {
        setTimeout(() => {
          this.jsFonctions.pluginScript();
          this.jsFonctions.otherScript();
          //   this.getClasseByUser(this.getcurrentUser()._id);
        }, 0);
      });
    // Pour la modification du cours crée => categorie et sous categorie
    setTimeout(() => {
      // console.log('cours a modifiee =>>', typeof this.coursAModifie._id)
      if ( this.params.id === '') {
        this.boolCoursAModifie = false;
        this.categ.id = "";
        this.categ.libelle = "selectionner le domaine";
        this.selectedId = false;
        this.sCateg.id = "";
        this.sCateg.libelle = "selectionner le sous domaine";
      } else {
        // 1ere partie
        this.souscategorieProvider.getSousCatById(this.coursAModifie.sous_categorie).then(list => {
          this.souscat = list;
          console.log('La Sous Catégorie', this.souscat);
          this.selectedId = true;
          this.selectedSCateg(this.souscat)
          // this.sCateg.id = this.souscat._id;
          // this.sCateg.libelle = this.souscat.libelle;
          this.categ.id = this.souscat.categorie._id;
          this.categ.libelle = this.souscat.categorie.libelle;
        });
        console.log(`L'ancienne Sous Catégorie`, this.sCateg);
        console.log(`L'ancienne Catégorie`, this.categ);
        this.boolCoursAModifie = true;
        // 2em partie
        this.titreCours = this.coursAModifie.titre;
        this.objectifCours = this.coursAModifie.description;
        this.nbh = this.coursAModifie.nbheures;
        var img = document.querySelector('#imageSection');
        var ur = `../../assets/upload/Cours/${this.coursAModifie.images}`;
        img.style.background = 'url(' + ur + ') center center no-repeat';
        img.style.backgroundSize = 'cover';
        this.image = this.coursAModifie.images;
        this.coursProvider.objetCours.url = ur;
        this.chapitreProvider.getChapitreByCours(this.coursAModifie._id).then(list => {
          this.chapitreCoursAModifie = list;
          if (this.chapitreCoursAModifie.length == 0) {
            // Cas ou il n'y a pas de chapitres dans le cours
            console.log('Liste Vide chap', this.chapitreCoursAModifie);
            this.nbChap = this.chapitreCoursAModifie.length;
            this.GenerateFields();
            this.lienVideoCours = this.coursAModifie.link;
            this.contenuCours = this.coursAModifie.contenu;
          } else {
            // Cas ou il ya des chapitres dans le cours
            console.info('les chapitre du cours a modifié', this.chapitreCoursAModifie, 'et nombre ', this.chapitreCoursAModifie.length);
            this.nbChap = this.chapitreCoursAModifie.length;
            this.GenerateFields();
            this.chapitreCoursAModifie.map((x, index) => {
              setTimeout(() => {
                this.idChap[index] = x._id;
                this.titreChap[index] = x.libelle;
                this.objectifChap[index] = x.objectif;
                console.log('kho');
                setTimeout(() => {
                  this.chapitreProvider.getFichierByChapitre(x._id).then(list => {
                    this.FichierAmodifier = list;
                    console.log('khol li', this.FichierAmodifier);
                    this.contenuChap[index] = this.FichierAmodifier[0].contenu;
                    this.lienVideoChap[index] = this.FichierAmodifier[0].link;
                  });
                }, 1000)

              }, 800);
            });

          }
        });
      }
    }, 1000);
    this.noPlan = false;
    this.categorieProvider.listCategorie().then(list => {
      this.listCat = list;
    });

    this.souscategorieProvider.listSousCategorie().then(list => {
      this.listSousCat = list;
    });

    var fichier = document.querySelector('#imageCours');
    var thi = this;
    fichier.addEventListener('change', inputfiles, false);

    function inputfiles(e) {
      propfichier(e.target.files);
      console.log('target', e.target.files);
    }

    function propfichier(arg) {
      var fichier = arg[0]
      if (fichier.type.indexOf('image') > -1) {
        var lecteur = new FileReader();
        lecteur.onload = function (e) {
          console.log('log', e);
          var img = document.querySelector('#imageSection');
          img.style.background = 'url(' + e.target.result + ') center center no-repeat';
          img.style.backgroundSize = 'cover';
          thi.image = e.target.result;
          thi.coursProvider.objetCours.images = fichier.type.split('/').pop();
          console.log('yow', thi.coursProvider.objetCours.images);
          // console.log('ki kan la', e.target.result);
        }
        lecteur.readAsDataURL(fichier);
        console.log('bandi bi', fichier);


      } else {
        alert('Ce n\'est pas une image');
      }
    }
  }
  nextClick() {
    console.log('User bi', this.getcurrentUser());

    if (this.titreChap && this.objectifChap && this.contenuChap && !this.numberError && this.stateProgress == 50 && this.firstPart != true && this.secondPart != true && this.nbChap) {
      console.log('next next');
      this.firstPart = false;
      this.secondPart = false;
      this.thirdPart = false;
      this.fourthPart = true;
      this.stateProgress = 75;
      this.styleProgress = {
        'width': `${this.stateProgress}%`,
        'visibility': 'visible',
        'animation-name': 'slideInLeft'
      }
      console.info(this.nbChap);
      this.objetCours.nbChap = this.nbChap;
      for (let c = 0; c < this.nbChap; c++) {
        this.titrech = this.titreChap[c];
        this.objectifch = this.objectifChap[c];
        this.contenuch = this.contenuChap[c];
        this.lienVideoch = this.lienVideoChap[c];
        this.objChap[`${c}`] = {
          'id_chap': this.idChap[c],
          'titre': this.titrech,
          'objectif': this.objectifch,
          'contenu': this.contenuch,
          'lienVideo': this.lienVideoch,
        };
      }
      this.objetCours.objChap = this.objChap;
      console.log('le cours ', this.objetCours);
      this.coursProvider.objetCours.tab = this.objetCours.objChap;
      this.coursProvider.objetCours.taille = this.nbChap;
    }
    if (this.lienVideoCours != "" && this.stateProgress == 50 && !this.firstPart && !this.secondPart) {
      this.firstPart = false;
      this.secondPart = false;
      this.thirdPart = false;
      this.fourthPart = true;
      this.stateProgress = 75;
      this.styleProgress = {
        'width': `${this.stateProgress}%`,
        'visibility': 'visible',
        'animation-name': 'slideInLeft'
      }
      this.objetCours.nbChap = this.nbChap;
      this.objetCours.detailscours = {
        'titrecours': this.titreCours,
        'objectifcours': this.objectifCours,
        'heure': this.nbh,
        'lien': this.lienVideoCours
      };
      this.coursProvider.objetCours.lienVideo = this.lienVideoCours;
      this.coursProvider.objetCours.contenuCours = this.contenuCours;
      console.log('le cours ', this.objetCours);

    }
    if (this.titreCours && this.objectifCours && !this.numberError && this.titreCours.length >= 3 && this.objectifCours.length >= 5 && this.stateProgress == 25 && this.firstPart != true) {
      console.log('next next');
      this.firstPart = false;
      this.secondPart = false;
      this.thirdPart = true;
      this.fourthPart = false;
      this.stateProgress = 50;
      this.styleProgress = {
        'width': `${this.stateProgress}%`,
        'visibility': 'visible',
        'animation-name': 'slideInLeft'
      }
      this.objetCours.detailscours = {
        'titrecours': this.titreCours,
        'objectifcours': this.objectifCours,
        'heure': this.nbh
      };
      console.log('le cours ', this.objetCours);
      this.coursProvider.objetCours.titre = this.objetCours.detailscours.titrecours;
      this.coursProvider.objetCours.description = this.objetCours.detailscours.objectifcours;
      this.coursProvider.objetCours.nbheures = this.objetCours.detailscours.heure;
    }
    // first step
    if (this.selectedIdsCat && this.stateProgress === 0) {
      this.firstPart = false;
      this.secondPart = true;
      this.thirdPart = false;
      this.fourthPart = false;
      this.stateProgress = 25;
      this.styleProgress = {
        'width': `${this.stateProgress}%`,
        'visibility': 'visible',
        'animation-name': 'slideInLeft'
      }
      this.objetCours.sousCategorie = this.sCateg.id;
      console.log(this.objetCours.sousCategorie);
      this.coursProvider.objetCours.sous_cat = this.objetCours.sousCategorie;
    } else {
      console.log('cant go next => cat souscat <=');
    }

  }
  prevClick() {
    if (this.stateProgress === 25) {
      this.firstPart = true;
      this.thirdPart = false;
      this.secondPart = false;
      this.fourthPart = false;
      this.stateProgress = 0;
      this.styleProgress = {
        'width': `${this.stateProgress}%`,
        'visibility': 'visible',
        'animation-name': 'slideInLeft'
      }
      this.selectedCount = 1;
      return;
    }
    if (this.stateProgress === 50) {
      this.firstPart = false;
      this.thirdPart = false;
      this.secondPart = true;
      this.fourthPart = false;
      this.stateProgress = 25;
      this.styleProgress = {
        'width': `${this.stateProgress}%`,
        'visibility': 'visible',
        'animation-name': 'slideInLeft'
      }
      return;
    }
    if (this.stateProgress === 75) {
      this.firstPart = false;
      this.thirdPart = true;
      this.secondPart = false;
      this.fourthPart = false;
      this.stateProgress = 50;
      this.styleProgress = {
        'width': `${this.stateProgress}%`,
        'visibility': 'visible',
        'animation-name': 'slideInLeft'
      }
      return;
    }
  }
  addCour() {

    /* this.coursProvider.ajoutcours2(this.objetCours.detailscours.titrecours, this.objetCours.detailscours.objectifcours, this.datetime, this.objetCours.sousCategorie, this.getcurrentUser()._id, this.objetCours.detailscours.heure, this.objetCours.objChap, this.nbChap, this.activite);*/
    //  window.location.reload();
  }
  addBrouillon() {
    console.log('Date bi', this.datetime);
    this.activite = false;
    this.coursProvider.ajoutCours2(this.objetCours.detailscours.titrecours, this.objetCours.detailscours.objectifcours, this.datetime, this.objetCours.sousCategorie, this.getcurrentUser()._id, this.objetCours.detailscours.heure, this.objetCours.objChap, this.nbChap, this.activite);
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
    this.noPlan = false;
    if (this.nbChap == 0) {
      this.listChap = [];
      this.noPlan = true;
    } else if (this.nbChap < 0 || this.nbChap > 10) {
      this.listChap = [];
      this.numberChapError = true;
    } else {
      this.noPlan = false;
      this.numberChapError = false;
      this.listChap = [];
      for (let i = 0; i < this.nbChap; i++) {
        this.listChap.push(i);
        console.log(this.listChap)
      }
    }
  }
  delChap(indexTab) {
    this.listChap.splice(indexTab, 1);
    console.log(this.listChap)
  }
  publish() {
    this.coursProvider.createdCourse = this.objetCours;
    console.log('course added !!!')
  }
  directPublish() {
    this.directpublish = true;
  }
  // pour dropdown des Categories
  selectedCateg(categorie) {
    console.log(categorie)
    console.log(this.categ)
    this.sCateg.id = "";
    this.sCateg.libelle = "selectionner le sous domaine";
    this.selectedIdsCat = false;
    this.categ.id = categorie._id;
    this.categ.libelle = categorie.libelle;
    this.selectedId = true;
    console.log(this.categ);
    this.getSousCatByCategorie(this.categ.id);
  }
  selectedSCateg(sousCategorie) {
    this.sCateg.id = sousCategorie._id;
    this.sCateg.libelle = sousCategorie.libelle;
    this.selectedIdsCat = true;
  }

  ouvreDialogue() {
    $('#imageCours').click();
  }
}
export function ModalDemoCtrl($uibModal, $log, $document) {
  var $ctrl = this;
  $ctrl.items = ['item1', 'item2', 'item3'];

  $ctrl.animationsEnabled = true;

  $ctrl.open = function (size, parentSelector) {
    var parentElem = parentSelector ?
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      appendTo: parentElem,
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
}
export function ModalInstanceCtrl($uibModalInstance, items, userProvider, classeProvider, Auth, coursProvider) {

  var $ctrl = this;
  $ctrl.items = items;
  $ctrl.selected = {
    item: $ctrl.items[0]
  };
  userProvider.varbi = $uibModalInstance;
  //   pour les classes du prof
  $ctrl.currentdate = new Date();
  $ctrl.listClasseUser;
  $ctrl.listClasseUsers = [];
  $ctrl.selectedClass = [];
  $ctrl.getcurrentUser = Auth.getCurrentUserSync;
  $ctrl.datetime = $ctrl.currentdate.getFullYear() + "-" + ($ctrl.currentdate.getMonth() + 1) + "-" + $ctrl.currentdate.getDate();
  $ctrl.activite = true;
  $ctrl.selection = [];
  coursProvider.objetCours.date = $ctrl.datetime;
  coursProvider.objetCours.user = $ctrl.getcurrentUser()._id;
  coursProvider.objetCours.act = $ctrl.activite;
  $ctrl.toggleSelection = function toggleSelection(value) {
    var idx = $ctrl.selection.indexOf(value); // is currently selected

    if (idx > -1) {
      $ctrl.selection.splice(idx, 1);
    } // is newly selected
    else {
      $ctrl.selection.push(value);
    }
  };
  $ctrl.ok = function () {
    //soumission du formulaire
    $ctrl.parametre = coursProvider.objetCours.titre + '-' + Date.now() + '.' + coursProvider.objetCours.images;
    document.querySelector("#createcourseform").action = `/createcourse/${$ctrl.parametre}`;
    document.querySelector('#createcourseform').submit();
    $uibModalInstance.close($ctrl.selected.item);
    if (!coursProvider.params) {
      if (coursProvider.objetCours.tab) {
        console.log('Amoul dara', $ctrl.getcurrentUser()._id);
        coursProvider.ajoutCours2(coursProvider.objetCours.titre, coursProvider.objetCours.description, coursProvider.objetCours.date, coursProvider.objetCours.sous_cat, $ctrl.getcurrentUser()._id, coursProvider.objetCours.nbheures, coursProvider.objetCours.tab, coursProvider.objetCours.taille, $ctrl.activite, $ctrl.selection, $ctrl.parametre);
        console.log('khol li', coursProvider.objetCours.taille);
        console.log('verif', $ctrl.selection);
      } else {
        console.log('Amoul dara', $ctrl.getcurrentUser()._id);
        console.log('khol li ni', coursProvider.objetCours.lienVideo);
        console.log('khol li ni 1', coursProvider.objetCours.contenuCours);
        coursProvider.ajoutCours(coursProvider.objetCours.titre, coursProvider.objetCours.description, coursProvider.objetCours.date, coursProvider.objetCours.sous_cat, $ctrl.getcurrentUser()._id, coursProvider.objetCours.nbheures, $ctrl.activite, $ctrl.selection, coursProvider.objetCours.lienVideo, coursProvider.objetCours.contenuCours, $ctrl.parametre);
      }
    } else {
      console.log('Teste la wone');
      console.log('khol ko', coursProvider.params);
      console.log('li lane la', coursProvider.objetCours);
      console.log('url bi', this.coursProvider.objetCours.url);
      fs.unlink(this.coursProvider.objetCours.url);
      coursProvider.modifierCours(coursProvider.params, coursProvider.objetCours.titre, coursProvider.objetCours.description, coursProvider.objetCours.date, coursProvider.objetCours.sous_cat, $ctrl.getcurrentUser._id, coursProvider.objetCours.nbheures, $ctrl.activite, $ctrl.parametre);
      coursProvider.modifierChapitre(coursProvider.objetCours.tab, coursProvider.objetCours.taille);
      // console.log('waw', coursProvider.objetCours.tab);
    }



  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };

  $ctrl.verify = function (tab, element) {
    for (let i = 0; i < tab.length; i++) {
      if (tab[i]._id == element) {
        return true;
      }
    }
    return false;
  }

  $ctrl.verif = function (tab, element) {
    if (tab._id == element) {
      return true;
    }
    return false;
  }

  $ctrl.getClasseByUser = function (user) {
    console.log('etape 1')
    console.log(user)
    classeProvider.getClasseByUser(user).then(list => {
      console.log('etape 2')
      $ctrl.listClasseUser = list;
      if ($ctrl.listClasseUser.length == 0) {
        console.log('Liste Vide');
      } else {
        console.log('Les Classes du prof', $ctrl.listClasseUser);
      }
      for (let i = 0; i < $ctrl.listClasseUser.length; i++) {
        for (let j = 0; j < $ctrl.listClasseUser[i].length; j++) {
          if ($ctrl.listClasseUsers.length == 0) {
            $ctrl.listClasseUsers.push($ctrl.listClasseUser[i][j].etablissement);
          } else {
            if (!$ctrl.verify($ctrl.listClasseUsers, $ctrl.listClasseUser[i][j].etablissement._id)) {
              $ctrl.listClasseUsers.push($ctrl.listClasseUser[i][j].etablissement);
            }
          }
        }
      }
      var l;
      for (let k = 0; k < $ctrl.listClasseUsers.length; k++) {
        l = 0;
        var userClass = {};
        for (let i = 0; i < $ctrl.listClasseUser.length; i++) {
          for (let j = 0; j < $ctrl.listClasseUser[i].length; j++) {
            if ($ctrl.verif($ctrl.listClasseUsers[k], $ctrl.listClasseUser[i][j].etablissement._id)) {
              userClass[`${l}`] = $ctrl.listClasseUser[i][j].classe;
              l++;
            }
          }
        }
        $ctrl.listClasseUsers[k].classe = userClass;
      }
      console.log('Les Classes du profss', $ctrl.listClasseUsers);
    });
  }
}
CreatecourseComponent.$inject = ["jsFonctions", "categorieProvider", "souscategorieProvider", "coursProvider", "Auth", "classeProvider", "$stateParams", "chapitreProvider", "$state", "$location"];
ModalDemoCtrl.$inject = ["$uibModal", "$log", "$document"];
ModalInstanceCtrl.$inject = ["$uibModalInstance", "items", "userProvider", "classeProvider", "Auth", "coursProvider"];
export default angular.module('samaschoolApp.createcourse', [uiRouter])
  .config(routes)
  .component('createcourse', {
    template: require('./createcourse.html'),
    controller: CreatecourseComponent,
    controllerAs: 'createcourseCtrl'
  })
  .controller('ModalDemoCtrl', ModalDemoCtrl)
  .controller('ModalInstanceCtrl', ModalInstanceCtrl)
  .component('modalComponent', {
    templateUrl: 'myModalContent.html',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: function () {
      var $ctrl = this;

      $ctrl.$onInit = function () {
        $ctrl.items = $ctrl.resolve.items;
        $ctrl.selected = {
          item: $ctrl.items[0]
        };
      };

      $ctrl.ok = function () {
        $ctrl.close({
          $value: $ctrl.selected.item
        });
      };

      $ctrl.cancel = function () {
        $ctrl.dismiss({
          $value: 'cancel'
        });
      };
    }
  })
  .filter('trustAsResourceUrl', ['$sce', function ($sce) {
    return function (val) {
      return $sce.trustAsResourceUrl(val);
    };
  }])
  .name;
