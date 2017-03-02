'use strict';

describe('Component: statistics', function() {
  // load the component's module
  beforeEach(module('samaschoolApp.statistics'));

  var statisticsComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    statisticsComponent = $componentController('statistics', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
