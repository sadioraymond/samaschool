'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var chapitreCtrlStub = {
  index: 'chapitreCtrl.index',
  show: 'chapitreCtrl.show',
  create: 'chapitreCtrl.create',
  upsert: 'chapitreCtrl.upsert',
  patch: 'chapitreCtrl.patch',
  destroy: 'chapitreCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var chapitreIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './chapitre.controller': chapitreCtrlStub
});

describe('Chapitre API Router:', function() {
  it('should return an express router instance', function() {
    chapitreIndex.should.equal(routerStub);
  });

  describe('GET /api/chapitres', function() {
    it('should route to chapitre.controller.index', function() {
      routerStub.get
        .withArgs('/', 'chapitreCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/chapitres/:id', function() {
    it('should route to chapitre.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'chapitreCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/chapitres', function() {
    it('should route to chapitre.controller.create', function() {
      routerStub.post
        .withArgs('/', 'chapitreCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/chapitres/:id', function() {
    it('should route to chapitre.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'chapitreCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/chapitres/:id', function() {
    it('should route to chapitre.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'chapitreCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/chapitres/:id', function() {
    it('should route to chapitre.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'chapitreCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
