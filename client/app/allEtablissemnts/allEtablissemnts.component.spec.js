'use strict';

describe('Component: AllEtablissemntsComponent', function() {
  // load the controller's module
  beforeEach(module('samaschoolApp.allEtablissemnts'));

  var AllEtablissemntsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    AllEtablissemntsComponent = $componentController('allEtablissemnts', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
