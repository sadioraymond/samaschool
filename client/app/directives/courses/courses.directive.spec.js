'use strict';

describe('Directive: courses', function() {
  // load the directive's module and view
  beforeEach(module('samaschoolApp.courses'));
  beforeEach(module('app/directives/courses/courses.html'));

  var element, scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<courses></courses>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the courses directive');
  }));
});
