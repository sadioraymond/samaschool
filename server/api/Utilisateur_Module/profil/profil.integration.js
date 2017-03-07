'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newProfil;

describe('Profil API:', function() {
  describe('GET /api/profils', function() {
    var profils;

    beforeEach(function(done) {
      request(app)
        .get('/api/profils')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          profils = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      profils.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/profils', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/profils')
        .send({
          name: 'New Profil',
          info: 'This is the brand new profil!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newProfil = res.body;
          done();
        });
    });

    it('should respond with the newly created profil', function() {
      newProfil.name.should.equal('New Profil');
      newProfil.info.should.equal('This is the brand new profil!!!');
    });
  });

  describe('GET /api/profils/:id', function() {
    var profil;

    beforeEach(function(done) {
      request(app)
        .get(`/api/profils/${newProfil._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          profil = res.body;
          done();
        });
    });

    afterEach(function() {
      profil = {};
    });

    it('should respond with the requested profil', function() {
      profil.name.should.equal('New Profil');
      profil.info.should.equal('This is the brand new profil!!!');
    });
  });

  describe('PUT /api/profils/:id', function() {
    var updatedProfil;

    beforeEach(function(done) {
      request(app)
        .put(`/api/profils/${newProfil._id}`)
        .send({
          name: 'Updated Profil',
          info: 'This is the updated profil!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedProfil = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedProfil = {};
    });

    it('should respond with the updated profil', function() {
      updatedProfil.name.should.equal('Updated Profil');
      updatedProfil.info.should.equal('This is the updated profil!!!');
    });

    it('should respond with the updated profil on a subsequent GET', function(done) {
      request(app)
        .get(`/api/profils/${newProfil._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let profil = res.body;

          profil.name.should.equal('Updated Profil');
          profil.info.should.equal('This is the updated profil!!!');

          done();
        });
    });
  });

  describe('PATCH /api/profils/:id', function() {
    var patchedProfil;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/profils/${newProfil._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Profil' },
          { op: 'replace', path: '/info', value: 'This is the patched profil!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedProfil = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedProfil = {};
    });

    it('should respond with the patched profil', function() {
      patchedProfil.name.should.equal('Patched Profil');
      patchedProfil.info.should.equal('This is the patched profil!!!');
    });
  });

  describe('DELETE /api/profils/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/profils/${newProfil._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when profil does not exist', function(done) {
      request(app)
        .delete(`/api/profils/${newProfil._id}`)
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
