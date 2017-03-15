'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var publicationCtrlStub = {
  index: 'publicationCtrl.index',
  show: 'publicationCtrl.show',
  create: 'publicationCtrl.create',
  upsert: 'publicationCtrl.upsert',
  patch: 'publicationCtrl.patch',
  destroy: 'publicationCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var publicationIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './publication.controller': publicationCtrlStub
});

describe('Publication API Router:', function() {
  it('should return an express router instance', function() {
    publicationIndex.should.equal(routerStub);
  });

  describe('GET /api/publications', function() {
    it('should route to publication.controller.index', function() {
      routerStub.get
        .withArgs('/', 'publicationCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/publications/:id', function() {
    it('should route to publication.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'publicationCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/publications', function() {
    it('should route to publication.controller.create', function() {
      routerStub.post
        .withArgs('/', 'publicationCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/publications/:id', function() {
    it('should route to publication.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'publicationCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/publications/:id', function() {
    it('should route to publication.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'publicationCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/publications/:id', function() {
    it('should route to publication.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'publicationCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
