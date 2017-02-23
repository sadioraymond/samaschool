'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newNiveau;

describe('Niveau API:', function() {
  describe('GET /api/niveaus', function() {
    var niveaus;

    beforeEach(function(done) {
      request(app)
        .get('/api/niveaus')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          niveaus = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      niveaus.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/niveaus', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/niveaus')
        .send({
          name: 'New Niveau',
          info: 'This is the brand new niveau!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newNiveau = res.body;
          done();
        });
    });

    it('should respond with the newly created niveau', function() {
      newNiveau.name.should.equal('New Niveau');
      newNiveau.info.should.equal('This is the brand new niveau!!!');
    });
  });

  describe('GET /api/niveaus/:id', function() {
    var niveau;

    beforeEach(function(done) {
      request(app)
        .get(`/api/niveaus/${newNiveau._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          niveau = res.body;
          done();
        });
    });

    afterEach(function() {
      niveau = {};
    });

    it('should respond with the requested niveau', function() {
      niveau.name.should.equal('New Niveau');
      niveau.info.should.equal('This is the brand new niveau!!!');
    });
  });

  describe('PUT /api/niveaus/:id', function() {
    var updatedNiveau;

    beforeEach(function(done) {
      request(app)
        .put(`/api/niveaus/${newNiveau._id}`)
        .send({
          name: 'Updated Niveau',
          info: 'This is the updated niveau!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedNiveau = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedNiveau = {};
    });

    it('should respond with the updated niveau', function() {
      updatedNiveau.name.should.equal('Updated Niveau');
      updatedNiveau.info.should.equal('This is the updated niveau!!!');
    });

    it('should respond with the updated niveau on a subsequent GET', function(done) {
      request(app)
        .get(`/api/niveaus/${newNiveau._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let niveau = res.body;

          niveau.name.should.equal('Updated Niveau');
          niveau.info.should.equal('This is the updated niveau!!!');

          done();
        });
    });
  });

  describe('PATCH /api/niveaus/:id', function() {
    var patchedNiveau;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/niveaus/${newNiveau._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Niveau' },
          { op: 'replace', path: '/info', value: 'This is the patched niveau!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedNiveau = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedNiveau = {};
    });

    it('should respond with the patched niveau', function() {
      patchedNiveau.name.should.equal('Patched Niveau');
      patchedNiveau.info.should.equal('This is the patched niveau!!!');
    });
  });

  describe('DELETE /api/niveaus/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/niveaus/${newNiveau._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when niveau does not exist', function(done) {
      request(app)
        .delete(`/api/niveaus/${newNiveau._id}`)
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
