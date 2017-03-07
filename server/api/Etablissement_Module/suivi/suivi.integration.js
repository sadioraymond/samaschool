'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newSuivi;

describe('Suivi API:', function() {
  describe('GET /api/suivis', function() {
    var suivis;

    beforeEach(function(done) {
      request(app)
        .get('/api/suivis')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          suivis = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      suivis.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/suivis', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/suivis')
        .send({
          name: 'New Suivi',
          info: 'This is the brand new suivi!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newSuivi = res.body;
          done();
        });
    });

    it('should respond with the newly created suivi', function() {
      newSuivi.name.should.equal('New Suivi');
      newSuivi.info.should.equal('This is the brand new suivi!!!');
    });
  });

  describe('GET /api/suivis/:id', function() {
    var suivi;

    beforeEach(function(done) {
      request(app)
        .get(`/api/suivis/${newSuivi._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          suivi = res.body;
          done();
        });
    });

    afterEach(function() {
      suivi = {};
    });

    it('should respond with the requested suivi', function() {
      suivi.name.should.equal('New Suivi');
      suivi.info.should.equal('This is the brand new suivi!!!');
    });
  });

  describe('PUT /api/suivis/:id', function() {
    var updatedSuivi;

    beforeEach(function(done) {
      request(app)
        .put(`/api/suivis/${newSuivi._id}`)
        .send({
          name: 'Updated Suivi',
          info: 'This is the updated suivi!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedSuivi = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedSuivi = {};
    });

    it('should respond with the updated suivi', function() {
      updatedSuivi.name.should.equal('Updated Suivi');
      updatedSuivi.info.should.equal('This is the updated suivi!!!');
    });

    it('should respond with the updated suivi on a subsequent GET', function(done) {
      request(app)
        .get(`/api/suivis/${newSuivi._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let suivi = res.body;

          suivi.name.should.equal('Updated Suivi');
          suivi.info.should.equal('This is the updated suivi!!!');

          done();
        });
    });
  });

  describe('PATCH /api/suivis/:id', function() {
    var patchedSuivi;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/suivis/${newSuivi._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Suivi' },
          { op: 'replace', path: '/info', value: 'This is the patched suivi!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedSuivi = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedSuivi = {};
    });

    it('should respond with the patched suivi', function() {
      patchedSuivi.name.should.equal('Patched Suivi');
      patchedSuivi.info.should.equal('This is the patched suivi!!!');
    });
  });

  describe('DELETE /api/suivis/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/suivis/${newSuivi._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when suivi does not exist', function(done) {
      request(app)
        .delete(`/api/suivis/${newSuivi._id}`)
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
