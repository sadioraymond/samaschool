'use strict';
const angular = require('angular');

export class coursesComponent {
  /*@ngInject*/
  jsFonctions;
  coursProvider;
  LesCoursRecent;
  lit = [];
  obj1 = {
    "a": 12,
    'b': 11
  };
  obj2 = {};
  obj3 = {};
  obj4 = {};
  obj5 = {};
  obj6 = {};
  obj7 = {};
  obj8 = {};
  obj9 = {};
  obj10 = {};
  obj11 = {};
  obj12 = {};
  obj13 = {};
  tableauCours = [];
  constructor(jsFonctions, coursProvider, $filter, $timeout, $state) {
    this.LesCoursRecent = [];
    this.message = 'World';
    this.$state = $state
    this.jsFonctions = jsFonctions;
    this.coursProvider = coursProvider;
    this.$filter = $filter;
    this.$timeout = $timeout

  }

  $onInit() {
    angular.element(document)
      .ready(() => {
        // setTimeout(() => {
        //   this.jsFonctions.pluginScript();
        //   this.jsFonctions.otherScript();
        //   this.getClasseByUser(this.getcurrentUser()._id);
        // }, 0);

        // liste des cours avec, pour chaque, leur nombre de suivi
        this.coursProvider.listCours().then(list => {
          list.map(x => {
            this.coursProvider.getSuividuCours(x._id).then(nbsuivi => {
              x.nbSuivi = nbsuivi
            })
          })
          this.LesCours = list;
          console.info('LesCours =>', this.LesCours);
        });
        this.$timeout(() => {
          // filtre (cours plus suivi) de la liste des cours 
          this.lesCoursLesplusSuivis = this.$filter('orderBy')(this.LesCours, '-nbSuivi')
          console.info('LesCours suivi', this.lesCoursLesplusSuivis);
        }, 1000);
      });
  }
  // click sous Categorie dans la liste recents cours
  viewScat(scat) {
    console.log(scat)
    this.$state.go('coursesPages')
    this.coursProvider.scategorie = scat
  }

  viderScat() {
    this.coursProvider.scategorie = null;
  }
}
coursesComponent.$inject = ["jsFonctions", "coursProvider", "$filter", "$timeout", "$state"];
export default angular.module('samaschoolApp.courses', [])
  .component('courses', {
    // template: '<h1>Hello {{ $ctrl.message }}</h1>',
    template: require('./courses.html'),
    bindings: {
      message: '<'
    },
    controller: coursesComponent,
    controllerAs: 'vm'
  })
  .name;
