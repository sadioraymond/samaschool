'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newFiliere;

describe('Filiere API:', function() {
  describe('GET /api/filieres', function() {
    var filieres;

    beforeEach(function(done) {
      request(app)
        .get('/api/filieres')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          filieres = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      filieres.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/filieres', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/filieres')
        .send({
          name: 'New Filiere',
          info: 'This is the brand new filiere!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newFiliere = res.body;
          done();
        });
    });

    it('should respond with the newly created filiere', function() {
      newFiliere.name.should.equal('New Filiere');
      newFiliere.info.should.equal('This is the brand new filiere!!!');
    });
  });

  describe('GET /api/filieres/:id', function() {
    var filiere;

    beforeEach(function(done) {
      request(app)
        .get(`/api/filieres/${newFiliere._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          filiere = res.body;
          done();
        });
    });

    afterEach(function() {
      filiere = {};
    });

    it('should respond with the requested filiere', function() {
      filiere.name.should.equal('New Filiere');
      filiere.info.should.equal('This is the brand new filiere!!!');
    });
  });

  describe('PUT /api/filieres/:id', function() {
    var updatedFiliere;

    beforeEach(function(done) {
      request(app)
        .put(`/api/filieres/${newFiliere._id}`)
        .send({
          name: 'Updated Filiere',
          info: 'This is the updated filiere!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedFiliere = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedFiliere = {};
    });

    it('should respond with the updated filiere', function() {
      updatedFiliere.name.should.equal('Updated Filiere');
      updatedFiliere.info.should.equal('This is the updated filiere!!!');
    });

    it('should respond with the updated filiere on a subsequent GET', function(done) {
      request(app)
        .get(`/api/filieres/${newFiliere._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let filiere = res.body;

          filiere.name.should.equal('Updated Filiere');
          filiere.info.should.equal('This is the updated filiere!!!');

          done();
        });
    });
  });

  describe('PATCH /api/filieres/:id', function() {
    var patchedFiliere;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/filieres/${newFiliere._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Filiere' },
          { op: 'replace', path: '/info', value: 'This is the patched filiere!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedFiliere = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedFiliere = {};
    });

    it('should respond with the patched filiere', function() {
      patchedFiliere.name.should.equal('Patched Filiere');
      patchedFiliere.info.should.equal('This is the patched filiere!!!');
    });
  });

  describe('DELETE /api/filieres/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/filieres/${newFiliere._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when filiere does not exist', function(done) {
      request(app)
        .delete(`/api/filieres/${newFiliere._id}`)
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
