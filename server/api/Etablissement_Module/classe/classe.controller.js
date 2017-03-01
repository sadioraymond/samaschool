/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/classes              ->  index
 * POST    /api/classes              ->  create
 * GET     /api/classes/:id          ->  show
 * PUT     /api/classes/:id          ->  upsert
 * PATCH   /api/classes/:id          ->  patch
 * DELETE  /api/classes/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Classe from './classe.model';

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

// Gets a list of Classes
export function index(req, res) {
  return Classe.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Classe from the DB
export function show(req, res) {
  return Classe.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets Classes by a niveau
export function getclasseByNiveau(req, res) {
  return Classe.find({niveau : req.params.niv}).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}


// Creates a new Classe in the DB
export function create(req, res) {
  return Classe.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given Classe in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Classe.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Classe in the DB
export function patch(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Classe.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Classe from the DB
export function destroy(req, res) {
  return Classe.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
