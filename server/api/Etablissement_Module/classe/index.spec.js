'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var classeCtrlStub = {
  index: 'classeCtrl.index',
  show: 'classeCtrl.show',
  create: 'classeCtrl.create',
  upsert: 'classeCtrl.upsert',
  patch: 'classeCtrl.patch',
  destroy: 'classeCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var classeIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './classe.controller': classeCtrlStub
});

describe('Classe API Router:', function() {
  it('should return an express router instance', function() {
    classeIndex.should.equal(routerStub);
  });

  describe('GET /api/classes', function() {
    it('should route to classe.controller.index', function() {
      routerStub.get
        .withArgs('/', 'classeCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/classes/:id', function() {
    it('should route to classe.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'classeCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/classes', function() {
    it('should route to classe.controller.create', function() {
      routerStub.post
        .withArgs('/', 'classeCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/classes/:id', function() {
    it('should route to classe.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'classeCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/classes/:id', function() {
    it('should route to classe.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'classeCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/classes/:id', function() {
    it('should route to classe.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'classeCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
