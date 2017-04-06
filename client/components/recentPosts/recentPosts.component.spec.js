'use strict';

describe('Component: recentPosts', function() {
  // load the component's module
  beforeEach(module('samaschoolApp.recentPosts'));

  var recentPostsComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    recentPostsComponent = $componentController('recentPosts', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
