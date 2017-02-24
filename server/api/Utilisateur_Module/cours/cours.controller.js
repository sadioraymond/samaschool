/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/courss              ->  index
 * POST    /api/courss              ->  create
 * GET     /api/courss/:id          ->  show
 * PUT     /api/courss/:id          ->  upsert
 * PATCH   /api/courss/:id          ->  patch
 * DELETE  /api/courss/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Cours from './cours.model';

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

// Gets a list of Courss
export function index(req, res) {
  return Cours.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Cours from the DB
export function show(req, res) {
  return Cours.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets all Cours related to a SousCategorie
export function getCoursBySousCat(req, res) {
  return Cours.find({sous_categorie : req.params.scat}).populate().exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}


// Creates a new Cours in the DB
export function create(req, res) {
  return Cours.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given Cours in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Cours.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Cours in the DB
export function patch(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return Cours.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Cours from the DB
export function destroy(req, res) {
  return Cours.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}