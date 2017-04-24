'use strict';

import angular from 'angular';
import SignupController from '../../app/account/signup/signup.controller';
import LoginController from '../../app/account/login/login.controller';

export default angular.module('samaschoolApp.signup', [])
  .controller('SignupController', SignupController)
  .name;
LoginController.$inject = ["$uibModalInstance"];
export default angular.module('samaschoolApp.login', [])
  .controller('LoginController', LoginController)
  .name;