'use strict';

describe('Component: bottomFooter', function() {
  // load the component's module
  beforeEach(module('samaschoolApp.bottomFooter'));

  var bottomFooterComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    bottomFooterComponent = $componentController('bottomFooter', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
