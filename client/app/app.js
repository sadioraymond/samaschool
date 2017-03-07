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


import {
    routeConfig
} from './app.config';

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

import coursProvider from '../app/factory/coursProvider/coursProvider.service';
import etablissementProvider from '../app/factory/etablissementProvider/etablissementProvider.service';
import classeProvider from '../app/factory/classeProvider/classeProvider.service';
import niveauProvider from '../app/factory/niveauProvider/niveauProvider.service';
import suiviCoursClasseProvider from '../app/factory/suivi_cours_classeProvider/suivi_cours_classeProvider.service';
import detailClasseProvider from '../app/factory/detail_classeProvider/detail_classeProvider.service';
import profilProvider from '../app/factory/profilProvider/profilProvider.service';
import jsFonctions from '../app/factory/jsFonctions/jsFonctions.service';
import './app.css';

angular.module('samaschoolApp', [ngCookies, ngResource, ngSanitize, 'btford.socket-io', uiRouter,
        uiBootstrap, _Auth, account, admin, constants, socket, util, coursProvider, etablissementProvider, navbar, bottomfooter, main, courses, classeProvider, niveauProvider, suiviCoursClasseProvider, detailClasseProvider, profilProvider, jsFonctions
    ])
    .config(routeConfig)
    .run(function($rootScope, $location, Auth) {
        'ngInject';
        // Redirect to login if route requires auth and you're not logged in

        $rootScope.$on('$stateChangeStart', function(event, next) {
            Auth.isLoggedIn(function(loggedIn) {
                if (next.authenticate && !loggedIn) {
                    $location.path('/login');
                }
            });
        });
    });

angular.element(document)
    .ready(() => {
        angular.bootstrap(document, ['samaschoolApp'], {
            strictDi: true
        });
    });