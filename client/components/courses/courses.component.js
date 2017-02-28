'use strict';
const angular = require('angular');

export class coursesComponent {
    /*@ngInject*/
    constructor() {
        this.message = 'World';
    }
}

export default angular.module('samaschoolApp.courses', [])
    .component('courses', {
        // template: '<h1>Hello {{ $ctrl.message }}</h1>',
        template: require('./courses.html'),
        bindings: { message: '<' },
        controller: coursesComponent
    })
    .name;