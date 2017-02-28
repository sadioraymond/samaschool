'use strict';

describe('Service: etablissementProvider', function() {
  // load the service's module
  beforeEach(module('samaschoolApp.etablissementProvider'));

  // instantiate service
  var etablissementProvider;
  beforeEach(inject(function(_etablissementProvider_) {
    etablissementProvider = _etablissementProvider_;
  }));

  it('should do something', function() {
    expect(!!etablissementProvider).toBe(true);
  });
});
