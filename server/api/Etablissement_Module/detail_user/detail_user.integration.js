'use strict';

/* globals describe, expect, it, beforeEach, afterEach */

var app = require('../..');
import request from 'supertest';

var newDetailUser;

describe('DetailUser API:', function() {
  describe('GET /api/detail_users', function() {
    var detailUsers;

    beforeEach(function(done) {
      request(app)
        .get('/api/detail_users')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          detailUsers = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      detailUsers.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/detail_users', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/detail_users')
        .send({
          name: 'New DetailUser',
          info: 'This is the brand new detailUser!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          newDetailUser = res.body;
          done();
        });
    });

    it('should respond with the newly created detailUser', function() {
      newDetailUser.name.should.equal('New DetailUser');
      newDetailUser.info.should.equal('This is the brand new detailUser!!!');
    });
  });

  describe('GET /api/detail_users/:id', function() {
    var detailUser;

    beforeEach(function(done) {
      request(app)
        .get(`/api/detail_users/${newDetailUser._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          detailUser = res.body;
          done();
        });
    });

    afterEach(function() {
      detailUser = {};
    });

    it('should respond with the requested detailUser', function() {
      detailUser.name.should.equal('New DetailUser');
      detailUser.info.should.equal('This is the brand new detailUser!!!');
    });
  });

  describe('PUT /api/detail_users/:id', function() {
    var updatedDetailUser;

    beforeEach(function(done) {
      request(app)
        .put(`/api/detail_users/${newDetailUser._id}`)
        .send({
          name: 'Updated DetailUser',
          info: 'This is the updated detailUser!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          updatedDetailUser = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedDetailUser = {};
    });

    it('should respond with the updated detailUser', function() {
      updatedDetailUser.name.should.equal('Updated DetailUser');
      updatedDetailUser.info.should.equal('This is the updated detailUser!!!');
    });

    it('should respond with the updated detailUser on a subsequent GET', function(done) {
      request(app)
        .get(`/api/detail_users/${newDetailUser._id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }
          let detailUser = res.body;

          detailUser.name.should.equal('Updated DetailUser');
          detailUser.info.should.equal('This is the updated detailUser!!!');

          done();
        });
    });
  });

  describe('PATCH /api/detail_users/:id', function() {
    var patchedDetailUser;

    beforeEach(function(done) {
      request(app)
        .patch(`/api/detail_users/${newDetailUser._id}`)
        .send([
          { op: 'replace', path: '/name', value: 'Patched DetailUser' },
          { op: 'replace', path: '/info', value: 'This is the patched detailUser!!!' }
        ])
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if(err) {
            return done(err);
          }
          patchedDetailUser = res.body;
          done();
        });
    });

    afterEach(function() {
      patchedDetailUser = {};
    });

    it('should respond with the patched detailUser', function() {
      patchedDetailUser.name.should.equal('Patched DetailUser');
      patchedDetailUser.info.should.equal('This is the patched detailUser!!!');
    });
  });

  describe('DELETE /api/detail_users/:id', function() {
    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete(`/api/detail_users/${newDetailUser._id}`)
        .expect(204)
        .end(err => {
          if(err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when detailUser does not exist', function(done) {
      request(app)
        .delete(`/api/detail_users/${newDetailUser._id}`)
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
