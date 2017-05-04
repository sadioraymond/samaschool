'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newCours;

describe('Cours API:', function() {
  describe('GET /api/courss', function() {
    var courss;

    beforeEach(function(done) {
      request(app)
        .get('/api/courss')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          courss = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      courss.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/courss', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/courss')
        .send({
          name: 'New Cours',
          info: 'This is the brand new cours!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newCours = res.body;
          done();
        });
    });

    it('should respond with the newly created cours', function() {
      newCours.name.should.equal('New Cours');
      newCours.info.should.equal('This is the brand new cours!!!');
    });
  });

  describe('GET /api/courss/:id', function() {
    var cours;

    beforeEach(function(done) {
      request(app)
        .get(`/api/courss/${newCours._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          cours = res.body;
          done();
        });
    });

    afterEach(function() {
      cours = {};
    });

    it('should respond with the requested cours', function() {
      cours.name.should.equal('New Cours');
      cours.info.should.equal('This is the brand new cours!!!');
    });
  });

  describe('PUT /api/courss/:id', function() {
    var updatedCours;

    beforeEach(function(done) {
      request(app)
        .put(`/api/courss/${newCours._id}`)
        .send({
          name: 'Updated Cours',
          info: 'This is the updated cours!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedCours = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedCours = {};
    });

    it('should respond with the updated cours', function() {
      updatedCours.name.should.equal('Updated Cours');
      updatedCours.info.should.equal('This is the updated cours!!!');
    });

    it('should respond with the updated cours on a subsequent GET', function(done) {
      request(app)
        .get(`/api/courss/${newCours._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let cours = res.body;

          cours.name.should.equal('Updated Cours');
          cours.info.should.equal('This is the updated cours!!!');

          done();
        });
    });
  });

  describe('PATCH /api/courss/:id', function() {
    var patchedCours;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/courss/${newCours._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Cours' },
          { op: 'replace', path: '/info', value: 'This is the patched cours!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedCours = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedCours = {};
    });

    it('should respond with the patched cours', function() {
      patchedCours.name.should.equal('Patched Cours');
      patchedCours.info.should.equal('This is the patched cours!!!');
    });
  });

  describe('DELETE /api/courss/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/courss/${newCours._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when cours does not exist', function(done) {
      request(app)
        .delete(`/api/courss/${newCours._id}`)
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
