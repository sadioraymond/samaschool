'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var preferenceCtrlStub = {
  index: 'preferenceCtrl.index',
  show: 'preferenceCtrl.show',
  create: 'preferenceCtrl.create',
  upsert: 'preferenceCtrl.upsert',
  patch: 'preferenceCtrl.patch',
  destroy: 'preferenceCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var preferenceIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './preference.controller': preferenceCtrlStub
});

describe('Preference API Router:', function() {
  it('should return an express router instance', function() {
    preferenceIndex.should.equal(routerStub);
  });

  describe('GET /api/preferences', function() {
    it('should route to preference.controller.index', function() {
      routerStub.get
        .withArgs('/', 'preferenceCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/preferences/:id', function() {
    it('should route to preference.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'preferenceCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/preferences', function() {
    it('should route to preference.controller.create', function() {
      routerStub.post
        .withArgs('/', 'preferenceCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/preferences/:id', function() {
    it('should route to preference.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'preferenceCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/preferences/:id', function() {
    it('should route to preference.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'preferenceCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/preferences/:id', function() {
    it('should route to preference.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'preferenceCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
