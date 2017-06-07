'use strict';

describe('Service: multerProvider', function() {
  // load the service's module
  beforeEach(module('samaschoolApp.multerProvider'));

  // instantiate service
  var multerProvider;
  beforeEach(inject(function(_multerProvider_) {
    multerProvider = _multerProvider_;
  }));

  it('should do something', function() {
    expect(!!multerProvider).toBe(true);
  });
});
