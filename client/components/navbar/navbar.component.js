'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';
import SignupController from '../../app/account/signup/signup.controller';

export class NavbarComponent {
  menu = [{
    title: 'Home',
    state: 'main'
  }];
  isLoggedIn: Function;
  isAdmin: Function;
  getCurrentUser: Function;
  isCollapsed = true;
  msg = false;
  test = false;
  userProvider;
  fegn;
  constructor(Auth, userProvider, $state) {
    'ngInject';
    this.$state = $state
    this.isLoggedIn = Auth.isLoggedInSync;
    this.isAdmin = Auth.isAdminSync;
    this.getCurrentUser = Auth.getCurrentUserSync;
    this.userProvider = userProvider;
  }

  $onInit() {}
  // go to top courses
  goTopCours() {
    setTimeout(() => {
      window.location.href = "#topCours"
    }, 700);
  }
  goAllCourses() {
    this.$state.go('coursesPages')
    setTimeout(() => {
      window.location.href = "#allCourses"
    }, 2000);
  }
  goTopEtablissements() {
    setTimeout(() => {
      window.location.href = "#topEtablissement"
    }, 1000);
  }
  goTopProfs() {
    setTimeout(() => {
      window.location.href = "#topProf"
    }, 1000);
  }
  showMsg() {
    this.test = true;
    // document.querySelector('#topbar_msg').click();
    // angular.element('#topbar_msg').triggerHandler('click');
    return this.userProvider.msg;
  }
  con() {
    // this.fegn = true;
    $('#topbar_msg').fadeOut(6000);
    // return this.fegn;
  }
  closeMsg() {
    console.log('iiiiiiiiiiiiiiiii')
    if (this.userProvider.msg) {
      setTimeout(() => {
        this.test = false;
      }, 2000);
    } else {
      console.log('ttttttt')
    }
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

export function ModalInstanceCtrl($uibModalInstance, items, userProvider) {
  var $ctrl = this;
  $ctrl.items = items;
  $ctrl.selected = {
    item: $ctrl.items[0]
  };
  userProvider.varbi = $uibModalInstance;
  $ctrl.ok = function () {
    $uibModalInstance.close($ctrl.selected.item);
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}

ModalDemoCtrl.$inject = ["$uibModal", "$log", "$document"];
ModalInstanceCtrl.$inject = ["$uibModalInstance", "items", "userProvider"];
export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent
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
  .name;
