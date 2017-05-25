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
  }
  selectedCycle(id) {
    this.$log.log('okk', id)
    if (id === 3) {
      this.superieur = true
    }
  }
  hasntFaculte() {
    this.$timeout(() => {
      this.hasFaculte = false
      this.hasDepartement = true
    }, 500)
  }
  hasntDepartement() {
    this.$timeout(() => {
      this.hasDepartement = false
      this.filiere = true
    }, 500)
  }
  selectedFiliere(filiere) {
    if (!this.selectedFilieres.includes(filiere)) {
      this.selectedFilieres.push(filiere)
    }
  }
  deleteSelectedFiliere(filiere){
    this.selectedFilieres.map((f, index) => {
      if(f._id === filiere._id){
        this.selectedFilieres.splice(index, 1)
      }
    })
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
