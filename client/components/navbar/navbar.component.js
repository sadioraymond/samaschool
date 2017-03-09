'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class NavbarComponent {
  menu = [{
    title: 'Home',
    state: 'main'
  }];
  isLoggedIn: Function;
  isAdmin: Function;
  getCurrentUser: Function;
  isCollapsed = true;

  constructor(Auth) {
    'ngInject';

    this.isLoggedIn = Auth.isLoggedInSync;
    this.isAdmin = Auth.isAdminSync;
    this.getCurrentUser = Auth.getCurrentUserSync;
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
export function ModalInstanceCtrl($uibModalInstance, items) {
  var $ctrl = this;
  $ctrl.items = items;
  $ctrl.selected = {
    item: $ctrl.items[0]
  };

  $ctrl.ok = function () {
    $uibModalInstance.close($ctrl.selected.item);
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}

ModalDemoCtrl.$inject = ["$uibModal", "$log", "$document"];
ModalInstanceCtrl.$inject = ["$uibModalInstance", "items"];
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
