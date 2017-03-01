'use strict';

describe('Service: classeProvider', function() {
  // load the service's module
  beforeEach(module('samaschoolApp.classeProvider'));

  // instantiate service
  var classeProvider;
  beforeEach(inject(function(_classeProvider_) {
    classeProvider = _classeProvider_;
  }));

  it('should do something', function() {
    expect(!!classeProvider).toBe(true);
  });
});
