'use strict';

describe('Component: PreviewComponent', function() {
  // load the controller's module
  beforeEach(module('samaschoolApp.preview'));

  var PreviewComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    PreviewComponent = $componentController('preview', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
