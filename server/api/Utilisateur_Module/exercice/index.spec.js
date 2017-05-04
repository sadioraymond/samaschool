'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var exerciceCtrlStub = {
  index: 'exerciceCtrl.index',
  show: 'exerciceCtrl.show',
  create: 'exerciceCtrl.create',
  upsert: 'exerciceCtrl.upsert',
  patch: 'exerciceCtrl.patch',
  destroy: 'exerciceCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var exerciceIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './exercice.controller': exerciceCtrlStub
});

describe('Exercice API Router:', function() {
  it('should return an express router instance', function() {
    exerciceIndex.should.equal(routerStub);
  });

  describe('GET /api/exercices', function() {
    it('should route to exercice.controller.index', function() {
      routerStub.get
        .withArgs('/', 'exerciceCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/exercices/:id', function() {
    it('should route to exercice.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'exerciceCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/exercices', function() {
    it('should route to exercice.controller.create', function() {
      routerStub.post
        .withArgs('/', 'exerciceCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/exercices/:id', function() {
    it('should route to exercice.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'exerciceCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/exercices/:id', function() {
    it('should route to exercice.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'exerciceCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/exercices/:id', function() {
    it('should route to exercice.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'exerciceCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
