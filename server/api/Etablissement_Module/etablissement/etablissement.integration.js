'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newEtablissement;

describe('Etablissement API:', function() {
  describe('GET /api/etablissements', function() {
    var etablissements;

    beforeEach(function(done) {
      request(app)
        .get('/api/etablissements')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          etablissements = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      etablissements.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/etablissements', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/etablissements')
        .send({
          name: 'New Etablissement',
          info: 'This is the brand new etablissement!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newEtablissement = res.body;
          done();
        });
    });

    it('should respond with the newly created etablissement', function() {
      newEtablissement.name.should.equal('New Etablissement');
      newEtablissement.info.should.equal('This is the brand new etablissement!!!');
    });
  });

  describe('GET /api/etablissements/:id', function() {
    var etablissement;

    beforeEach(function(done) {
      request(app)
        .get(`/api/etablissements/${newEtablissement._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          etablissement = res.body;
          done();
        });
    });

    afterEach(function() {
      etablissement = {};
    });

    it('should respond with the requested etablissement', function() {
      etablissement.name.should.equal('New Etablissement');
      etablissement.info.should.equal('This is the brand new etablissement!!!');
    });
  });

  describe('PUT /api/etablissements/:id', function() {
    var updatedEtablissement;

    beforeEach(function(done) {
      request(app)
        .put(`/api/etablissements/${newEtablissement._id}`)
        .send({
          name: 'Updated Etablissement',
          info: 'This is the updated etablissement!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedEtablissement = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedEtablissement = {};
    });

    it('should respond with the updated etablissement', function() {
      updatedEtablissement.name.should.equal('Updated Etablissement');
      updatedEtablissement.info.should.equal('This is the updated etablissement!!!');
    });

    it('should respond with the updated etablissement on a subsequent GET', function(done) {
      request(app)
        .get(`/api/etablissements/${newEtablissement._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let etablissement = res.body;

          etablissement.name.should.equal('Updated Etablissement');
          etablissement.info.should.equal('This is the updated etablissement!!!');

          done();
        });
    });
  });

  describe('PATCH /api/etablissements/:id', function() {
    var patchedEtablissement;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/etablissements/${newEtablissement._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Etablissement' },
          { op: 'replace', path: '/info', value: 'This is the patched etablissement!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedEtablissement = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedEtablissement = {};
    });

    it('should respond with the patched etablissement', function() {
      patchedEtablissement.name.should.equal('Patched Etablissement');
      patchedEtablissement.info.should.equal('This is the patched etablissement!!!');
    });
  });

  describe('DELETE /api/etablissements/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/etablissements/${newEtablissement._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when etablissement does not exist', function(done) {
      request(app)
        .delete(`/api/etablissements/${newEtablissement._id}`)
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
