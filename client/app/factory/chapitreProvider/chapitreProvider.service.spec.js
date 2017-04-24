'use strict';

describe('Service: chapitreProvider', function() {
  // load the service's module
  beforeEach(module('samaschoolApp.chapitreProvider'));

  // instantiate service
  var chapitreProvider;
  beforeEach(inject(function(_chapitreProvider_) {
    chapitreProvider = _chapitreProvider_;
  }));

  it('should do something', function() {
    expect(!!chapitreProvider).toBe(true);
  });
});
