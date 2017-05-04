'use strict';

describe('Service: detailClasseProvider', function() {
  // load the service's module
  beforeEach(module('samaschoolApp.detail_classeProvider'));

  // instantiate service
  var detailClasseProvider;
  beforeEach(inject(function(_detailClasseProvider_) {
    detailClasseProvider = _detailClasseProvider_;
  }));

  it('should do something', function() {
    expect(!!detailClasseProvider).toBe(true);
  });
});
