'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newFichier;

describe('Fichier API:', function() {
  describe('GET /api/fichiers', function() {
    var fichiers;

    beforeEach(function(done) {
      request(app)
        .get('/api/fichiers')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          fichiers = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      fichiers.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/fichiers', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/fichiers')
        .send({
          name: 'New Fichier',
          info: 'This is the brand new fichier!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newFichier = res.body;
          done();
        });
    });

    it('should respond with the newly created fichier', function() {
      newFichier.name.should.equal('New Fichier');
      newFichier.info.should.equal('This is the brand new fichier!!!');
    });
  });

  describe('GET /api/fichiers/:id', function() {
    var fichier;

    beforeEach(function(done) {
      request(app)
        .get(`/api/fichiers/${newFichier._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          fichier = res.body;
          done();
        });
    });

    afterEach(function() {
      fichier = {};
    });

    it('should respond with the requested fichier', function() {
      fichier.name.should.equal('New Fichier');
      fichier.info.should.equal('This is the brand new fichier!!!');
    });
  });

  describe('PUT /api/fichiers/:id', function() {
    var updatedFichier;

    beforeEach(function(done) {
      request(app)
        .put(`/api/fichiers/${newFichier._id}`)
        .send({
          name: 'Updated Fichier',
          info: 'This is the updated fichier!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedFichier = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedFichier = {};
    });

    it('should respond with the updated fichier', function() {
      updatedFichier.name.should.equal('Updated Fichier');
      updatedFichier.info.should.equal('This is the updated fichier!!!');
    });

    it('should respond with the updated fichier on a subsequent GET', function(done) {
      request(app)
        .get(`/api/fichiers/${newFichier._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let fichier = res.body;

          fichier.name.should.equal('Updated Fichier');
          fichier.info.should.equal('This is the updated fichier!!!');

          done();
        });
    });
  });

  describe('PATCH /api/fichiers/:id', function() {
    var patchedFichier;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/fichiers/${newFichier._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Fichier' },
          { op: 'replace', path: '/info', value: 'This is the patched fichier!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedFichier = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedFichier = {};
    });

    it('should respond with the patched fichier', function() {
      patchedFichier.name.should.equal('Patched Fichier');
      patchedFichier.info.should.equal('This is the patched fichier!!!');
    });
  });

  describe('DELETE /api/fichiers/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/fichiers/${newFichier._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when fichier does not exist', function(done) {
      request(app)
        .delete(`/api/fichiers/${newFichier._id}`)
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
