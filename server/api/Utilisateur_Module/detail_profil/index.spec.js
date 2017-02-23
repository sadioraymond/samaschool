'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var detailProfilCtrlStub = {
  index: 'detailProfilCtrl.index',
  show: 'detailProfilCtrl.show',
  create: 'detailProfilCtrl.create',
  upsert: 'detailProfilCtrl.upsert',
  patch: 'detailProfilCtrl.patch',
  destroy: 'detailProfilCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var detailProfilIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './detail_profil.controller': detailProfilCtrlStub
});

describe('DetailProfil API Router:', function() {
  it('should return an express router instance', function() {
    detailProfilIndex.should.equal(routerStub);
  });

  describe('GET /api/detail_profils', function() {
    it('should route to detailProfil.controller.index', function() {
      routerStub.get
        .withArgs('/', 'detailProfilCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/detail_profils/:id', function() {
    it('should route to detailProfil.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'detailProfilCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/detail_profils', function() {
    it('should route to detailProfil.controller.create', function() {
      routerStub.post
        .withArgs('/', 'detailProfilCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/detail_profils/:id', function() {
    it('should route to detailProfil.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'detailProfilCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/detail_profils/:id', function() {
    it('should route to detailProfil.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'detailProfilCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/detail_profils/:id', function() {
    it('should route to detailProfil.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'detailProfilCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
