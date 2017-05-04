'use strict';

describe('Component: courses', function() {
  // load the component's module
  beforeEach(module('samaschoolApp.courses'));

  var coursesComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    coursesComponent = $componentController('courses', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
