'use strict';

describe('Service: suiviCoursClasseProvider', function() {
  // load the service's module
  beforeEach(module('samaschoolApp.suivi_cours_classeProvider'));

  // instantiate service
  var suiviCoursClasseProvider;
  beforeEach(inject(function(_suiviCoursClasseProvider_) {
    suiviCoursClasseProvider = _suiviCoursClasseProvider_;
  }));

  it('should do something', function() {
    expect(!!suiviCoursClasseProvider).toBe(true);
  });
});
