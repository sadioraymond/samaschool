'use strict';

describe('Service: niveauProvider', function() {
  // load the service's module
  beforeEach(module('samaschoolApp.niveauProvider'));

  // instantiate service
  var niveauProvider;
  beforeEach(inject(function(_niveauProvider_) {
    niveauProvider = _niveauProvider_;
  }));

  it('should do something', function() {
    expect(!!niveauProvider).toBe(true);
  });
});
