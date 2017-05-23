'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newDetailOption;

describe('DetailOption API:', function() {
  describe('GET /api/detail_options', function() {
    var detailOptions;

    beforeEach(function(done) {
      request(app)
        .get('/api/detail_options')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          detailOptions = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      detailOptions.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/detail_options', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/detail_options')
        .send({
          name: 'New DetailOption',
          info: 'This is the brand new detailOption!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newDetailOption = res.body;
          done();
        });
    });

    it('should respond with the newly created detailOption', function() {
      newDetailOption.name.should.equal('New DetailOption');
      newDetailOption.info.should.equal('This is the brand new detailOption!!!');
    });
  });

  describe('GET /api/detail_options/:id', function() {
    var detailOption;

    beforeEach(function(done) {
      request(app)
        .get(`/api/detail_options/${newDetailOption._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          detailOption = res.body;
          done();
        });
    });

    afterEach(function() {
      detailOption = {};
    });

    it('should respond with the requested detailOption', function() {
      detailOption.name.should.equal('New DetailOption');
      detailOption.info.should.equal('This is the brand new detailOption!!!');
    });
  });

  describe('PUT /api/detail_options/:id', function() {
    var updatedDetailOption;

    beforeEach(function(done) {
      request(app)
        .put(`/api/detail_options/${newDetailOption._id}`)
        .send({
          name: 'Updated DetailOption',
          info: 'This is the updated detailOption!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedDetailOption = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedDetailOption = {};
    });

    it('should respond with the updated detailOption', function() {
      updatedDetailOption.name.should.equal('Updated DetailOption');
      updatedDetailOption.info.should.equal('This is the updated detailOption!!!');
    });

    it('should respond with the updated detailOption on a subsequent GET', function(done) {
      request(app)
        .get(`/api/detail_options/${newDetailOption._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let detailOption = res.body;

          detailOption.name.should.equal('Updated DetailOption');
          detailOption.info.should.equal('This is the updated detailOption!!!');

          done();
        });
    });
  });

  describe('PATCH /api/detail_options/:id', function() {
    var patchedDetailOption;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/detail_options/${newDetailOption._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched DetailOption' },
          { op: 'replace', path: '/info', value: 'This is the patched detailOption!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedDetailOption = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedDetailOption = {};
    });

    it('should respond with the patched detailOption', function() {
      patchedDetailOption.name.should.equal('Patched DetailOption');
      patchedDetailOption.info.should.equal('This is the patched detailOption!!!');
    });
  });

  describe('DELETE /api/detail_options/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/detail_options/${newDetailOption._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when detailOption does not exist', function(done) {
      request(app)
        .delete(`/api/detail_options/${newDetailOption._id}`)
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
