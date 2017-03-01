/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/annee_academiques              ->  index
 * POST    /api/annee_academiques              ->  create
 * GET     /api/annee_academiques/:id          ->  show
 * PUT     /api/annee_academiques/:id          ->  upsert
 * PATCH   /api/annee_academiques/:id          ->  patch
 * DELETE  /api/annee_academiques/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import AnneeAcademique from './annee_academique.model';
import Classe from '../detail_classe/detail_classe.model';

function respondWithResult(res, statusCode) {
    statusCode = statusCode || 200;
    return function(entity) {
        if (entity) {
            return res.status(statusCode).json(entity);
        }
        return null;
    };
}

function patchUpdates(patches) {
    return function(entity) {
        try {
            jsonpatch.apply(entity, patches, /*validate*/ true);
        } catch (err) {
            return Promise.reject(err);
        }

        return entity.save();
    };
}

function removeEntity(res) {
    return function(entity) {
        if (entity) {
            return entity.remove()
                .then(() => {
                    res.status(204).end();
                });
        }
    };
}

function handleEntityNotFound(res) {
    return function(entity) {
        if (!entity) {
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

// Gets a list of AnneeAcademiques
export function index(req, res) {
    return AnneeAcademique.find().populate('user').populate('classe').exec()
        .then(respondWithResult(res))
        .catch(handleError(res));
}


// Gets a single AnneeAcademique from the DB
export function show(req, res) {
    return AnneeAcademique.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Gets AnneeAcademique by User
export function getClassByUser(req, res) {
  return AnneeAcademique.find({user : req.params.us}).populate('classe').exec()
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(handleError(res));
        
}


// Creates a new AnneeAcademique in the DB
export function create(req, res) {
    return AnneeAcademique.create(req.body)
        .then(respondWithResult(res, 201))
        .catch(handleError(res));
}

// Upserts the given AnneeAcademique in the DB at the specified ID
export function upsert(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    return AnneeAcademique.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true }).exec()

    .then(respondWithResult(res))
        .catch(handleError(res));
}

// Updates an existing AnneeAcademique in the DB
export function patch(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    return AnneeAcademique.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(patchUpdates(req.body))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Deletes a AnneeAcademique from the DB
export function destroy(req, res) {
    return AnneeAcademique.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(removeEntity(res))
        .catch(handleError(res));
}