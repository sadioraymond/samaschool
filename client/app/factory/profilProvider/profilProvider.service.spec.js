'use strict';

describe('Service: profilProvider', function() {
  // load the service's module
  beforeEach(module('samaschoolApp.profilProvider'));

  // instantiate service
  var profilProvider;
  beforeEach(inject(function(_profilProvider_) {
    profilProvider = _profilProvider_;
  }));

  it('should do something', function() {
    expect(!!profilProvider).toBe(true);
  });
});
