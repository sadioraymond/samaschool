/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/detail_users              ->  index
 * POST    /api/detail_users              ->  create
 * GET     /api/detail_users/:id          ->  show
 * PUT     /api/detail_users/:id          ->  upsert
 * PATCH   /api/detail_users/:id          ->  patch
 * DELETE  /api/detail_users/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import DetailUser from './detail_user.model';

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

function verify(tab, element) {
    for (let i = 0; i < tab.length; i++) {
        if (tab[i].toString() == element.toString()) {
            return true;
        }
    }
    return false;
}


function handleError(res, statusCode) {
    statusCode = statusCode || 500;
    return function(err) {
        res.status(statusCode).send(err);
    };
}

// Gets a list of DetailUsers
export function index(req, res) {
    return DetailUser.find().populate('user').populate('etablissement').exec()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Gets a single DetailUser from the DB
export function show(req, res) {
    return DetailUser.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

//Get Most Popular School
export function GetMostPopularSchool(req, res) {
    DetailUser.find().exec()
        .then(list => {
            var tab = [];
            var tabs = [];
            var tampon;
            list.forEach(function(element) {
                if (tab.length != 0) {
                    if (!verify(tab, element.etablissement)) {
                        tab.push(element.etablissement);
                    }
                } else {
                    tab.push(element.etablissement);
                }
            });
            var cpt = 0;
            for (let i = 0; i < tab.length; i++) {
                DetailUser.find({ etablissement: tab[i] }).populate('etablissement').exec(function(err, cp) {
                    var save = {};
                    cp.forEach(function(e) {
                        save.etablissement = e.etablissement;
                    });
                    save.nbfois = cp.length;
                    console.log('compte', save.nbfois);
                    tabs.push(save);
                    cpt++;
                    if (cpt == tab.length) {
                        for (let j = 0; j < tabs.length - 1; j++) {
                            for (let k = j + 1; k < tabs.length; k++) {
                                if (tabs[j].nbfois < tabs[k].nbfois) {
                                    tampon = tabs[j];
                                    tabs[j] = tabs[k];
                                    tabs[k] = tampon;
                                }
                            }
                        }
                        return res.json(tabs);
                    }
                });
            }

        });

}

// Creates a new DetailUser in the DB
export function create(req, res) {
    return DetailUser.create(req.body)
        .then(respondWithResult(res, 201))
        .catch(handleError(res));
}

// Upserts the given DetailUser in the DB at the specified ID
export function upsert(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    return DetailUser.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true }).exec()

    .then(respondWithResult(res))
        .catch(handleError(res));
}

// Updates an existing DetailUser in the DB
export function patch(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    return DetailUser.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(patchUpdates(req.body))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Deletes a DetailUser from the DB
export function destroy(req, res) {
    return DetailUser.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(removeEntity(res))
        .catch(handleError(res));
}