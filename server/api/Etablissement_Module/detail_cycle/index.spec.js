'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var detailCycleCtrlStub = {
  index: 'detailCycleCtrl.index',
  show: 'detailCycleCtrl.show',
  create: 'detailCycleCtrl.create',
  upsert: 'detailCycleCtrl.upsert',
  patch: 'detailCycleCtrl.patch',
  destroy: 'detailCycleCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var detailCycleIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './detail_cycle.controller': detailCycleCtrlStub
});

describe('DetailCycle API Router:', function() {
  it('should return an express router instance', function() {
    detailCycleIndex.should.equal(routerStub);
  });

  describe('GET /api/detail_cycles', function() {
    it('should route to detailCycle.controller.index', function() {
      routerStub.get
        .withArgs('/', 'detailCycleCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/detail_cycles/:id', function() {
    it('should route to detailCycle.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'detailCycleCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/detail_cycles', function() {
    it('should route to detailCycle.controller.create', function() {
      routerStub.post
        .withArgs('/', 'detailCycleCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/detail_cycles/:id', function() {
    it('should route to detailCycle.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'detailCycleCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/detail_cycles/:id', function() {
    it('should route to detailCycle.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'detailCycleCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/detail_cycles/:id', function() {
    it('should route to detailCycle.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'detailCycleCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
