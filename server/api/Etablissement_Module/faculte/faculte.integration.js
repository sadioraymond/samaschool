'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newFaculte;

describe('Faculte API:', function() {
  describe('GET /api/facultes', function() {
    var facultes;

    beforeEach(function(done) {
      request(app)
        .get('/api/facultes')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          facultes = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      facultes.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/facultes', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/facultes')
        .send({
          name: 'New Faculte',
          info: 'This is the brand new faculte!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newFaculte = res.body;
          done();
        });
    });

    it('should respond with the newly created faculte', function() {
      newFaculte.name.should.equal('New Faculte');
      newFaculte.info.should.equal('This is the brand new faculte!!!');
    });
  });

  describe('GET /api/facultes/:id', function() {
    var faculte;

    beforeEach(function(done) {
      request(app)
        .get(`/api/facultes/${newFaculte._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          faculte = res.body;
          done();
        });
    });

    afterEach(function() {
      faculte = {};
    });

    it('should respond with the requested faculte', function() {
      faculte.name.should.equal('New Faculte');
      faculte.info.should.equal('This is the brand new faculte!!!');
    });
  });

  describe('PUT /api/facultes/:id', function() {
    var updatedFaculte;

    beforeEach(function(done) {
      request(app)
        .put(`/api/facultes/${newFaculte._id}`)
        .send({
          name: 'Updated Faculte',
          info: 'This is the updated faculte!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedFaculte = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedFaculte = {};
    });

    it('should respond with the updated faculte', function() {
      updatedFaculte.name.should.equal('Updated Faculte');
      updatedFaculte.info.should.equal('This is the updated faculte!!!');
    });

    it('should respond with the updated faculte on a subsequent GET', function(done) {
      request(app)
        .get(`/api/facultes/${newFaculte._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let faculte = res.body;

          faculte.name.should.equal('Updated Faculte');
          faculte.info.should.equal('This is the updated faculte!!!');

          done();
        });
    });
  });

  describe('PATCH /api/facultes/:id', function() {
    var patchedFaculte;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/facultes/${newFaculte._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Faculte' },
          { op: 'replace', path: '/info', value: 'This is the patched faculte!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedFaculte = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedFaculte = {};
    });

    it('should respond with the patched faculte', function() {
      patchedFaculte.name.should.equal('Patched Faculte');
      patchedFaculte.info.should.equal('This is the patched faculte!!!');
    });
  });

  describe('DELETE /api/facultes/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/facultes/${newFaculte._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when faculte does not exist', function(done) {
      request(app)
        .delete(`/api/facultes/${newFaculte._id}`)
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
