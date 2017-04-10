/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/fichiers              ->  index
 * POST    /api/fichiers              ->  create
 * GET     /api/fichiers/:id          ->  show
 * PUT     /api/fichiers/:id          ->  upsert
 * PATCH   /api/fichiers/:id          ->  patch
 * DELETE  /api/fichiers/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Fichier from './fichier.model';

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

// Gets a list of Fichiers
export function index(req, res) {
    return Fichier.find().populate('cours').exec()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Gets a single Fichier from the DB
export function show(req, res) {
    return Fichier.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Creates a new Fichier in the DB
export function create(req, res) {
    return Fichier.create(req.body)
        .then(respondWithResult(res, 201))
        .catch(handleError(res));
}

// Upserts the given Fichier in the DB at the specified ID
export function upsert(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    return Fichier.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true }).exec()

    .then(respondWithResult(res))
        .catch(handleError(res));
}

// Updates an existing Fichier in the DB
export function patch(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    return Fichier.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(patchUpdates(req.body))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Deletes a Fichier from the DB
export function destroy(req, res) {
    return Fichier.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(removeEntity(res))
        .catch(handleError(res));
}