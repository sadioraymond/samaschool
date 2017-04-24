'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newAnnonce;

describe('Annonce API:', function() {
  describe('GET /api/annonces', function() {
    var annonces;

    beforeEach(function(done) {
      request(app)
        .get('/api/annonces')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          annonces = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      annonces.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/annonces', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/annonces')
        .send({
          name: 'New Annonce',
          info: 'This is the brand new annonce!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newAnnonce = res.body;
          done();
        });
    });

    it('should respond with the newly created annonce', function() {
      newAnnonce.name.should.equal('New Annonce');
      newAnnonce.info.should.equal('This is the brand new annonce!!!');
    });
  });

  describe('GET /api/annonces/:id', function() {
    var annonce;

    beforeEach(function(done) {
      request(app)
        .get(`/api/annonces/${newAnnonce._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          annonce = res.body;
          done();
        });
    });

    afterEach(function() {
      annonce = {};
    });

    it('should respond with the requested annonce', function() {
      annonce.name.should.equal('New Annonce');
      annonce.info.should.equal('This is the brand new annonce!!!');
    });
  });

  describe('PUT /api/annonces/:id', function() {
    var updatedAnnonce;

    beforeEach(function(done) {
      request(app)
        .put(`/api/annonces/${newAnnonce._id}`)
        .send({
          name: 'Updated Annonce',
          info: 'This is the updated annonce!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedAnnonce = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedAnnonce = {};
    });

    it('should respond with the updated annonce', function() {
      updatedAnnonce.name.should.equal('Updated Annonce');
      updatedAnnonce.info.should.equal('This is the updated annonce!!!');
    });

    it('should respond with the updated annonce on a subsequent GET', function(done) {
      request(app)
        .get(`/api/annonces/${newAnnonce._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let annonce = res.body;

          annonce.name.should.equal('Updated Annonce');
          annonce.info.should.equal('This is the updated annonce!!!');

          done();
        });
    });
  });

  describe('PATCH /api/annonces/:id', function() {
    var patchedAnnonce;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/annonces/${newAnnonce._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Annonce' },
          { op: 'replace', path: '/info', value: 'This is the patched annonce!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedAnnonce = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedAnnonce = {};
    });

    it('should respond with the patched annonce', function() {
      patchedAnnonce.name.should.equal('Patched Annonce');
      patchedAnnonce.info.should.equal('This is the patched annonce!!!');
    });
  });

  describe('DELETE /api/annonces/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/annonces/${newAnnonce._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when annonce does not exist', function(done) {
      request(app)
        .delete(`/api/annonces/${newAnnonce._id}`)
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
