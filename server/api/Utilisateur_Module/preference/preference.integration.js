'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newPreference;

describe('Preference API:', function() {
  describe('GET /api/preferences', function() {
    var preferences;

    beforeEach(function(done) {
      request(app)
        .get('/api/preferences')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          preferences = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      preferences.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/preferences', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/preferences')
        .send({
          name: 'New Preference',
          info: 'This is the brand new preference!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newPreference = res.body;
          done();
        });
    });

    it('should respond with the newly created preference', function() {
      newPreference.name.should.equal('New Preference');
      newPreference.info.should.equal('This is the brand new preference!!!');
    });
  });

  describe('GET /api/preferences/:id', function() {
    var preference;

    beforeEach(function(done) {
      request(app)
        .get(`/api/preferences/${newPreference._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          preference = res.body;
          done();
        });
    });

    afterEach(function() {
      preference = {};
    });

    it('should respond with the requested preference', function() {
      preference.name.should.equal('New Preference');
      preference.info.should.equal('This is the brand new preference!!!');
    });
  });

  describe('PUT /api/preferences/:id', function() {
    var updatedPreference;

    beforeEach(function(done) {
      request(app)
        .put(`/api/preferences/${newPreference._id}`)
        .send({
          name: 'Updated Preference',
          info: 'This is the updated preference!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedPreference = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedPreference = {};
    });

    it('should respond with the updated preference', function() {
      updatedPreference.name.should.equal('Updated Preference');
      updatedPreference.info.should.equal('This is the updated preference!!!');
    });

    it('should respond with the updated preference on a subsequent GET', function(done) {
      request(app)
        .get(`/api/preferences/${newPreference._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let preference = res.body;

          preference.name.should.equal('Updated Preference');
          preference.info.should.equal('This is the updated preference!!!');

          done();
        });
    });
  });

  describe('PATCH /api/preferences/:id', function() {
    var patchedPreference;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/preferences/${newPreference._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Preference' },
          { op: 'replace', path: '/info', value: 'This is the patched preference!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedPreference = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedPreference = {};
    });

    it('should respond with the patched preference', function() {
      patchedPreference.name.should.equal('Patched Preference');
      patchedPreference.info.should.equal('This is the patched preference!!!');
    });
  });

  describe('DELETE /api/preferences/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/preferences/${newPreference._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when preference does not exist', function(done) {
      request(app)
        .delete(`/api/preferences/${newPreference._id}`)
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
