/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/profils              ->  index
 * POST    /api/profils              ->  create
 * GET     /api/profils/:id          ->  show
 * PUT     /api/profils/:id          ->  upsert
 * PATCH   /api/profils/:id          ->  patch
 * DELETE  /api/profils/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Profil from './profil.model';
import User from '../../user/user.model';
import DProfil from '../detail_profil/detail_profil.model';

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

// Gets a list of Profils
export function index(req, res) {
    return Profil.find().exec()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

//Get all Prof
export function getAllProf(req, res) {
    DProfil.find({ profil: 3 }).populate('user').exec()
        .then(list => {
            var us = [];
            list.forEach(function(element) {
                us.push(element.user);
            });
            return res.json(us);
        })

}

//Get all etudiants
export function getAllEtu(req, res) {
    DProfil.find({ profil: 2 }).populate('user').exec()
        .then(list => {
            var us = [];
            list.forEach(function(element) {
                us.push(element.user);
            });
            return res.json(us);
        })

}

//IS he Prof
export function isProf(req, res) {
    DProfil.find({ user: req.params.id }).exec()
        .then(list => {
            var tab = [];
            list.forEach(function(element) {
                if (element.profil == 3) {
                    return res.json(true);
                } else {
                    return res.json(false);
                }
            });
        });
}

//IS he Etudiant
export function isEtudiant(req, res) {
    DProfil.find({ user: req.params.id }).exec()
        .then(list => {
            var tab = [];
            list.forEach(function(element) {
                if (element.profil == 2) {
                    return res.json(true);
                } else {
                    return res.json(false);
                }
            });
        });
}

//IS he Simple User
export function isUserSimple(req, res) {
    DProfil.find({ user: req.params.id }).exec()
        .then(list => {
            var tab = [];
            list.forEach(function(element) {
                if (element.profil == 1) {
                    return res.json(true);
                } else {
                    return res.json(false);
                }
            });
        });
}

// Gets a single Profil from the DB
export function show(req, res) {
    return Profil.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Creates a new Profil in the DB
export function create(req, res) {
    return Profil.create(req.body)
        .then(respondWithResult(res, 201))
        .catch(handleError(res));
}

// Upserts the given Profil in the DB at the specified ID
export function upsert(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    return Profil.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true }).exec()

    .then(respondWithResult(res))
        .catch(handleError(res));
}

// Updates an existing Profil in the DB
export function patch(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    return Profil.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(patchUpdates(req.body))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Deletes a Profil from the DB
export function destroy(req, res) {
    return Profil.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(removeEntity(res))
        .catch(handleError(res));
}