/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/detail_cycles              ->  index
 * POST    /api/detail_cycles              ->  create
 * GET     /api/detail_cycles/:id          ->  show
 * PUT     /api/detail_cycles/:id          ->  upsert
 * PATCH   /api/detail_cycles/:id          ->  patch
 * DELETE  /api/detail_cycles/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import DetailCycle from './detail_cycle.model';

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

// Gets a list of DetailCycles
export function index(req, res) {
    return DetailCycle.find().exec()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Gets a single DetailCycle from the DB
export function show(req, res) {
    return DetailCycle.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Gets a single DetailCycle from the DB
export function getCyclebyEtab(req, res) {
    return DetailCycle.find({ etablissement: req.params.id }).populate('cycle').populate('etablissement').exec()
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(handleError(res));
}


// Creates a new DetailCycle in the DB
export function create(req, res) {
    return DetailCycle.create(req.body)
        .then(respondWithResult(res, 201))
        .catch(handleError(res));
}

// Upserts the given DetailCycle in the DB at the specified ID
export function upsert(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    return DetailCycle.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true }).exec()

    .then(respondWithResult(res))
        .catch(handleError(res));
}

// Updates an existing DetailCycle in the DB
export function patch(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    return DetailCycle.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(patchUpdates(req.body))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Deletes a DetailCycle from the DB
export function destroy(req, res) {
    return DetailCycle.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(removeEntity(res))
        .catch(handleError(res));
}