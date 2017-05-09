'use strict';

describe('Component: AllProfesseursComponent', function() {
  // load the controller's module
  beforeEach(module('samaschoolApp.allProfesseurs'));

  var AllProfesseursComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    AllProfesseursComponent = $componentController('allProfesseurs', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
