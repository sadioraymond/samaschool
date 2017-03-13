'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var fichierCtrlStub = {
  index: 'fichierCtrl.index',
  show: 'fichierCtrl.show',
  create: 'fichierCtrl.create',
  upsert: 'fichierCtrl.upsert',
  patch: 'fichierCtrl.patch',
  destroy: 'fichierCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var fichierIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './fichier.controller': fichierCtrlStub
});

describe('Fichier API Router:', function() {
  it('should return an express router instance', function() {
    fichierIndex.should.equal(routerStub);
  });

  describe('GET /api/fichiers', function() {
    it('should route to fichier.controller.index', function() {
      routerStub.get
        .withArgs('/', 'fichierCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/fichiers/:id', function() {
    it('should route to fichier.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'fichierCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/fichiers', function() {
    it('should route to fichier.controller.create', function() {
      routerStub.post
        .withArgs('/', 'fichierCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/fichiers/:id', function() {
    it('should route to fichier.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'fichierCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/fichiers/:id', function() {
    it('should route to fichier.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'fichierCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/fichiers/:id', function() {
    it('should route to fichier.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'fichierCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
