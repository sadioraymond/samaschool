'use strict';

describe('Component: notreEquipe', function() {
  // load the component's module
  beforeEach(module('samaschoolApp.notreEquipe'));

  var notreEquipeComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    notreEquipeComponent = $componentController('notreEquipe', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
