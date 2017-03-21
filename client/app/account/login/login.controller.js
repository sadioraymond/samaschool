'use strict';
// @flow
// import ModalInstanceCtrl from '../../../components/navbar/navbar.component';

type User = {
  name: string;
  email: string;
  password: string;
};

export default class LoginController {
  user: User = {
    name: '',
    email: '',
    password: ''
  };
  errors = {
    login: undefined
  };
  submitted = false;
  Auth;
  $state;
  userProvider;

  /*@ngInject*/
  constructor(Auth, $state, userProvider) {
    this.Auth = Auth;
    this.$state = $state;
    this.userProvider = userProvider;
  }

  login(form) {
    this.submitted = true;

    if (form.$valid) {
      this.Auth.login({
          email: this.user.email,
          password: this.user.password
        })
        .then(() => {
          this.userProvider.msg = true;
          // document.querySelector('#topbar_msg').click();
          setTimeout(() => {
            this.userProvider.partage(this.userProvider.varbi);
            // angular.element('#topbar_msg').triggerHandler('click');
          }, 500);
          // Logged in, redirect to home
          // this.$state.go('main');
        })
        .catch(err => {
          this.errors.login = err.message;
        });
    }
  }
}
