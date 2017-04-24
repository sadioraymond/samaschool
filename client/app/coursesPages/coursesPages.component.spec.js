'use strict';

describe('Component: CoursesPagesComponent', function() {
  // load the controller's module
  beforeEach(module('samaschoolApp.coursesPages'));

  var CoursesPagesComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    CoursesPagesComponent = $componentController('coursesPages', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
