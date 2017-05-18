'use strict';
// @flow

import angular from 'angular';

type User = {
  name: string;
  email: string;
  password: string;
  username: string;
  images: string;
  imagecouverture: string;
};
export default class SignupController {
  user: User = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
    images: '',
    imagecouverture: ''
  };
  errors = {};
  submitted = false;
  Auth;
  $state;
  matchPass;
  userProvider;

  /*@ngInject*/
  constructor(Auth, $state, userProvider) {
    this.Auth = Auth;
    this.$state = $state;
    this.userProvider = userProvider;
  }

  register(form) {
    this.submitted = true;
    // if(confirmPassword === this.user.password){}
    if (form.$valid && this.user.confirmPassword === this.user.password) {
      return this.Auth.createUser({
          name: this.user.name,
          email: this.user.email,
          password: this.user.password,
          username: this.user.username,
          images: "ImageParDerfautPourLesUsers.png",
          imagecouverture: "images (6).jpg"
          // confirmPassword: this.user.password
        })
        .then(() => {
          this.matchPass = false;
          // affichage du message de félicitation
          this.userProvider.inscription = true;
          // Account created, redirect to home
          this.userProvider.partage(this.userProvider.varbi);
          // this.$state.go('main');
        })
        .catch(err => {
          err = err.data;
          this.errors = {};
          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, (error, field) => {
            form[field].$setValidity('mongoose', false);
            this.errors[field] = error.message;
          });
        });
    }else{
      this.matchPass = true;
    }
  }
}
