'use strict';

describe('Service: coursProvider', function() {
  // load the service's module
  beforeEach(module('samaschoolApp.coursProvider'));

  // instantiate service
  var coursProvider;
  beforeEach(inject(function(_coursProvider_) {
    coursProvider = _coursProvider_;
  }));

  it('should do something', function() {
    expect(!!coursProvider).toBe(true);
  });
});
