/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/suivi_courss              ->  index
 * POST    /api/suivi_courss              ->  create
 * GET     /api/suivi_courss/:id          ->  show
 * PUT     /api/suivi_courss/:id          ->  upsert
 * PATCH   /api/suivi_courss/:id          ->  patch
 * DELETE  /api/suivi_courss/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import SuiviCours from './suivi_cours.model';

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

// Gets a list of SuiviCourss
export function index(req, res) {
  return SuiviCours.find().populate('user').populate('cours').exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single SuiviCours from the DB
export function show(req, res) {
  return SuiviCours.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Liste des users qui suivent un cours
export function getUserByCours(req, res) {
  SuiviCours.find({cours : req.params.cr}).populate('user').exec()
    .then(list => {
      var us = [];
      list.forEach(function(element) {
        us.push(element.user);
      });
      return res.json(us);
    })
    
}


// Liste des cours suivis par un user
export function getCoursByUser(req, res) {
  SuiviCours.find({user : req.params.us}).populate('cours').exec()
    .then(list => {
      var cr = [];
      list.forEach(function(element) {
        cr.push(element.cours);
      });
      return res.json(cr);
    })
    
}



// Creates a new SuiviCours in the DB
export function create(req, res) {
  return SuiviCours.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Upserts the given SuiviCours in the DB at the specified ID
export function upsert(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return SuiviCours.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}).exec()

    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing SuiviCours in the DB
export function patch(req, res) {
  if(req.body._id) {
    delete req.body._id;
  }
  return SuiviCours.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a SuiviCours from the DB
export function destroy(req, res) {
  return SuiviCours.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
