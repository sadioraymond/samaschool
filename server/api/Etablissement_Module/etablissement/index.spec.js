'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var etablissementCtrlStub = {
  index: 'etablissementCtrl.index',
  show: 'etablissementCtrl.show',
  create: 'etablissementCtrl.create',
  upsert: 'etablissementCtrl.upsert',
  patch: 'etablissementCtrl.patch',
  destroy: 'etablissementCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var etablissementIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './etablissement.controller': etablissementCtrlStub
});

describe('Etablissement API Router:', function() {
  it('should return an express router instance', function() {
    etablissementIndex.should.equal(routerStub);
  });

  describe('GET /api/etablissements', function() {
    it('should route to etablissement.controller.index', function() {
      routerStub.get
        .withArgs('/', 'etablissementCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/etablissements/:id', function() {
    it('should route to etablissement.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'etablissementCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/etablissements', function() {
    it('should route to etablissement.controller.create', function() {
      routerStub.post
        .withArgs('/', 'etablissementCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/etablissements/:id', function() {
    it('should route to etablissement.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'etablissementCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/etablissements/:id', function() {
    it('should route to etablissement.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'etablissementCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/etablissements/:id', function() {
    it('should route to etablissement.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'etablissementCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
