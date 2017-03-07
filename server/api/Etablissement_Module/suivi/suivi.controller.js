/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/suivis              ->  index
 * POST    /api/suivis              ->  create
 * GET     /api/suivis/:id          ->  show
 * PUT     /api/suivis/:id          ->  upsert
 * PATCH   /api/suivis/:id          ->  patch
 * DELETE  /api/suivis/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Suivi from './suivi.model';

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

// Gets a list of Suivis
export function index(req, res) {
  return Suivi.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Suivi from the DB
export function show(req, res) {
  return Suivi.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Suivi in the DB
export function create(req, res) {
  return Suivi.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given Suivi in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Suivi.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Suivi in the DB
export function patch(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Suivi.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Suivi from the DB
export function destroy(req, res) {
  return Suivi.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
