/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/preferences              ->  index
 * POST    /api/preferences              ->  create
 * GET     /api/preferences/:id          ->  show
 * PUT     /api/preferences/:id          ->  upsert
 * PATCH   /api/preferences/:id          ->  patch
 * DELETE  /api/preferences/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Preference from './preference.model';
import SousCat from '../sous_categorie/sous_categorie.model';

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

//verify if an element of array is in another array

function verify(tab, tabs) {
    var tableau = [];
    var cpt;
    if (tabs.length == 0) {
        return tab;
    } else {
        for (let i = 0; i < tab.length; i++) {
            cpt = 0;
            for (let j = 0; j < tabs.length; j++) {
                if (tab[i]._id != tabs[j].sous_categorie) {
                    cpt++;
                    if (cpt == tabs.length) {
                        tableau.push(tab[i]);
                    }
                }
            }
        }
        return tableau;
    }
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

// Gets a list of Preferences
export function index(req, res) {
    return Preference.find().exec()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

//Get Rest Preference of user

export function getRestPreferenceUser(req, res) {
    var tab = [];
    var tabs = [];
    var tabbi = [];
    SousCat.find().exec().then(list => {
        list.forEach(function(element) {
            tab.push(element);
        });
        Preference.find({ user: req.params.id }).exec().then(pref => {
            pref.forEach(function(e) {
                tabs.push(e);
            });
            tabbi = verify(tab, tabs);
            console.log('tableau', tab);
            console.log('tableau 1', tabs);
            console.log('mom', tabbi);
            console.log('taille', tab.length);
            console.log('taille 1', tabbi.length);
            return res.json(tabbi);
        });
    });
}


// Gets a single Preference from the DB
export function show(req, res) {
    return Preference.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Creates a new Preference in the DB
export function create(req, res) {
    return Preference.create(req.body)
        .then(respondWithResult(res, 201))
        .catch(handleError(res));
}

// Upserts the given Preference in the DB at the specified ID
export function upsert(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    return Preference.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true }).exec()

    .then(respondWithResult(res))
        .catch(handleError(res));
}

// Updates an existing Preference in the DB
export function patch(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    return Preference.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(patchUpdates(req.body))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Deletes a Preference from the DB
export function destroy(req, res) {
    return Preference.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(removeEntity(res))
        .catch(handleError(res));
}