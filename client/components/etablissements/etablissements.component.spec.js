'use strict';

describe('Component: etablissements', function() {
  // load the component's module
  beforeEach(module('samaschoolApp.etablissements'));

  var etablissementsComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    etablissementsComponent = $componentController('etablissements', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
