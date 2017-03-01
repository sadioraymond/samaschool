/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/suivi_cours_classes              ->  index
 * POST    /api/suivi_cours_classes              ->  create
 * GET     /api/suivi_cours_classes/:id          ->  show
 * PUT     /api/suivi_cours_classes/:id          ->  upsert
 * PATCH   /api/suivi_cours_classes/:id          ->  patch
 * DELETE  /api/suivi_cours_classes/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import SuiviCoursClasse from './suivi_cours_classe.model';

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

// Gets a list of SuiviCoursClasses
export function index(req, res) {
    return SuiviCoursClasse.find().populate('cours').populate('classe').exec()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Gets a single SuiviCoursClasse from the DB
export function show(req, res) {
    return SuiviCoursClasse.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Creates a new SuiviCoursClasse in the DB
export function create(req, res) {
    return SuiviCoursClasse.create(req.body)
        .then(respondWithResult(res, 201))
        .catch(handleError(res));
}

//Get Cours By Classe

export function getCoursByClasse(req, res) {
    SuiviCoursClasse.find({ classe: req.params.id }).populate('cours').exec()
        .then(list => {
            var us = [];
            list.forEach(function(element) {
                us.push(element.cours);
            });
            return res.json(us);
        })

}

// Upserts the given SuiviCoursClasse in the DB at the specified ID
export function upsert(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    return SuiviCoursClasse.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true }).exec()

    .then(respondWithResult(res))
        .catch(handleError(res));
}

// Updates an existing SuiviCoursClasse in the DB
export function patch(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    return SuiviCoursClasse.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(patchUpdates(req.body))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Deletes a SuiviCoursClasse from the DB
export function destroy(req, res) {
    return SuiviCoursClasse.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(removeEntity(res))
        .catch(handleError(res));
}