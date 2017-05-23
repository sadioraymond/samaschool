'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newDemandeInscription;

describe('DemandeInscription API:', function() {
  describe('GET /api/demande_inscriptions', function() {
    var demandeInscriptions;

    beforeEach(function(done) {
      request(app)
        .get('/api/demande_inscriptions')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          demandeInscriptions = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      demandeInscriptions.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/demande_inscriptions', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/demande_inscriptions')
        .send({
          name: 'New DemandeInscription',
          info: 'This is the brand new demandeInscription!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newDemandeInscription = res.body;
          done();
        });
    });

    it('should respond with the newly created demandeInscription', function() {
      newDemandeInscription.name.should.equal('New DemandeInscription');
      newDemandeInscription.info.should.equal('This is the brand new demandeInscription!!!');
    });
  });

  describe('GET /api/demande_inscriptions/:id', function() {
    var demandeInscription;

    beforeEach(function(done) {
      request(app)
        .get(`/api/demande_inscriptions/${newDemandeInscription._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          demandeInscription = res.body;
          done();
        });
    });

    afterEach(function() {
      demandeInscription = {};
    });

    it('should respond with the requested demandeInscription', function() {
      demandeInscription.name.should.equal('New DemandeInscription');
      demandeInscription.info.should.equal('This is the brand new demandeInscription!!!');
    });
  });

  describe('PUT /api/demande_inscriptions/:id', function() {
    var updatedDemandeInscription;

    beforeEach(function(done) {
      request(app)
        .put(`/api/demande_inscriptions/${newDemandeInscription._id}`)
        .send({
          name: 'Updated DemandeInscription',
          info: 'This is the updated demandeInscription!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedDemandeInscription = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedDemandeInscription = {};
    });

    it('should respond with the updated demandeInscription', function() {
      updatedDemandeInscription.name.should.equal('Updated DemandeInscription');
      updatedDemandeInscription.info.should.equal('This is the updated demandeInscription!!!');
    });

    it('should respond with the updated demandeInscription on a subsequent GET', function(done) {
      request(app)
        .get(`/api/demande_inscriptions/${newDemandeInscription._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let demandeInscription = res.body;

          demandeInscription.name.should.equal('Updated DemandeInscription');
          demandeInscription.info.should.equal('This is the updated demandeInscription!!!');

          done();
        });
    });
  });

  describe('PATCH /api/demande_inscriptions/:id', function() {
    var patchedDemandeInscription;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/demande_inscriptions/${newDemandeInscription._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched DemandeInscription' },
          { op: 'replace', path: '/info', value: 'This is the patched demandeInscription!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedDemandeInscription = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedDemandeInscription = {};
    });

    it('should respond with the patched demandeInscription', function() {
      patchedDemandeInscription.name.should.equal('Patched DemandeInscription');
      patchedDemandeInscription.info.should.equal('This is the patched demandeInscription!!!');
    });
  });

  describe('DELETE /api/demande_inscriptions/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/demande_inscriptions/${newDemandeInscription._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when demandeInscription does not exist', function(done) {
      request(app)
        .delete(`/api/demande_inscriptions/${newDemandeInscription._id}`)
        .expect(404)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });
  });
});
