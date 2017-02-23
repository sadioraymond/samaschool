'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var coursCtrlStub = {
  index: 'coursCtrl.index',
  show: 'coursCtrl.show',
  create: 'coursCtrl.create',
  upsert: 'coursCtrl.upsert',
  patch: 'coursCtrl.patch',
  destroy: 'coursCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var coursIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './cours.controller': coursCtrlStub
});

describe('Cours API Router:', function() {
  it('should return an express router instance', function() {
    coursIndex.should.equal(routerStub);
  });

  describe('GET /api/courss', function() {
    it('should route to cours.controller.index', function() {
      routerStub.get
        .withArgs('/', 'coursCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/courss/:id', function() {
    it('should route to cours.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'coursCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/courss', function() {
    it('should route to cours.controller.create', function() {
      routerStub.post
        .withArgs('/', 'coursCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/courss/:id', function() {
    it('should route to cours.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'coursCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/courss/:id', function() {
    it('should route to cours.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'coursCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/courss/:id', function() {
    it('should route to cours.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'coursCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
