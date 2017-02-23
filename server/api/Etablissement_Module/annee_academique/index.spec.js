'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var anneeAcademiqueCtrlStub = {
  index: 'anneeAcademiqueCtrl.index',
  show: 'anneeAcademiqueCtrl.show',
  create: 'anneeAcademiqueCtrl.create',
  upsert: 'anneeAcademiqueCtrl.upsert',
  patch: 'anneeAcademiqueCtrl.patch',
  destroy: 'anneeAcademiqueCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var anneeAcademiqueIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './annee_academique.controller': anneeAcademiqueCtrlStub
});

describe('AnneeAcademique API Router:', function() {
  it('should return an express router instance', function() {
    anneeAcademiqueIndex.should.equal(routerStub);
  });

  describe('GET /api/annee_academiques', function() {
    it('should route to anneeAcademique.controller.index', function() {
      routerStub.get
        .withArgs('/', 'anneeAcademiqueCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/annee_academiques/:id', function() {
    it('should route to anneeAcademique.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'anneeAcademiqueCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/annee_academiques', function() {
    it('should route to anneeAcademique.controller.create', function() {
      routerStub.post
        .withArgs('/', 'anneeAcademiqueCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/annee_academiques/:id', function() {
    it('should route to anneeAcademique.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'anneeAcademiqueCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/annee_academiques/:id', function() {
    it('should route to anneeAcademique.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'anneeAcademiqueCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/annee_academiques/:id', function() {
    it('should route to anneeAcademique.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'anneeAcademiqueCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
