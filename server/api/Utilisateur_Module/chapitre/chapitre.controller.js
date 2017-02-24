/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/chapitres              ->  index
 * POST    /api/chapitres              ->  create
 * GET     /api/chapitres/:id          ->  show
 * PUT     /api/chapitres/:id          ->  upsert
 * PATCH   /api/chapitres/:id          ->  patch
 * DELETE  /api/chapitres/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Chapitre from './chapitre.model';

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

// Gets a list of Chapitres
export function index(req, res) {
  return Chapitre.find().populate('cours').exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Chapitre from the DB
export function show(req, res) {
  return Chapitre.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets all Chapitres related to a cours
export function getChapitreByCours(req, res) {
  return Chapitre.find({cours : req.params.cours}).populate('cours').exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Chapitre in the DB
export function create(req, res) {
  return Chapitre.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given Chapitre in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Chapitre.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Chapitre in the DB
export function patch(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Chapitre.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Chapitre from the DB
export function destroy(req, res) {
  return Chapitre.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
