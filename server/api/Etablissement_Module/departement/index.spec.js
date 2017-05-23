'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var departementCtrlStub = {
  index: 'departementCtrl.index',
  show: 'departementCtrl.show',
  create: 'departementCtrl.create',
  upsert: 'departementCtrl.upsert',
  patch: 'departementCtrl.patch',
  destroy: 'departementCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var departementIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './departement.controller': departementCtrlStub
});

describe('Departement API Router:', function() {
  it('should return an express router instance', function() {
    departementIndex.should.equal(routerStub);
  });

  describe('GET /api/departements', function() {
    it('should route to departement.controller.index', function() {
      routerStub.get
        .withArgs('/', 'departementCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/departements/:id', function() {
    it('should route to departement.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'departementCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/departements', function() {
    it('should route to departement.controller.create', function() {
      routerStub.post
        .withArgs('/', 'departementCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/departements/:id', function() {
    it('should route to departement.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'departementCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/departements/:id', function() {
    it('should route to departement.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'departementCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/departements/:id', function() {
    it('should route to departement.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'departementCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
