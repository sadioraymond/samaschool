'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var detailOptionCtrlStub = {
  index: 'detailOptionCtrl.index',
  show: 'detailOptionCtrl.show',
  create: 'detailOptionCtrl.create',
  upsert: 'detailOptionCtrl.upsert',
  patch: 'detailOptionCtrl.patch',
  destroy: 'detailOptionCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var detailOptionIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './detail_option.controller': detailOptionCtrlStub
});

describe('DetailOption API Router:', function() {
  it('should return an express router instance', function() {
    detailOptionIndex.should.equal(routerStub);
  });

  describe('GET /api/detail_options', function() {
    it('should route to detailOption.controller.index', function() {
      routerStub.get
        .withArgs('/', 'detailOptionCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/detail_options/:id', function() {
    it('should route to detailOption.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'detailOptionCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/detail_options', function() {
    it('should route to detailOption.controller.create', function() {
      routerStub.post
        .withArgs('/', 'detailOptionCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/detail_options/:id', function() {
    it('should route to detailOption.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'detailOptionCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/detail_options/:id', function() {
    it('should route to detailOption.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'detailOptionCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/detail_options/:id', function() {
    it('should route to detailOption.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'detailOptionCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
