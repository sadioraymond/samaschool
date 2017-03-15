'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newPublication;

describe('Publication API:', function() {
  describe('GET /api/publications', function() {
    var publications;

    beforeEach(function(done) {
      request(app)
        .get('/api/publications')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          publications = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      publications.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/publications', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/publications')
        .send({
          name: 'New Publication',
          info: 'This is the brand new publication!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newPublication = res.body;
          done();
        });
    });

    it('should respond with the newly created publication', function() {
      newPublication.name.should.equal('New Publication');
      newPublication.info.should.equal('This is the brand new publication!!!');
    });
  });

  describe('GET /api/publications/:id', function() {
    var publication;

    beforeEach(function(done) {
      request(app)
        .get(`/api/publications/${newPublication._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          publication = res.body;
          done();
        });
    });

    afterEach(function() {
      publication = {};
    });

    it('should respond with the requested publication', function() {
      publication.name.should.equal('New Publication');
      publication.info.should.equal('This is the brand new publication!!!');
    });
  });

  describe('PUT /api/publications/:id', function() {
    var updatedPublication;

    beforeEach(function(done) {
      request(app)
        .put(`/api/publications/${newPublication._id}`)
        .send({
          name: 'Updated Publication',
          info: 'This is the updated publication!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedPublication = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedPublication = {};
    });

    it('should respond with the updated publication', function() {
      updatedPublication.name.should.equal('Updated Publication');
      updatedPublication.info.should.equal('This is the updated publication!!!');
    });

    it('should respond with the updated publication on a subsequent GET', function(done) {
      request(app)
        .get(`/api/publications/${newPublication._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let publication = res.body;

          publication.name.should.equal('Updated Publication');
          publication.info.should.equal('This is the updated publication!!!');

          done();
        });
    });
  });

  describe('PATCH /api/publications/:id', function() {
    var patchedPublication;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/publications/${newPublication._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Publication' },
          { op: 'replace', path: '/info', value: 'This is the patched publication!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedPublication = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedPublication = {};
    });

    it('should respond with the patched publication', function() {
      patchedPublication.name.should.equal('Patched Publication');
      patchedPublication.info.should.equal('This is the patched publication!!!');
    });
  });

  describe('DELETE /api/publications/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/publications/${newPublication._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when publication does not exist', function(done) {
      request(app)
        .delete(`/api/publications/${newPublication._id}`)
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
