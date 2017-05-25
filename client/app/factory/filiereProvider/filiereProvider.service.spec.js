'use strict';

describe('Service: filiereProvider', function() {
  // load the service's module
  beforeEach(module('samaschoolApp.filiereProvider'));

  // instantiate service
  var filiereProvider;
  beforeEach(inject(function(_filiereProvider_) {
    filiereProvider = _filiereProvider_;
  }));

  it('should do something', function() {
    expect(!!filiereProvider).toBe(true);
  });
});
