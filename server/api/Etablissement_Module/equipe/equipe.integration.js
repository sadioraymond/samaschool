'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newEquipe;

describe('Equipe API:', function() {
  describe('GET /api/equipes', function() {
    var equipes;

    beforeEach(function(done) {
      request(app)
        .get('/api/equipes')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          equipes = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      equipes.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/equipes', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/equipes')
        .send({
          name: 'New Equipe',
          info: 'This is the brand new equipe!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newEquipe = res.body;
          done();
        });
    });

    it('should respond with the newly created equipe', function() {
      newEquipe.name.should.equal('New Equipe');
      newEquipe.info.should.equal('This is the brand new equipe!!!');
    });
  });

  describe('GET /api/equipes/:id', function() {
    var equipe;

    beforeEach(function(done) {
      request(app)
        .get(`/api/equipes/${newEquipe._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          equipe = res.body;
          done();
        });
    });

    afterEach(function() {
      equipe = {};
    });

    it('should respond with the requested equipe', function() {
      equipe.name.should.equal('New Equipe');
      equipe.info.should.equal('This is the brand new equipe!!!');
    });
  });

  describe('PUT /api/equipes/:id', function() {
    var updatedEquipe;

    beforeEach(function(done) {
      request(app)
        .put(`/api/equipes/${newEquipe._id}`)
        .send({
          name: 'Updated Equipe',
          info: 'This is the updated equipe!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedEquipe = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedEquipe = {};
    });

    it('should respond with the updated equipe', function() {
      updatedEquipe.name.should.equal('Updated Equipe');
      updatedEquipe.info.should.equal('This is the updated equipe!!!');
    });

    it('should respond with the updated equipe on a subsequent GET', function(done) {
      request(app)
        .get(`/api/equipes/${newEquipe._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let equipe = res.body;

          equipe.name.should.equal('Updated Equipe');
          equipe.info.should.equal('This is the updated equipe!!!');

          done();
        });
    });
  });

  describe('PATCH /api/equipes/:id', function() {
    var patchedEquipe;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/equipes/${newEquipe._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Equipe' },
          { op: 'replace', path: '/info', value: 'This is the patched equipe!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedEquipe = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedEquipe = {};
    });

    it('should respond with the patched equipe', function() {
      patchedEquipe.name.should.equal('Patched Equipe');
      patchedEquipe.info.should.equal('This is the patched equipe!!!');
    });
  });

  describe('DELETE /api/equipes/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/equipes/${newEquipe._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when equipe does not exist', function(done) {
      request(app)
        .delete(`/api/equipes/${newEquipe._id}`)
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
