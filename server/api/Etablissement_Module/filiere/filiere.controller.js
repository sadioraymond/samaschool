/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/filieres              ->  index
 * POST    /api/filieres              ->  create
 * GET     /api/filieres/:id          ->  show
 * PUT     /api/filieres/:id          ->  upsert
 * PATCH   /api/filieres/:id          ->  patch
 * DELETE  /api/filieres/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Filiere from './filiere.model';
import Detail from '../detail_cycle/detail_cycle.model';
import Faculte from '../faculte/faculte.model';
import Departement from '../departement/departement.model';

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

// Gets a list of Filieres
export function index(req, res) {
    return Filiere.find().exec()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Gets a single Filiere from the DB
export function show(req, res) {
    return Filiere.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(handleError(res));
}
//get Filiere by Departement
export function getAllFilierebyDepartement(req, res) {
    return Filiere.find({ departement: req.params.id }).exec()
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

//GEt Filiere by Etab
export function getAllFilierebyEtab(req, res) {
    var tab = [];
    var tabs = [];
    var tabbi = [];
    Detail.find({ etablissement: req.params.id }).exec().then(list => {
        list.forEach(function(element) {
            tab.push(element._id);
        });
        for (let i = 0; i < tab.length; i++) {
            Faculte.find({ cycle: tab[i] }).exec().then(fac => {
                fac.forEach(function(e) {
                    tabs.push(e._id);
                });
                for (let j = 0; j < tabs.length; j++) {
                    Departement.find({ faculte: tabs[j] }).exec().then(dep => {
                        if (dep) {
                            dep.forEach(function(el) {
                                if (el) {
                                    tabbi.push(el._id);
                                }
                            });
                            var cpt = 0;
                            console.log('tab bi', tabbi);
                            var tabd = [];
                            for (let k = 0; k < tabbi.length; k++) {
                                Filiere.find({ departement: tabbi[k] }).exec().then(fil => {
                                    if (fil) {
                                        tabd.push(fil);
                                        cpt++;
                                    }
                                    if (cpt == tabbi.length) {
                                        return res.json(tabd);
                                    }
                                })
                            }
                        }
                    });
                }
            });

        }
    });
}

// Creates a new Filiere in the DB
export function create(req, res) {
    return Filiere.create(req.body)
        .then(respondWithResult(res, 201))
        .catch(handleError(res));
}

// Upserts the given Filiere in the DB at the specified ID
export function upsert(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    return Filiere.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true }).exec()

    .then(respondWithResult(res))
        .catch(handleError(res));
}

// Updates an existing Filiere in the DB
export function patch(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    return Filiere.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(patchUpdates(req.body))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Deletes a Filiere from the DB
export function destroy(req, res) {
    return Filiere.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(removeEntity(res))
        .catch(handleError(res));
}