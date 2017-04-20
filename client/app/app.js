'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import 'angular-socket-io';

import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
// import ngMessages from 'angular-messages';
// import ngValidationMatch from 'angular-validation-match';
import '../../node_modules/angular-loading-bar/src/loading-bar';

import {
  routeConfig
} from './app.config';

// ckeditor ------------
import '../../bower_components/angular-ckeditor/angular-ckeditor.min.js';

import _Auth from '../components/auth/auth.module';
import account from './account';
import admin from './admin';
import navbar from '../components/navbar/navbar.component';
// import footer from '../components/footer/footer.component';
import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import socket from '../components/socket/socket.service';

import courses from '../components/courses/courses.component';
import bottomfooter from '../components/bottomFooter/bottomFooter.component';

import statistics from '../components/statistics/statistics.component';
import teachers from '../components/teachers/teachers.component';
import etablissements from '../components/etablissements/etablissements.component';
import banner from '../components/banner/banner.component';
import annonces from '../components/annonces/annonces.component';
import sousCategories from '../components/sousCategories/sousCategories.component';
import recentCours from '../components/recentCours/recentCours.component';
import formations from '../components/formations/formations.component';
import notreEquipe from '../components/notreEquipe/notreEquipe.component';
import coursProvider from '../app/factory/coursProvider/coursProvider.service';
import etablissementProvider from '../app/factory/etablissementProvider/etablissementProvider.service';
import classeProvider from '../app/factory/classeProvider/classeProvider.service';
import niveauProvider from '../app/factory/niveauProvider/niveauProvider.service';
import suiviCoursClasseProvider from '../app/factory/suivi_cours_classeProvider/suivi_cours_classeProvider.service';
import detailClasseProvider from '../app/factory/detail_classeProvider/detail_classeProvider.service';
import profilProvider from '../app/factory/profilProvider/profilProvider.service';
import jsFonctions from '../app/factory/jsFonctions/jsFonctions.service';
import chapitreProvider from '../app/factory/chapitreProvider/chapitreProvider.service';
import suiviCoursProvider from '../app/factory/suivi_coursProvider/suivi_coursProvider.service';
import annonceProvider from '../app/factory/annonceProvider/annonceProvider.service';
import ouvreDialog from '../app/factory/ouvreDialog/ouvreDialog.service';


// ------ Les routes -------
import CoursesPagesComponent from './coursesPages/coursesPages.component';
import CourseSinglePageComponent from './courseSinglePage/courseSinglePage.component';
import RegisterComponent from './register/register.component';
import ProfilComponent from './profil/profil.component';
import EtablissementPagesComponent from './etablissementPages/etablissementPages.component';
import userProvider from '../app/factory/userProvider/userProvider.service';
import categorieProvider from '../app/factory/categorieProvider/categorieProvider.service';
import souscategorieProvider from '../app/factory/souscategorieProvider/souscategorieProvider.service';
import CreatecourseComponent from './createcourse/createcourse.component';

import PreviewComponent from './preview/preview.component';
import './app.css';

// ---------- directives -----------
import coursesDirective from './directives/courses/courses.directive';

angular.module('samaschoolApp', [ngCookies, ngResource, ngSanitize, 'btford.socket-io', uiRouter,
    uiBootstrap, _Auth, account, admin, constants, socket, util, coursProvider, etablissementProvider, navbar, bottomfooter, main, courses, classeProvider, niveauProvider, suiviCoursClasseProvider, detailClasseProvider, jsFonctions, profilProvider, statistics, teachers, etablissements, CoursesPagesComponent, CourseSinglePageComponent, RegisterComponent, banner, ProfilComponent, EtablissementPagesComponent, annonces, userProvider, sousCategories, categorieProvider, souscategorieProvider, CreatecourseComponent, PreviewComponent, chapitreProvider, suiviCoursProvider, coursesDirective, recentCours, formations, notreEquipe, 'angular-loading-bar', 'cfp.loadingBar', 'ckeditor', ouvreDialog,annonceProvider

  ])
  .config(routeConfig)
  .config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
    cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
    cfpLoadingBarProvider.spinnerTemplate = '<div><span class="fa fa-spinner">Custom Loading Message...</div>';
  }])
  .run(function ($rootScope, $location, Auth) {
    'ngInject';
    // Redirect to login if route requires auth and you're not logged in

    // $rootScope.$on('$stateChangeStart', function (event, next) {
    //   Auth.isLoggedIn(function (loggedIn) {
    //     if (next.authenticate && !loggedIn) {
    //       $location.path('/');
    //     }
    //   });
    // });
  })
  .directive("owlCarousel", function () {
    return {
      restrict: 'E',
      transclude: false,
      link: function (scope) {
        scope.initCarousel = function (element) {
          // console.error('elm =>', element.attr('id'))
          // if (element.attr('id') == 'owl-courses') {
          // provide any default options you want
          var defaultOptions = {
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            autoplay: true,
            // responsive: {
            //   0: {
            //     items: 1
            //   },
            //   600: {
            //     items: 2
            //   },
            //   1000: {
            //     items: 3
            //   }
            // }
          };
          // }
          var customOptions = scope.$eval($(element).attr('data-options'));
          // combine the two options objects
          for (var key in customOptions) {
            defaultOptions[key] = customOptions[key];
          }
          // init carousel
          $(element).owlCarousel(defaultOptions);
        };
      }
    };
  })
  .directive('owlCarouselItem', [function () {
    return {
      restrict: 'A',
      transclude: false,
      link: function (scope, element) {
        // wait for the last item in the ng-repeat then call init
        if (scope.$last) {
          scope.initCarousel(element.parent());
        }
      }
    };
}]);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['samaschoolApp'], {
      strictDi: true
    });
  });
