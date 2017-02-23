'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newCycle;

describe('Cycle API:', function() {
  describe('GET /api/cycles', function() {
    var cycles;

    beforeEach(function(done) {
      request(app)
        .get('/api/cycles')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          cycles = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      cycles.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/cycles', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/cycles')
        .send({
          name: 'New Cycle',
          info: 'This is the brand new cycle!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newCycle = res.body;
          done();
        });
    });

    it('should respond with the newly created cycle', function() {
      newCycle.name.should.equal('New Cycle');
      newCycle.info.should.equal('This is the brand new cycle!!!');
    });
  });

  describe('GET /api/cycles/:id', function() {
    var cycle;

    beforeEach(function(done) {
      request(app)
        .get(`/api/cycles/${newCycle._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          cycle = res.body;
          done();
        });
    });

    afterEach(function() {
      cycle = {};
    });

    it('should respond with the requested cycle', function() {
      cycle.name.should.equal('New Cycle');
      cycle.info.should.equal('This is the brand new cycle!!!');
    });
  });

  describe('PUT /api/cycles/:id', function() {
    var updatedCycle;

    beforeEach(function(done) {
      request(app)
        .put(`/api/cycles/${newCycle._id}`)
        .send({
          name: 'Updated Cycle',
          info: 'This is the updated cycle!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedCycle = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedCycle = {};
    });

    it('should respond with the updated cycle', function() {
      updatedCycle.name.should.equal('Updated Cycle');
      updatedCycle.info.should.equal('This is the updated cycle!!!');
    });

    it('should respond with the updated cycle on a subsequent GET', function(done) {
      request(app)
        .get(`/api/cycles/${newCycle._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let cycle = res.body;

          cycle.name.should.equal('Updated Cycle');
          cycle.info.should.equal('This is the updated cycle!!!');

          done();
        });
    });
  });

  describe('PATCH /api/cycles/:id', function() {
    var patchedCycle;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/cycles/${newCycle._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched Cycle' },
          { op: 'replace', path: '/info', value: 'This is the patched cycle!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedCycle = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedCycle = {};
    });

    it('should respond with the patched cycle', function() {
      patchedCycle.name.should.equal('Patched Cycle');
      patchedCycle.info.should.equal('This is the patched cycle!!!');
    });
  });

  describe('DELETE /api/cycles/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/cycles/${newCycle._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when cycle does not exist', function(done) {
      request(app)
        .delete(`/api/cycles/${newCycle._id}`)
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
