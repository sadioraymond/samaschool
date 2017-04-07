'use strict';

describe('Component: recentCours', function() {
  // load the component's module
  beforeEach(module('samaschoolApp.recentCours'));

  var recentCoursComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    recentCoursComponent = $componentController('recentCours', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
