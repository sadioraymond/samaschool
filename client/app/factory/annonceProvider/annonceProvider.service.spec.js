'use strict';

describe('Service: annonceProvider', function() {
  // load the service's module
  beforeEach(module('samaschoolApp.annonceProvider'));

  // instantiate service
  var annonceProvider;
  beforeEach(inject(function(_annonceProvider_) {
    annonceProvider = _annonceProvider_;
  }));

  it('should do something', function() {
    expect(!!annonceProvider).toBe(true);
  });
});
