'use strict';

describe('Component: teachers', function() {
  // load the component's module
  beforeEach(module('samaschoolApp.teachers'));

  var teachersComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    teachersComponent = $componentController('teachers', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
