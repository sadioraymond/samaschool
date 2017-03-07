'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newSuiviCoursClasse;

describe('SuiviCoursClasse API:', function() {
  describe('GET /api/suivi_cours_classes', function() {
    var suiviCoursClasses;

    beforeEach(function(done) {
      request(app)
        .get('/api/suivi_cours_classes')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          suiviCoursClasses = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      suiviCoursClasses.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/suivi_cours_classes', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/suivi_cours_classes')
        .send({
          name: 'New SuiviCoursClasse',
          info: 'This is the brand new suiviCoursClasse!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newSuiviCoursClasse = res.body;
          done();
        });
    });

    it('should respond with the newly created suiviCoursClasse', function() {
      newSuiviCoursClasse.name.should.equal('New SuiviCoursClasse');
      newSuiviCoursClasse.info.should.equal('This is the brand new suiviCoursClasse!!!');
    });
  });

  describe('GET /api/suivi_cours_classes/:id', function() {
    var suiviCoursClasse;

    beforeEach(function(done) {
      request(app)
        .get(`/api/suivi_cours_classes/${newSuiviCoursClasse._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          suiviCoursClasse = res.body;
          done();
        });
    });

    afterEach(function() {
      suiviCoursClasse = {};
    });

    it('should respond with the requested suiviCoursClasse', function() {
      suiviCoursClasse.name.should.equal('New SuiviCoursClasse');
      suiviCoursClasse.info.should.equal('This is the brand new suiviCoursClasse!!!');
    });
  });

  describe('PUT /api/suivi_cours_classes/:id', function() {
    var updatedSuiviCoursClasse;

    beforeEach(function(done) {
      request(app)
        .put(`/api/suivi_cours_classes/${newSuiviCoursClasse._id}`)
        .send({
          name: 'Updated SuiviCoursClasse',
          info: 'This is the updated suiviCoursClasse!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedSuiviCoursClasse = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedSuiviCoursClasse = {};
    });

    it('should respond with the updated suiviCoursClasse', function() {
      updatedSuiviCoursClasse.name.should.equal('Updated SuiviCoursClasse');
      updatedSuiviCoursClasse.info.should.equal('This is the updated suiviCoursClasse!!!');
    });

    it('should respond with the updated suiviCoursClasse on a subsequent GET', function(done) {
      request(app)
        .get(`/api/suivi_cours_classes/${newSuiviCoursClasse._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let suiviCoursClasse = res.body;

          suiviCoursClasse.name.should.equal('Updated SuiviCoursClasse');
          suiviCoursClasse.info.should.equal('This is the updated suiviCoursClasse!!!');

          done();
        });
    });
  });

  describe('PATCH /api/suivi_cours_classes/:id', function() {
    var patchedSuiviCoursClasse;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/suivi_cours_classes/${newSuiviCoursClasse._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched SuiviCoursClasse' },
          { op: 'replace', path: '/info', value: 'This is the patched suiviCoursClasse!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedSuiviCoursClasse = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedSuiviCoursClasse = {};
    });

    it('should respond with the patched suiviCoursClasse', function() {
      patchedSuiviCoursClasse.name.should.equal('Patched SuiviCoursClasse');
      patchedSuiviCoursClasse.info.should.equal('This is the patched suiviCoursClasse!!!');
    });
  });

  describe('DELETE /api/suivi_cours_classes/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/suivi_cours_classes/${newSuiviCoursClasse._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when suiviCoursClasse does not exist', function(done) {
      request(app)
        .delete(`/api/suivi_cours_classes/${newSuiviCoursClasse._id}`)
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
