'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var detailClasseCtrlStub = {
  index: 'detailClasseCtrl.index',
  show: 'detailClasseCtrl.show',
  create: 'detailClasseCtrl.create',
  upsert: 'detailClasseCtrl.upsert',
  patch: 'detailClasseCtrl.patch',
  destroy: 'detailClasseCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var detailClasseIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './detail_classe.controller': detailClasseCtrlStub
});

describe('DetailClasse API Router:', function() {
  it('should return an express router instance', function() {
    detailClasseIndex.should.equal(routerStub);
  });

  describe('GET /api/detail_classes', function() {
    it('should route to detailClasse.controller.index', function() {
      routerStub.get
        .withArgs('/', 'detailClasseCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/detail_classes/:id', function() {
    it('should route to detailClasse.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'detailClasseCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/detail_classes', function() {
    it('should route to detailClasse.controller.create', function() {
      routerStub.post
        .withArgs('/', 'detailClasseCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/detail_classes/:id', function() {
    it('should route to detailClasse.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'detailClasseCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/detail_classes/:id', function() {
    it('should route to detailClasse.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'detailClasseCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/detail_classes/:id', function() {
    it('should route to detailClasse.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'detailClasseCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
