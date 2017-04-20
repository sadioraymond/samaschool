'use strict';

describe('Service: ouvreDialog', function() {
  // load the service's module
  beforeEach(module('samaschoolApp.ouvreDialog'));

  // instantiate service
  var ouvreDialog;
  beforeEach(inject(function(_ouvreDialog_) {
    ouvreDialog = _ouvreDialog_;
  }));

  it('should do something', function() {
    expect(!!ouvreDialog).toBe(true);
  });
});
