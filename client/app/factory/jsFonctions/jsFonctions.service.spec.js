'use strict';

describe('Service: jsFonctions', function() {
  // load the service's module
  beforeEach(module('samaschoolApp.jsFonctions'));

  // instantiate service
  var jsFonctions;
  beforeEach(inject(function(_jsFonctions_) {
    jsFonctions = _jsFonctions_;
  }));

  it('should do something', function() {
    expect(!!jsFonctions).toBe(true);
  });
});
