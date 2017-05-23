'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newDetailCycle;

describe('DetailCycle API:', function() {
  describe('GET /api/detail_cycles', function() {
    var detailCycles;

    beforeEach(function(done) {
      request(app)
        .get('/api/detail_cycles')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          detailCycles = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      detailCycles.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/detail_cycles', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/detail_cycles')
        .send({
          name: 'New DetailCycle',
          info: 'This is the brand new detailCycle!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newDetailCycle = res.body;
          done();
        });
    });

    it('should respond with the newly created detailCycle', function() {
      newDetailCycle.name.should.equal('New DetailCycle');
      newDetailCycle.info.should.equal('This is the brand new detailCycle!!!');
    });
  });

  describe('GET /api/detail_cycles/:id', function() {
    var detailCycle;

    beforeEach(function(done) {
      request(app)
        .get(`/api/detail_cycles/${newDetailCycle._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          detailCycle = res.body;
          done();
        });
    });

    afterEach(function() {
      detailCycle = {};
    });

    it('should respond with the requested detailCycle', function() {
      detailCycle.name.should.equal('New DetailCycle');
      detailCycle.info.should.equal('This is the brand new detailCycle!!!');
    });
  });

  describe('PUT /api/detail_cycles/:id', function() {
    var updatedDetailCycle;

    beforeEach(function(done) {
      request(app)
        .put(`/api/detail_cycles/${newDetailCycle._id}`)
        .send({
          name: 'Updated DetailCycle',
          info: 'This is the updated detailCycle!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedDetailCycle = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedDetailCycle = {};
    });

    it('should respond with the updated detailCycle', function() {
      updatedDetailCycle.name.should.equal('Updated DetailCycle');
      updatedDetailCycle.info.should.equal('This is the updated detailCycle!!!');
    });

    it('should respond with the updated detailCycle on a subsequent GET', function(done) {
      request(app)
        .get(`/api/detail_cycles/${newDetailCycle._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let detailCycle = res.body;

          detailCycle.name.should.equal('Updated DetailCycle');
          detailCycle.info.should.equal('This is the updated detailCycle!!!');

          done();
        });
    });
  });

  describe('PATCH /api/detail_cycles/:id', function() {
    var patchedDetailCycle;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/detail_cycles/${newDetailCycle._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched DetailCycle' },
          { op: 'replace', path: '/info', value: 'This is the patched detailCycle!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedDetailCycle = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedDetailCycle = {};
    });

    it('should respond with the patched detailCycle', function() {
      patchedDetailCycle.name.should.equal('Patched DetailCycle');
      patchedDetailCycle.info.should.equal('This is the patched detailCycle!!!');
    });
  });

  describe('DELETE /api/detail_cycles/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/detail_cycles/${newDetailCycle._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when detailCycle does not exist', function(done) {
      request(app)
        .delete(`/api/detail_cycles/${newDetailCycle._id}`)
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
