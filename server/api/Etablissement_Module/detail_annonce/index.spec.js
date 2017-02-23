'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var detailAnnonceCtrlStub = {
  index: 'detailAnnonceCtrl.index',
  show: 'detailAnnonceCtrl.show',
  create: 'detailAnnonceCtrl.create',
  upsert: 'detailAnnonceCtrl.upsert',
  patch: 'detailAnnonceCtrl.patch',
  destroy: 'detailAnnonceCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var detailAnnonceIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './detail_annonce.controller': detailAnnonceCtrlStub
});

describe('DetailAnnonce API Router:', function() {
  it('should return an express router instance', function() {
    detailAnnonceIndex.should.equal(routerStub);
  });

  describe('GET /api/detail_annonces', function() {
    it('should route to detailAnnonce.controller.index', function() {
      routerStub.get
        .withArgs('/', 'detailAnnonceCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/detail_annonces/:id', function() {
    it('should route to detailAnnonce.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'detailAnnonceCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/detail_annonces', function() {
    it('should route to detailAnnonce.controller.create', function() {
      routerStub.post
        .withArgs('/', 'detailAnnonceCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/detail_annonces/:id', function() {
    it('should route to detailAnnonce.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'detailAnnonceCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/detail_annonces/:id', function() {
    it('should route to detailAnnonce.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'detailAnnonceCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/detail_annonces/:id', function() {
    it('should route to detailAnnonce.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'detailAnnonceCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
