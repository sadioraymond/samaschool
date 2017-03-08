'use strict';

describe('Component: annonces', function() {
  // load the component's module
  beforeEach(module('samaschoolApp.annonces'));

  var annoncesComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    annoncesComponent = $componentController('annonces', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
