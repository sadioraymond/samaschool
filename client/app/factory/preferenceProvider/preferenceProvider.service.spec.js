'use strict';

describe('Service: preferenceProvider', function() {
  // load the service's module
  beforeEach(module('samaschoolApp.preferenceProvider'));

  // instantiate service
  var preferenceProvider;
  beforeEach(inject(function(_preferenceProvider_) {
    preferenceProvider = _preferenceProvider_;
  }));

  it('should do something', function() {
    expect(!!preferenceProvider).toBe(true);
  });
});
