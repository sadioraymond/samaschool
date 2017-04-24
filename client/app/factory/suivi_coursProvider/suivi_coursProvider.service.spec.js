'use strict';

describe('Service: suiviCoursProvider', function() {
  // load the service's module
  beforeEach(module('samaschoolApp.suivi_coursProvider'));

  // instantiate service
  var suiviCoursProvider;
  beforeEach(inject(function(_suiviCoursProvider_) {
    suiviCoursProvider = _suiviCoursProvider_;
  }));

  it('should do something', function() {
    expect(!!suiviCoursProvider).toBe(true);
  });
});
