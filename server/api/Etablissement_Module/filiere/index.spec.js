'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var filiereCtrlStub = {
  index: 'filiereCtrl.index',
  show: 'filiereCtrl.show',
  create: 'filiereCtrl.create',
  upsert: 'filiereCtrl.upsert',
  patch: 'filiereCtrl.patch',
  destroy: 'filiereCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var filiereIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './filiere.controller': filiereCtrlStub
});

describe('Filiere API Router:', function() {
  it('should return an express router instance', function() {
    filiereIndex.should.equal(routerStub);
  });

  describe('GET /api/filieres', function() {
    it('should route to filiere.controller.index', function() {
      routerStub.get
        .withArgs('/', 'filiereCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/filieres/:id', function() {
    it('should route to filiere.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'filiereCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/filieres', function() {
    it('should route to filiere.controller.create', function() {
      routerStub.post
        .withArgs('/', 'filiereCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/filieres/:id', function() {
    it('should route to filiere.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'filiereCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/filieres/:id', function() {
    it('should route to filiere.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'filiereCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/filieres/:id', function() {
    it('should route to filiere.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'filiereCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
