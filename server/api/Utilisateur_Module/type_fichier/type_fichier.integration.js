'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newTypeFichier;

describe('TypeFichier API:', function() {
  describe('GET /api/type_fichiers', function() {
    var typeFichiers;

    beforeEach(function(done) {
      request(app)
        .get('/api/type_fichiers')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          typeFichiers = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      typeFichiers.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/type_fichiers', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/type_fichiers')
        .send({
          name: 'New TypeFichier',
          info: 'This is the brand new typeFichier!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newTypeFichier = res.body;
          done();
        });
    });

    it('should respond with the newly created typeFichier', function() {
      newTypeFichier.name.should.equal('New TypeFichier');
      newTypeFichier.info.should.equal('This is the brand new typeFichier!!!');
    });
  });

  describe('GET /api/type_fichiers/:id', function() {
    var typeFichier;

    beforeEach(function(done) {
      request(app)
        .get(`/api/type_fichiers/${newTypeFichier._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          typeFichier = res.body;
          done();
        });
    });

    afterEach(function() {
      typeFichier = {};
    });

    it('should respond with the requested typeFichier', function() {
      typeFichier.name.should.equal('New TypeFichier');
      typeFichier.info.should.equal('This is the brand new typeFichier!!!');
    });
  });

  describe('PUT /api/type_fichiers/:id', function() {
    var updatedTypeFichier;

    beforeEach(function(done) {
      request(app)
        .put(`/api/type_fichiers/${newTypeFichier._id}`)
        .send({
          name: 'Updated TypeFichier',
          info: 'This is the updated typeFichier!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedTypeFichier = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedTypeFichier = {};
    });

    it('should respond with the updated typeFichier', function() {
      updatedTypeFichier.name.should.equal('Updated TypeFichier');
      updatedTypeFichier.info.should.equal('This is the updated typeFichier!!!');
    });

    it('should respond with the updated typeFichier on a subsequent GET', function(done) {
      request(app)
        .get(`/api/type_fichiers/${newTypeFichier._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let typeFichier = res.body;

          typeFichier.name.should.equal('Updated TypeFichier');
          typeFichier.info.should.equal('This is the updated typeFichier!!!');

          done();
        });
    });
  });

  describe('PATCH /api/type_fichiers/:id', function() {
    var patchedTypeFichier;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/type_fichiers/${newTypeFichier._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched TypeFichier' },
          { op: 'replace', path: '/info', value: 'This is the patched typeFichier!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedTypeFichier = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedTypeFichier = {};
    });

    it('should respond with the patched typeFichier', function() {
      patchedTypeFichier.name.should.equal('Patched TypeFichier');
      patchedTypeFichier.info.should.equal('This is the patched typeFichier!!!');
    });
  });

  describe('DELETE /api/type_fichiers/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/type_fichiers/${newTypeFichier._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when typeFichier does not exist', function(done) {
      request(app)
        .delete(`/api/type_fichiers/${newTypeFichier._id}`)
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
