'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newExercice;

describe('Exercice API:', function() {
  describe('GET /api/exercices', function() {
    var exercices;

    beforeEach(function(done) {
      request(app)
        .get('/api/exercices')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          exercices = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      exercices.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/exercices', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/exercices')
        .send({
          name: 'New Exercice',
          info: 'This is the brand new exercice!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newExercice = res.body;
          done();
        });
    });

    it('should respond with the newly created exercice', function() {
      newExercice.name.should.equal('New Exercice');
      newExercice.info.should.equal('This is the brand new exercice!!!');
    });
  });

  describe('GET /api/exercices/:id', function() {
    var exercice;

    beforeEach(function(done) {
      request(app)
        .get(`/api/exercices/${newExercice._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          exercice = res.body;
          done();
        });
    });

    afterEach(function() {
      exercice = {};
    });

    it('should respond with the requested exercice', function() {
      exercice.name.should.equal('New Exercice');
      exercice.info.should.equal('This is the brand new exercice!!!');
    });
  });

  describe('PUT /api/exercices/:id', function() {
    var updatedExercice;

    beforeEach(function(done) {
      request(app)
        .put(`/api/exercices/${newExercice._id}`)
        .send({
          name: 'Updated Exercice',
          info: 'This is the updated exercice!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedExercice = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedExercice = {};
    });

    it('should respond with the updated exercice', function() {
      updatedExercice.name.should.equal('Updated Exercice');
      updatedExercice.info.should.equal('This is the updated exercice!!!');
    });

    it('should respond with the updated exercice on a subsequent GET', function(done) {
      request(app)
        .get(`/api/exercices/${newExercice._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let exercice = res.body;

          exercice.name.should.equal('Updated Exercice');
          exercice.info.should.equal('This is the updated exercice!!!');

          done();
        });
    });
  });

  describe('PATCH /api/exercices/:id', function() {
    var patchedExercice;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/exercices/${newExercice._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Exercice' },
          { op: 'replace', path: '/info', value: 'This is the patched exercice!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedExercice = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedExercice = {};
    });

    it('should respond with the patched exercice', function() {
      patchedExercice.name.should.equal('Patched Exercice');
      patchedExercice.info.should.equal('This is the patched exercice!!!');
    });
  });

  describe('DELETE /api/exercices/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/exercices/${newExercice._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when exercice does not exist', function(done) {
      request(app)
        .delete(`/api/exercices/${newExercice._id}`)
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
