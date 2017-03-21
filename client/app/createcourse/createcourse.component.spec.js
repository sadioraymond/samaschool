'use strict';

describe('Component: CreatecourseComponent', function() {
  // load the controller's module
  beforeEach(module('samaschoolApp.createcourse'));

  var CreatecourseComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    CreatecourseComponent = $componentController('createcourse', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
