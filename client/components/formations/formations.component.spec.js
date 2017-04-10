'use strict';

describe('Component: formations', function() {
  // load the component's module
  beforeEach(module('samaschoolApp.formations'));

  var formationsComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    formationsComponent = $componentController('formations', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
