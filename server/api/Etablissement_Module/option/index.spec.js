'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var optionCtrlStub = {
  index: 'optionCtrl.index',
  show: 'optionCtrl.show',
  create: 'optionCtrl.create',
  upsert: 'optionCtrl.upsert',
  patch: 'optionCtrl.patch',
  destroy: 'optionCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var optionIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './option.controller': optionCtrlStub
});

describe('Option API Router:', function() {
  it('should return an express router instance', function() {
    optionIndex.should.equal(routerStub);
  });

  describe('GET /api/options', function() {
    it('should route to option.controller.index', function() {
      routerStub.get
        .withArgs('/', 'optionCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/options/:id', function() {
    it('should route to option.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'optionCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/options', function() {
    it('should route to option.controller.create', function() {
      routerStub.post
        .withArgs('/', 'optionCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/options/:id', function() {
    it('should route to option.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'optionCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/options/:id', function() {
    it('should route to option.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'optionCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/options/:id', function() {
    it('should route to option.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'optionCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
