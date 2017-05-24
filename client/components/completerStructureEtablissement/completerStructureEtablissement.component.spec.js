'use strict';

describe('Component: completerStructureEtablissement', function() {
  // load the component's module
  beforeEach(module('samaschoolApp.completerStructureEtablissement'));

  var completerStructureEtablissementComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    completerStructureEtablissementComponent = $componentController('completerStructureEtablissement', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
