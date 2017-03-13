'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var typeFichierCtrlStub = {
  index: 'typeFichierCtrl.index',
  show: 'typeFichierCtrl.show',
  create: 'typeFichierCtrl.create',
  upsert: 'typeFichierCtrl.upsert',
  patch: 'typeFichierCtrl.patch',
  destroy: 'typeFichierCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var typeFichierIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './type_fichier.controller': typeFichierCtrlStub
});

describe('TypeFichier API Router:', function() {
  it('should return an express router instance', function() {
    typeFichierIndex.should.equal(routerStub);
  });

  describe('GET /api/type_fichiers', function() {
    it('should route to typeFichier.controller.index', function() {
      routerStub.get
        .withArgs('/', 'typeFichierCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/type_fichiers/:id', function() {
    it('should route to typeFichier.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'typeFichierCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/type_fichiers', function() {
    it('should route to typeFichier.controller.create', function() {
      routerStub.post
        .withArgs('/', 'typeFichierCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/type_fichiers/:id', function() {
    it('should route to typeFichier.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'typeFichierCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/type_fichiers/:id', function() {
    it('should route to typeFichier.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'typeFichierCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/type_fichiers/:id', function() {
    it('should route to typeFichier.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'typeFichierCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
