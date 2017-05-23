'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var demandeInscriptionCtrlStub = {
  index: 'demandeInscriptionCtrl.index',
  show: 'demandeInscriptionCtrl.show',
  create: 'demandeInscriptionCtrl.create',
  upsert: 'demandeInscriptionCtrl.upsert',
  patch: 'demandeInscriptionCtrl.patch',
  destroy: 'demandeInscriptionCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var demandeInscriptionIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './demande_inscription.controller': demandeInscriptionCtrlStub
});

describe('DemandeInscription API Router:', function() {
  it('should return an express router instance', function() {
    demandeInscriptionIndex.should.equal(routerStub);
  });

  describe('GET /api/demande_inscriptions', function() {
    it('should route to demandeInscription.controller.index', function() {
      routerStub.get
        .withArgs('/', 'demandeInscriptionCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/demande_inscriptions/:id', function() {
    it('should route to demandeInscription.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'demandeInscriptionCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/demande_inscriptions', function() {
    it('should route to demandeInscription.controller.create', function() {
      routerStub.post
        .withArgs('/', 'demandeInscriptionCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/demande_inscriptions/:id', function() {
    it('should route to demandeInscription.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'demandeInscriptionCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/demande_inscriptions/:id', function() {
    it('should route to demandeInscription.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'demandeInscriptionCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/demande_inscriptions/:id', function() {
    it('should route to demandeInscription.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'demandeInscriptionCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
