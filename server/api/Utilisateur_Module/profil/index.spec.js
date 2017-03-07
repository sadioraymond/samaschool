'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var profilCtrlStub = {
  index: 'profilCtrl.index',
  show: 'profilCtrl.show',
  create: 'profilCtrl.create',
  upsert: 'profilCtrl.upsert',
  patch: 'profilCtrl.patch',
  destroy: 'profilCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var profilIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './profil.controller': profilCtrlStub
});

describe('Profil API Router:', function() {
  it('should return an express router instance', function() {
    profilIndex.should.equal(routerStub);
  });

  describe('GET /api/profils', function() {
    it('should route to profil.controller.index', function() {
      routerStub.get
        .withArgs('/', 'profilCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/profils/:id', function() {
    it('should route to profil.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'profilCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/profils', function() {
    it('should route to profil.controller.create', function() {
      routerStub.post
        .withArgs('/', 'profilCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/profils/:id', function() {
    it('should route to profil.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'profilCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/profils/:id', function() {
    it('should route to profil.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'profilCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/profils/:id', function() {
    it('should route to profil.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'profilCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
