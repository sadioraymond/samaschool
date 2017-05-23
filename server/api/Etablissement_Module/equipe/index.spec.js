'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var equipeCtrlStub = {
  index: 'equipeCtrl.index',
  show: 'equipeCtrl.show',
  create: 'equipeCtrl.create',
  upsert: 'equipeCtrl.upsert',
  patch: 'equipeCtrl.patch',
  destroy: 'equipeCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var equipeIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './equipe.controller': equipeCtrlStub
});

describe('Equipe API Router:', function() {
  it('should return an express router instance', function() {
    equipeIndex.should.equal(routerStub);
  });

  describe('GET /api/equipes', function() {
    it('should route to equipe.controller.index', function() {
      routerStub.get
        .withArgs('/', 'equipeCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/equipes/:id', function() {
    it('should route to equipe.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'equipeCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/equipes', function() {
    it('should route to equipe.controller.create', function() {
      routerStub.post
        .withArgs('/', 'equipeCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/equipes/:id', function() {
    it('should route to equipe.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'equipeCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/equipes/:id', function() {
    it('should route to equipe.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'equipeCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/equipes/:id', function() {
    it('should route to equipe.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'equipeCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
