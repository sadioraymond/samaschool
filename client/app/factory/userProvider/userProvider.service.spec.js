'use strict';

describe('Service: userProvider', function() {
  // load the service's module
  beforeEach(module('samaschoolApp.userProvider'));

  // instantiate service
  var userProvider;
  beforeEach(inject(function(_userProvider_) {
    userProvider = _userProvider_;
  }));

  it('should do something', function() {
    expect(!!userProvider).toBe(true);
  });
});
