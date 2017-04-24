'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newChapitre;

describe('Chapitre API:', function() {
  describe('GET /api/chapitres', function() {
    var chapitres;

    beforeEach(function(done) {
      request(app)
        .get('/api/chapitres')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          chapitres = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      chapitres.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/chapitres', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/chapitres')
        .send({
          name: 'New Chapitre',
          info: 'This is the brand new chapitre!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newChapitre = res.body;
          done();
        });
    });

    it('should respond with the newly created chapitre', function() {
      newChapitre.name.should.equal('New Chapitre');
      newChapitre.info.should.equal('This is the brand new chapitre!!!');
    });
  });

  describe('GET /api/chapitres/:id', function() {
    var chapitre;

    beforeEach(function(done) {
      request(app)
        .get(`/api/chapitres/${newChapitre._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          chapitre = res.body;
          done();
        });
    });

    afterEach(function() {
      chapitre = {};
    });

    it('should respond with the requested chapitre', function() {
      chapitre.name.should.equal('New Chapitre');
      chapitre.info.should.equal('This is the brand new chapitre!!!');
    });
  });

  describe('PUT /api/chapitres/:id', function() {
    var updatedChapitre;

    beforeEach(function(done) {
      request(app)
        .put(`/api/chapitres/${newChapitre._id}`)
        .send({
          name: 'Updated Chapitre',
          info: 'This is the updated chapitre!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedChapitre = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedChapitre = {};
    });

    it('should respond with the updated chapitre', function() {
      updatedChapitre.name.should.equal('Updated Chapitre');
      updatedChapitre.info.should.equal('This is the updated chapitre!!!');
    });

    it('should respond with the updated chapitre on a subsequent GET', function(done) {
      request(app)
        .get(`/api/chapitres/${newChapitre._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let chapitre = res.body;

          chapitre.name.should.equal('Updated Chapitre');
          chapitre.info.should.equal('This is the updated chapitre!!!');

          done();
        });
    });
  });

  describe('PATCH /api/chapitres/:id', function() {
    var patchedChapitre;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/chapitres/${newChapitre._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Chapitre' },
          { op: 'replace', path: '/info', value: 'This is the patched chapitre!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedChapitre = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedChapitre = {};
    });

    it('should respond with the patched chapitre', function() {
      patchedChapitre.name.should.equal('Patched Chapitre');
      patchedChapitre.info.should.equal('This is the patched chapitre!!!');
    });
  });

  describe('DELETE /api/chapitres/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/chapitres/${newChapitre._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when chapitre does not exist', function(done) {
      request(app)
        .delete(`/api/chapitres/${newChapitre._id}`)
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
