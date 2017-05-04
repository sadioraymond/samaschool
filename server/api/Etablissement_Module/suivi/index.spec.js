'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var suiviCtrlStub = {
  index: 'suiviCtrl.index',
  show: 'suiviCtrl.show',
  create: 'suiviCtrl.create',
  upsert: 'suiviCtrl.upsert',
  patch: 'suiviCtrl.patch',
  destroy: 'suiviCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var suiviIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './suivi.controller': suiviCtrlStub
});

describe('Suivi API Router:', function() {
  it('should return an express router instance', function() {
    suiviIndex.should.equal(routerStub);
  });

  describe('GET /api/suivis', function() {
    it('should route to suivi.controller.index', function() {
      routerStub.get
        .withArgs('/', 'suiviCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/suivis/:id', function() {
    it('should route to suivi.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'suiviCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/suivis', function() {
    it('should route to suivi.controller.create', function() {
      routerStub.post
        .withArgs('/', 'suiviCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/suivis/:id', function() {
    it('should route to suivi.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'suiviCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/suivis/:id', function() {
    it('should route to suivi.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'suiviCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/suivis/:id', function() {
    it('should route to suivi.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'suiviCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
