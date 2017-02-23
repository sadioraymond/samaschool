'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newDetailAnnonce;

describe('DetailAnnonce API:', function() {
  describe('GET /api/detail_annonces', function() {
    var detailAnnonces;

    beforeEach(function(done) {
      request(app)
        .get('/api/detail_annonces')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          detailAnnonces = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      detailAnnonces.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/detail_annonces', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/detail_annonces')
        .send({
          name: 'New DetailAnnonce',
          info: 'This is the brand new detailAnnonce!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newDetailAnnonce = res.body;
          done();
        });
    });

    it('should respond with the newly created detailAnnonce', function() {
      newDetailAnnonce.name.should.equal('New DetailAnnonce');
      newDetailAnnonce.info.should.equal('This is the brand new detailAnnonce!!!');
    });
  });

  describe('GET /api/detail_annonces/:id', function() {
    var detailAnnonce;

    beforeEach(function(done) {
      request(app)
        .get(`/api/detail_annonces/${newDetailAnnonce._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          detailAnnonce = res.body;
          done();
        });
    });

    afterEach(function() {
      detailAnnonce = {};
    });

    it('should respond with the requested detailAnnonce', function() {
      detailAnnonce.name.should.equal('New DetailAnnonce');
      detailAnnonce.info.should.equal('This is the brand new detailAnnonce!!!');
    });
  });

  describe('PUT /api/detail_annonces/:id', function() {
    var updatedDetailAnnonce;

    beforeEach(function(done) {
      request(app)
        .put(`/api/detail_annonces/${newDetailAnnonce._id}`)
        .send({
          name: 'Updated DetailAnnonce',
          info: 'This is the updated detailAnnonce!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedDetailAnnonce = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedDetailAnnonce = {};
    });

    it('should respond with the updated detailAnnonce', function() {
      updatedDetailAnnonce.name.should.equal('Updated DetailAnnonce');
      updatedDetailAnnonce.info.should.equal('This is the updated detailAnnonce!!!');
    });

    it('should respond with the updated detailAnnonce on a subsequent GET', function(done) {
      request(app)
        .get(`/api/detail_annonces/${newDetailAnnonce._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let detailAnnonce = res.body;

          detailAnnonce.name.should.equal('Updated DetailAnnonce');
          detailAnnonce.info.should.equal('This is the updated detailAnnonce!!!');

          done();
        });
    });
  });

  describe('PATCH /api/detail_annonces/:id', function() {
    var patchedDetailAnnonce;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/detail_annonces/${newDetailAnnonce._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched DetailAnnonce' },
          { op: 'replace', path: '/info', value: 'This is the patched detailAnnonce!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedDetailAnnonce = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedDetailAnnonce = {};
    });

    it('should respond with the patched detailAnnonce', function() {
      patchedDetailAnnonce.name.should.equal('Patched DetailAnnonce');
      patchedDetailAnnonce.info.should.equal('This is the patched detailAnnonce!!!');
    });
  });

  describe('DELETE /api/detail_annonces/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/detail_annonces/${newDetailAnnonce._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when detailAnnonce does not exist', function(done) {
      request(app)
        .delete(`/api/detail_annonces/${newDetailAnnonce._id}`)
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
