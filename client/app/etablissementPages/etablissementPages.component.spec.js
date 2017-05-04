'use strict';

describe('Component: EtablissementPagesComponent', function() {
  // load the controller's module
  beforeEach(module('samaschoolApp.etablissementPages'));

  var EtablissementPagesComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    EtablissementPagesComponent = $componentController('etablissementPages', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
