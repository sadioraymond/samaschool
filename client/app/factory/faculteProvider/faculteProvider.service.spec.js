'use strict';

describe('Service: faculteProvider', function() {
  // load the service's module
  beforeEach(module('samaschoolApp.faculteProvider'));

  // instantiate service
  var faculteProvider;
  beforeEach(inject(function(_faculteProvider_) {
    faculteProvider = _faculteProvider_;
  }));

  it('should do something', function() {
    expect(!!faculteProvider).toBe(true);
  });
});
