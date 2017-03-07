'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var detailUserCtrlStub = {
  index: 'detailUserCtrl.index',
  show: 'detailUserCtrl.show',
  create: 'detailUserCtrl.create',
  upsert: 'detailUserCtrl.upsert',
  patch: 'detailUserCtrl.patch',
  destroy: 'detailUserCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var detailUserIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './detail_user.controller': detailUserCtrlStub
});

describe('DetailUser API Router:', function() {
  it('should return an express router instance', function() {
    detailUserIndex.should.equal(routerStub);
  });

  describe('GET /api/detail_users', function() {
    it('should route to detailUser.controller.index', function() {
      routerStub.get
        .withArgs('/', 'detailUserCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/detail_users/:id', function() {
    it('should route to detailUser.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'detailUserCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/detail_users', function() {
    it('should route to detailUser.controller.create', function() {
      routerStub.post
        .withArgs('/', 'detailUserCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/detail_users/:id', function() {
    it('should route to detailUser.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'detailUserCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/detail_users/:id', function() {
    it('should route to detailUser.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'detailUserCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/detail_users/:id', function() {
    it('should route to detailUser.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'detailUserCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
