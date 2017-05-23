/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/detail_options              ->  index
 * POST    /api/detail_options              ->  create
 * GET     /api/detail_options/:id          ->  show
 * PUT     /api/detail_options/:id          ->  upsert
 * PATCH   /api/detail_options/:id          ->  patch
 * DELETE  /api/detail_options/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import DetailOption from './detail_option.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function patchUpdates(patches) {
  return function(entity) {
    try {
      jsonpatch.apply(entity, patches, /*validate*/ true);
    } catch(err) {
      return Promise.reject(err);
    }

    return entity.save();
  };
}

function removeEntity(res) {
  return function(entity) {
    if(entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if(!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of DetailOptions
export function index(req, res) {
  return DetailOption.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single DetailOption from the DB
export function show(req, res) {
  return DetailOption.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new DetailOption in the DB
export function create(req, res) {
  return DetailOption.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given DetailOption in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return DetailOption.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing DetailOption in the DB
export function patch(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return DetailOption.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a DetailOption from the DB
export function destroy(req, res) {
  return DetailOption.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
