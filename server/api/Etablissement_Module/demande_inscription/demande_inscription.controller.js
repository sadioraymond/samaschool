/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/demande_inscriptions              ->  index
 * POST    /api/demande_inscriptions              ->  create
 * GET     /api/demande_inscriptions/:id          ->  show
 * PUT     /api/demande_inscriptions/:id          ->  upsert
 * PATCH   /api/demande_inscriptions/:id          ->  patch
 * DELETE  /api/demande_inscriptions/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import DemandeInscription from './demande_inscription.model';

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

// Gets a list of DemandeInscriptions
export function index(req, res) {
  return DemandeInscription.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single DemandeInscription from the DB
export function show(req, res) {
  return DemandeInscription.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new DemandeInscription in the DB
export function create(req, res) {
  return DemandeInscription.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given DemandeInscription in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return DemandeInscription.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing DemandeInscription in the DB
export function patch(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return DemandeInscription.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a DemandeInscription from the DB
export function destroy(req, res) {
  return DemandeInscription.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
