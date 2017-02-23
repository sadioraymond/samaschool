'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newDetailProfil;

describe('DetailProfil API:', function() {
  describe('GET /api/detail_profils', function() {
    var detailProfils;

    beforeEach(function(done) {
      request(app)
        .get('/api/detail_profils')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          detailProfils = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      detailProfils.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/detail_profils', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/detail_profils')
        .send({
          name: 'New DetailProfil',
          info: 'This is the brand new detailProfil!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newDetailProfil = res.body;
          done();
        });
    });

    it('should respond with the newly created detailProfil', function() {
      newDetailProfil.name.should.equal('New DetailProfil');
      newDetailProfil.info.should.equal('This is the brand new detailProfil!!!');
    });
  });

  describe('GET /api/detail_profils/:id', function() {
    var detailProfil;

    beforeEach(function(done) {
      request(app)
        .get(`/api/detail_profils/${newDetailProfil._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          detailProfil = res.body;
          done();
        });
    });

    afterEach(function() {
      detailProfil = {};
    });

    it('should respond with the requested detailProfil', function() {
      detailProfil.name.should.equal('New DetailProfil');
      detailProfil.info.should.equal('This is the brand new detailProfil!!!');
    });
  });

  describe('PUT /api/detail_profils/:id', function() {
    var updatedDetailProfil;

    beforeEach(function(done) {
      request(app)
        .put(`/api/detail_profils/${newDetailProfil._id}`)
        .send({
          name: 'Updated DetailProfil',
          info: 'This is the updated detailProfil!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedDetailProfil = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedDetailProfil = {};
    });

    it('should respond with the updated detailProfil', function() {
      updatedDetailProfil.name.should.equal('Updated DetailProfil');
      updatedDetailProfil.info.should.equal('This is the updated detailProfil!!!');
    });

    it('should respond with the updated detailProfil on a subsequent GET', function(done) {
      request(app)
        .get(`/api/detail_profils/${newDetailProfil._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let detailProfil = res.body;

          detailProfil.name.should.equal('Updated DetailProfil');
          detailProfil.info.should.equal('This is the updated detailProfil!!!');

          done();
        });
    });
  });

  describe('PATCH /api/detail_profils/:id', function() {
    var patchedDetailProfil;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/detail_profils/${newDetailProfil._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched DetailProfil' },
          { op: 'replace', path: '/info', value: 'This is the patched detailProfil!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedDetailProfil = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedDetailProfil = {};
    });

    it('should respond with the patched detailProfil', function() {
      patchedDetailProfil.name.should.equal('Patched DetailProfil');
      patchedDetailProfil.info.should.equal('This is the patched detailProfil!!!');
    });
  });

  describe('DELETE /api/detail_profils/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/detail_profils/${newDetailProfil._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when detailProfil does not exist', function(done) {
      request(app)
        .delete(`/api/detail_profils/${newDetailProfil._id}`)
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
