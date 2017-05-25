'use strict';

describe('Service: departementProvider', function() {
  // load the service's module
  beforeEach(module('samaschoolApp.departementProvider'));

  // instantiate service
  var departementProvider;
  beforeEach(inject(function(_departementProvider_) {
    departementProvider = _departementProvider_;
  }));

  it('should do something', function() {
    expect(!!departementProvider).toBe(true);
  });
});
