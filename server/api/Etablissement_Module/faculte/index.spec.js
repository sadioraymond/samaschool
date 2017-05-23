'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var faculteCtrlStub = {
  index: 'faculteCtrl.index',
  show: 'faculteCtrl.show',
  create: 'faculteCtrl.create',
  upsert: 'faculteCtrl.upsert',
  patch: 'faculteCtrl.patch',
  destroy: 'faculteCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var faculteIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './faculte.controller': faculteCtrlStub
});

describe('Faculte API Router:', function() {
  it('should return an express router instance', function() {
    faculteIndex.should.equal(routerStub);
  });

  describe('GET /api/facultes', function() {
    it('should route to faculte.controller.index', function() {
      routerStub.get
        .withArgs('/', 'faculteCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/facultes/:id', function() {
    it('should route to faculte.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'faculteCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/facultes', function() {
    it('should route to faculte.controller.create', function() {
      routerStub.post
        .withArgs('/', 'faculteCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/facultes/:id', function() {
    it('should route to faculte.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'faculteCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/facultes/:id', function() {
    it('should route to faculte.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'faculteCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/facultes/:id', function() {
    it('should route to faculte.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'faculteCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
