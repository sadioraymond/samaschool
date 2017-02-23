'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var niveauCtrlStub = {
  index: 'niveauCtrl.index',
  show: 'niveauCtrl.show',
  create: 'niveauCtrl.create',
  upsert: 'niveauCtrl.upsert',
  patch: 'niveauCtrl.patch',
  destroy: 'niveauCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var niveauIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './niveau.controller': niveauCtrlStub
});

describe('Niveau API Router:', function() {
  it('should return an express router instance', function() {
    niveauIndex.should.equal(routerStub);
  });

  describe('GET /api/niveaus', function() {
    it('should route to niveau.controller.index', function() {
      routerStub.get
        .withArgs('/', 'niveauCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/niveaus/:id', function() {
    it('should route to niveau.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'niveauCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/niveaus', function() {
    it('should route to niveau.controller.create', function() {
      routerStub.post
        .withArgs('/', 'niveauCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/niveaus/:id', function() {
    it('should route to niveau.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'niveauCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/niveaus/:id', function() {
    it('should route to niveau.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'niveauCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/niveaus/:id', function() {
    it('should route to niveau.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'niveauCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
