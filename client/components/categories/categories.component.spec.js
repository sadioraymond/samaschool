'use strict';

describe('Component: categories', function() {
  // load the component's module
  beforeEach(module('samaschoolApp.categories'));

  var categoriesComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    categoriesComponent = $componentController('categories', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
