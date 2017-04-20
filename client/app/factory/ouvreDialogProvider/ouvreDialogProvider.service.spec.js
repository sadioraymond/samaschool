'use strict';

describe('Service: ouvreDialogProvider', function() {
  // load the service's module
  beforeEach(module('samaschoolApp.ouvreDialogProvider'));

  // instantiate service
  var ouvreDialogProvider;
  beforeEach(inject(function(_ouvreDialogProvider_) {
    ouvreDialogProvider = _ouvreDialogProvider_;
  }));

  it('should do something', function() {
    expect(!!ouvreDialogProvider).toBe(true);
  });
});
