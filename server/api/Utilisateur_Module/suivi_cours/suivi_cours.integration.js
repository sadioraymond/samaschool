'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newSuiviCours;

describe('SuiviCours API:', function() {
  describe('GET /api/suivi_courss', function() {
    var suiviCourss;

    beforeEach(function(done) {
      request(app)
        .get('/api/suivi_courss')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          suiviCourss = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      suiviCourss.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/suivi_courss', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/suivi_courss')
        .send({
          name: 'New SuiviCours',
          info: 'This is the brand new suiviCours!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newSuiviCours = res.body;
          done();
        });
    });

    it('should respond with the newly created suiviCours', function() {
      newSuiviCours.name.should.equal('New SuiviCours');
      newSuiviCours.info.should.equal('This is the brand new suiviCours!!!');
    });
  });

  describe('GET /api/suivi_courss/:id', function() {
    var suiviCours;

    beforeEach(function(done) {
      request(app)
        .get(`/api/suivi_courss/${newSuiviCours._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          suiviCours = res.body;
          done();
        });
    });

    afterEach(function() {
      suiviCours = {};
    });

    it('should respond with the requested suiviCours', function() {
      suiviCours.name.should.equal('New SuiviCours');
      suiviCours.info.should.equal('This is the brand new suiviCours!!!');
    });
  });

  describe('PUT /api/suivi_courss/:id', function() {
    var updatedSuiviCours;

    beforeEach(function(done) {
      request(app)
        .put(`/api/suivi_courss/${newSuiviCours._id}`)
        .send({
          name: 'Updated SuiviCours',
          info: 'This is the updated suiviCours!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedSuiviCours = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedSuiviCours = {};
    });

    it('should respond with the updated suiviCours', function() {
      updatedSuiviCours.name.should.equal('Updated SuiviCours');
      updatedSuiviCours.info.should.equal('This is the updated suiviCours!!!');
    });

    it('should respond with the updated suiviCours on a subsequent GET', function(done) {
      request(app)
        .get(`/api/suivi_courss/${newSuiviCours._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let suiviCours = res.body;

          suiviCours.name.should.equal('Updated SuiviCours');
          suiviCours.info.should.equal('This is the updated suiviCours!!!');

          done();
        });
    });
  });

  describe('PATCH /api/suivi_courss/:id', function() {
    var patchedSuiviCours;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/suivi_courss/${newSuiviCours._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched SuiviCours' },
          { op: 'replace', path: '/info', value: 'This is the patched suiviCours!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedSuiviCours = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedSuiviCours = {};
    });

    it('should respond with the patched suiviCours', function() {
      patchedSuiviCours.name.should.equal('Patched SuiviCours');
      patchedSuiviCours.info.should.equal('This is the patched suiviCours!!!');
    });
  });

  describe('DELETE /api/suivi_courss/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/suivi_courss/${newSuiviCours._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when suiviCours does not exist', function(done) {
      request(app)
        .delete(`/api/suivi_courss/${newSuiviCours._id}`)
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
