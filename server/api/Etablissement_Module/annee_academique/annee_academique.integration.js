'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newAnneeAcademique;

describe('AnneeAcademique API:', function() {
  describe('GET /api/annee_academiques', function() {
    var anneeAcademiques;

    beforeEach(function(done) {
      request(app)
        .get('/api/annee_academiques')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          anneeAcademiques = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      anneeAcademiques.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/annee_academiques', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/annee_academiques')
        .send({
          name: 'New AnneeAcademique',
          info: 'This is the brand new anneeAcademique!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newAnneeAcademique = res.body;
          done();
        });
    });

    it('should respond with the newly created anneeAcademique', function() {
      newAnneeAcademique.name.should.equal('New AnneeAcademique');
      newAnneeAcademique.info.should.equal('This is the brand new anneeAcademique!!!');
    });
  });

  describe('GET /api/annee_academiques/:id', function() {
    var anneeAcademique;

    beforeEach(function(done) {
      request(app)
        .get(`/api/annee_academiques/${newAnneeAcademique._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          anneeAcademique = res.body;
          done();
        });
    });

    afterEach(function() {
      anneeAcademique = {};
    });

    it('should respond with the requested anneeAcademique', function() {
      anneeAcademique.name.should.equal('New AnneeAcademique');
      anneeAcademique.info.should.equal('This is the brand new anneeAcademique!!!');
    });
  });

  describe('PUT /api/annee_academiques/:id', function() {
    var updatedAnneeAcademique;

    beforeEach(function(done) {
      request(app)
        .put(`/api/annee_academiques/${newAnneeAcademique._id}`)
        .send({
          name: 'Updated AnneeAcademique',
          info: 'This is the updated anneeAcademique!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedAnneeAcademique = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedAnneeAcademique = {};
    });

    it('should respond with the updated anneeAcademique', function() {
      updatedAnneeAcademique.name.should.equal('Updated AnneeAcademique');
      updatedAnneeAcademique.info.should.equal('This is the updated anneeAcademique!!!');
    });

    it('should respond with the updated anneeAcademique on a subsequent GET', function(done) {
      request(app)
        .get(`/api/annee_academiques/${newAnneeAcademique._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let anneeAcademique = res.body;

          anneeAcademique.name.should.equal('Updated AnneeAcademique');
          anneeAcademique.info.should.equal('This is the updated anneeAcademique!!!');

          done();
        });
    });
  });

  describe('PATCH /api/annee_academiques/:id', function() {
    var patchedAnneeAcademique;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/annee_academiques/${newAnneeAcademique._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched AnneeAcademique' },
          { op: 'replace', path: '/info', value: 'This is the patched anneeAcademique!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedAnneeAcademique = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedAnneeAcademique = {};
    });

    it('should respond with the patched anneeAcademique', function() {
      patchedAnneeAcademique.name.should.equal('Patched AnneeAcademique');
      patchedAnneeAcademique.info.should.equal('This is the patched anneeAcademique!!!');
    });
  });

  describe('DELETE /api/annee_academiques/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/annee_academiques/${newAnneeAcademique._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when anneeAcademique does not exist', function(done) {
      request(app)
        .delete(`/api/annee_academiques/${newAnneeAcademique._id}`)
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
