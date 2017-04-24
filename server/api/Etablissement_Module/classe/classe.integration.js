'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newClasse;

describe('Classe API:', function() {
  describe('GET /api/classes', function() {
    var classes;

    beforeEach(function(done) {
      request(app)
        .get('/api/classes')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          classes = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      classes.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/classes', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/classes')
        .send({
          name: 'New Classe',
          info: 'This is the brand new classe!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newClasse = res.body;
          done();
        });
    });

    it('should respond with the newly created classe', function() {
      newClasse.name.should.equal('New Classe');
      newClasse.info.should.equal('This is the brand new classe!!!');
    });
  });

  describe('GET /api/classes/:id', function() {
    var classe;

    beforeEach(function(done) {
      request(app)
        .get(`/api/classes/${newClasse._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          classe = res.body;
          done();
        });
    });

    afterEach(function() {
      classe = {};
    });

    it('should respond with the requested classe', function() {
      classe.name.should.equal('New Classe');
      classe.info.should.equal('This is the brand new classe!!!');
    });
  });

  describe('PUT /api/classes/:id', function() {
    var updatedClasse;

    beforeEach(function(done) {
      request(app)
        .put(`/api/classes/${newClasse._id}`)
        .send({
          name: 'Updated Classe',
          info: 'This is the updated classe!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedClasse = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedClasse = {};
    });

    it('should respond with the updated classe', function() {
      updatedClasse.name.should.equal('Updated Classe');
      updatedClasse.info.should.equal('This is the updated classe!!!');
    });

    it('should respond with the updated classe on a subsequent GET', function(done) {
      request(app)
        .get(`/api/classes/${newClasse._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let classe = res.body;

          classe.name.should.equal('Updated Classe');
          classe.info.should.equal('This is the updated classe!!!');

          done();
        });
    });
  });

  describe('PATCH /api/classes/:id', function() {
    var patchedClasse;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/classes/${newClasse._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Classe' },
          { op: 'replace', path: '/info', value: 'This is the patched classe!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedClasse = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedClasse = {};
    });

    it('should respond with the patched classe', function() {
      patchedClasse.name.should.equal('Patched Classe');
      patchedClasse.info.should.equal('This is the patched classe!!!');
    });
  });

  describe('DELETE /api/classes/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/classes/${newClasse._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when classe does not exist', function(done) {
      request(app)
        .delete(`/api/classes/${newClasse._id}`)
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
