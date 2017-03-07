'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var suiviCoursClasseCtrlStub = {
  index: 'suiviCoursClasseCtrl.index',
  show: 'suiviCoursClasseCtrl.show',
  create: 'suiviCoursClasseCtrl.create',
  upsert: 'suiviCoursClasseCtrl.upsert',
  patch: 'suiviCoursClasseCtrl.patch',
  destroy: 'suiviCoursClasseCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var suiviCoursClasseIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './suivi_cours_classe.controller': suiviCoursClasseCtrlStub
});

describe('SuiviCoursClasse API Router:', function() {
  it('should return an express router instance', function() {
    suiviCoursClasseIndex.should.equal(routerStub);
  });

  describe('GET /api/suivi_cours_classes', function() {
    it('should route to suiviCoursClasse.controller.index', function() {
      routerStub.get
        .withArgs('/', 'suiviCoursClasseCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/suivi_cours_classes/:id', function() {
    it('should route to suiviCoursClasse.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'suiviCoursClasseCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/suivi_cours_classes', function() {
    it('should route to suiviCoursClasse.controller.create', function() {
      routerStub.post
        .withArgs('/', 'suiviCoursClasseCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/suivi_cours_classes/:id', function() {
    it('should route to suiviCoursClasse.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'suiviCoursClasseCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/suivi_cours_classes/:id', function() {
    it('should route to suiviCoursClasse.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'suiviCoursClasseCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/suivi_cours_classes/:id', function() {
    it('should route to suiviCoursClasse.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'suiviCoursClasseCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
