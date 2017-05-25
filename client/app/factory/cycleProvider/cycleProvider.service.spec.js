'use strict';

describe('Service: cycleProvider', function() {
  // load the service's module
  beforeEach(module('samaschoolApp.cycleProvider'));

  // instantiate service
  var cycleProvider;
  beforeEach(inject(function(_cycleProvider_) {
    cycleProvider = _cycleProvider_;
  }));

  it('should do something', function() {
    expect(!!cycleProvider).toBe(true);
  });
});
