'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newDetailClasse;

describe('DetailClasse API:', function() {
  describe('GET /api/detail_classes', function() {
    var detailClasses;

    beforeEach(function(done) {
      request(app)
        .get('/api/detail_classes')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          detailClasses = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      detailClasses.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/detail_classes', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/detail_classes')
        .send({
          name: 'New DetailClasse',
          info: 'This is the brand new detailClasse!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newDetailClasse = res.body;
          done();
        });
    });

    it('should respond with the newly created detailClasse', function() {
      newDetailClasse.name.should.equal('New DetailClasse');
      newDetailClasse.info.should.equal('This is the brand new detailClasse!!!');
    });
  });

  describe('GET /api/detail_classes/:id', function() {
    var detailClasse;

    beforeEach(function(done) {
      request(app)
        .get(`/api/detail_classes/${newDetailClasse._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          detailClasse = res.body;
          done();
        });
    });

    afterEach(function() {
      detailClasse = {};
    });

    it('should respond with the requested detailClasse', function() {
      detailClasse.name.should.equal('New DetailClasse');
      detailClasse.info.should.equal('This is the brand new detailClasse!!!');
    });
  });

  describe('PUT /api/detail_classes/:id', function() {
    var updatedDetailClasse;

    beforeEach(function(done) {
      request(app)
        .put(`/api/detail_classes/${newDetailClasse._id}`)
        .send({
          name: 'Updated DetailClasse',
          info: 'This is the updated detailClasse!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedDetailClasse = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedDetailClasse = {};
    });

    it('should respond with the updated detailClasse', function() {
      updatedDetailClasse.name.should.equal('Updated DetailClasse');
      updatedDetailClasse.info.should.equal('This is the updated detailClasse!!!');
    });

    it('should respond with the updated detailClasse on a subsequent GET', function(done) {
      request(app)
        .get(`/api/detail_classes/${newDetailClasse._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let detailClasse = res.body;

          detailClasse.name.should.equal('Updated DetailClasse');
          detailClasse.info.should.equal('This is the updated detailClasse!!!');

          done();
        });
    });
  });

  describe('PATCH /api/detail_classes/:id', function() {
    var patchedDetailClasse;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/detail_classes/${newDetailClasse._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched DetailClasse' },
          { op: 'replace', path: '/info', value: 'This is the patched detailClasse!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedDetailClasse = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedDetailClasse = {};
    });

    it('should respond with the patched detailClasse', function() {
      patchedDetailClasse.name.should.equal('Patched DetailClasse');
      patchedDetailClasse.info.should.equal('This is the patched detailClasse!!!');
    });
  });

  describe('DELETE /api/detail_classes/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/detail_classes/${newDetailClasse._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when detailClasse does not exist', function(done) {
      request(app)
        .delete(`/api/detail_classes/${newDetailClasse._id}`)
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
