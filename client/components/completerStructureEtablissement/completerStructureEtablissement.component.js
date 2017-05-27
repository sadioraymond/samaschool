'use strict';
const angular = require('angular');

export class completerStructureEtablissementComponent {
  /*@ngInject*/
  constructor($log, $timeout) {
    this.$log = $log
    this.$timeout = $timeout
    this.hasFaculte = true
    this.selectedFilieres = []
  }
  $onInit() {
    // liste fictive des cycles
    this.cycles = [{
        _id: 1,
        libelle: 'primaire'
      },
      {
        _id: 2,
        libelle: 'secondaire'
      },
      {
        _id: 3,
        libelle: 'superieur'
      }
    ]
    // liste fictive des filieres
    this.filieres = [{
        _id: 1,
        libelle: 'Sciences-Eco'
      },
      {
        _id: 2,
        libelle: 'STIC'
      },
      {
        _id: 3,
        libelle: 'AGRO'
      }

    ]
    // liste fictive des classes pour cycle superieur
    this.LesClassesSuperieurs = [{
        _id: 1,
        libelle: '1ere année'
      },
      {
        _id: 2,
        libelle: '2em année'
      },
      {
        _id: 3,
        libelle: '3em année'
      },
      {
        _id: 4,
        libelle: '4em année'
      },
      {
        _id: 5,
        libelle: '5em année'
      }

    ]
    // liste fictive des Facultes
    this.facultes = [{
        _id: 1,
        libelle: 'Fac Sciences'
      },
      {
        _id: 2,
        libelle: 'Fac Lettres'
      },
      {
        _id: 3,
        libelle: 'Fac Gestion'
      }

    ]
  }
  // le choix de cycle
  selectedCycle(id) {
    this.$log.log('okk', id)
    if (id === 3) {
      this.superieur = true
    }
  }
  // choix ou selection de filieres
  selectedFiliere(filiere) {
    // si la filiere nest pas deja choisi
    if (!this.selectedFilieres.includes(filiere)) {
      // ajout de la filiere dans la liste des filieres choisies
      this.selectedFilieres.push(filiere)
    }
  }

  // deselection de filieres
  deleteSelectedFiliere(filiere) {
    this.selectedFilieres.map((f, index) => {
      if (f._id === filiere._id) {
        // suppresion de la filiere dans la liste
        this.selectedFilieres.splice(index, 1)
      }
    })
  }

  check(a, b) {
    this.$log.log('==>>', a, b, this.classeTab[a][b])
  }
  completerStructureEtablissement() {
    this.$log.log(this.classeTab)
    this.$log.log(this.classeTab)
    this.$log.log(this.classeTab[0])
    this.$log.log(this.classeTab[1])
  }
}

export default angular.module('samaschoolApp.completerStructureEtablissement', [])
  .component('completerStructureEtablissement', {
    template: require('./structure.html'),
    bindings: {
      message: '<'
    },
    controller: completerStructureEtablissementComponent
  })
  .name;
