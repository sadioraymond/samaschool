'use strict';

describe('Component: banner', function() {
  // load the component's module
  beforeEach(module('samaschoolApp.banner'));

  var bannerComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    bannerComponent = $componentController('banner', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
