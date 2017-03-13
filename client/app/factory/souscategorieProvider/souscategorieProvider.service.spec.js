'use strict';

describe('Service: souscategorieProvider', function() {
  // load the service's module
  beforeEach(module('samaschoolApp.souscategorieProvider'));

  // instantiate service
  var souscategorieProvider;
  beforeEach(inject(function(_souscategorieProvider_) {
    souscategorieProvider = _souscategorieProvider_;
  }));

  it('should do something', function() {
    expect(!!souscategorieProvider).toBe(true);
  });
});
