'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var cycleCtrlStub = {
  index: 'cycleCtrl.index',
  show: 'cycleCtrl.show',
  create: 'cycleCtrl.create',
  upsert: 'cycleCtrl.upsert',
  patch: 'cycleCtrl.patch',
  destroy: 'cycleCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var cycleIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './cycle.controller': cycleCtrlStub
});

describe('Cycle API Router:', function() {
  it('should return an express router instance', function() {
    cycleIndex.should.equal(routerStub);
  });

  describe('GET /api/cycles', function() {
    it('should route to cycle.controller.index', function() {
      routerStub.get
        .withArgs('/', 'cycleCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/cycles/:id', function() {
    it('should route to cycle.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'cycleCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/cycles', function() {
    it('should route to cycle.controller.create', function() {
      routerStub.post
        .withArgs('/', 'cycleCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/cycles/:id', function() {
    it('should route to cycle.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'cycleCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/cycles/:id', function() {
    it('should route to cycle.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'cycleCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/cycles/:id', function() {
    it('should route to cycle.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'cycleCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
