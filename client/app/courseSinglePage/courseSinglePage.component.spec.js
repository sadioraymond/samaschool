'use strict';

describe('Component: CourseSinglePageComponent', function() {
  // load the controller's module
  beforeEach(module('samaschoolApp.courseSinglePage'));

  var CourseSinglePageComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    CourseSinglePageComponent = $componentController('courseSinglePage', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
