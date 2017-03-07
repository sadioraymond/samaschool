'use strict';

/* globals sinon, describe, expect, it */

var proxyquire = require('proxyquire').noPreserveCache();

var suiviCoursCtrlStub = {
  index: 'suiviCoursCtrl.index',
  show: 'suiviCoursCtrl.show',
  create: 'suiviCoursCtrl.create',
  upsert: 'suiviCoursCtrl.upsert',
  patch: 'suiviCoursCtrl.patch',
  destroy: 'suiviCoursCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var suiviCoursIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    }
  },
  './suivi_cours.controller': suiviCoursCtrlStub
});

describe('SuiviCours API Router:', function() {
  it('should return an express router instance', function() {
    suiviCoursIndex.should.equal(routerStub);
  });

  describe('GET /api/suivi_courss', function() {
    it('should route to suiviCours.controller.index', function() {
      routerStub.get
        .withArgs('/', 'suiviCoursCtrl.index')
        .should.have.been.calledOnce;
    });
  });

  describe('GET /api/suivi_courss/:id', function() {
    it('should route to suiviCours.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'suiviCoursCtrl.show')
        .should.have.been.calledOnce;
    });
  });

  describe('POST /api/suivi_courss', function() {
    it('should route to suiviCours.controller.create', function() {
      routerStub.post
        .withArgs('/', 'suiviCoursCtrl.create')
        .should.have.been.calledOnce;
    });
  });

  describe('PUT /api/suivi_courss/:id', function() {
    it('should route to suiviCours.controller.upsert', function() {
      routerStub.put
        .withArgs('/:id', 'suiviCoursCtrl.upsert')
        .should.have.been.calledOnce;
    });
  });

  describe('PATCH /api/suivi_courss/:id', function() {
    it('should route to suiviCours.controller.patch', function() {
      routerStub.patch
        .withArgs('/:id', 'suiviCoursCtrl.patch')
        .should.have.been.calledOnce;
    });
  });

  describe('DELETE /api/suivi_courss/:id', function() {
    it('should route to suiviCours.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'suiviCoursCtrl.destroy')
        .should.have.been.calledOnce;
    });
  });
});
