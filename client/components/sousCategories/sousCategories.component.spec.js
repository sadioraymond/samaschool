'use strict';

describe('Component: sousCategories', function() {
  // load the component's module
  beforeEach(module('samaschoolApp.sousCategories'));

  var sousCategoriesComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    sousCategoriesComponent = $componentController('sousCategories', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
