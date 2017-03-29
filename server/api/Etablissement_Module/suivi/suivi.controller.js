/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/suivis              ->  index
 * POST    /api/suivis              ->  create
 * GET     /api/suivis/:id          ->  show
 * PUT     /api/suivis/:id          ->  upsert
 * PATCH   /api/suivis/:id          ->  patch
 * DELETE  /api/suivis/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Suivi from './suivi.model';

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

function verify(tab, element) {
    for (let i = 0; i < tab.length; i++) {
        if (tab[i].toString() == element.toString()) {
            return true;
        }
    }
    return false;
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

// Gets a list of Suivis
export function index(req, res) {
    return Suivi.find().populate('id_user').populate('id_prof').exec()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

//Get All followers By prof
export function getfollowersByProf(req, res) {
    Suivi.find({ id_prof: req.params.id }).populate('id_user').exec()
        .then(list => {
            var tab = [];
            list.forEach(function(element) {
                tab.push(element.id_user);
            });
            return res.json(tab);
        });
}

//Get All followed By user
export function getfollowedByUser(req, res) {
    Suivi.find({ id_user: req.params.ids }).populate('id_prof').exec()
        .then(list => {
            var tab = [];
            list.forEach(function(element) {
                tab.push(element.id_prof);
            });
            return res.json(tab);
        });

}
//Get Prof Most follow
export function getProfMostfollow(req, res) {
    Suivi.find().exec()
        .then(list => {
            var tab = [];
            var tabs = [];
            var tampon;
            list.forEach(function(element) {
                if (tab.length != 0) {
                    if (!verify(tab, element.id_prof)) {
                        tab.push(element.id_prof);
                    }
                } else {
                    tab.push(element.id_prof);
                }
            });
            var cpt = 0;
            for (let i = 0; i < tab.length; i++) {
                Suivi.find({ id_prof: tab[i] }).populate('id_prof').exec(function(err, cp) {
                    var save = {};
                    cp.forEach(function(e) {
                        save.professeur = e.id_prof;
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


// Gets a single Suivi from the DB
export function show(req, res) {
    return Suivi.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Creates a new Suivi in the DB
export function create(req, res) {
    return Suivi.create(req.body)
        .then(respondWithResult(res, 201))
        .catch(handleError(res));
}

// Upserts the given Suivi in the DB at the specified ID
export function upsert(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    return Suivi.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true }).exec()

    .then(respondWithResult(res))
        .catch(handleError(res));
}

// Updates an existing Suivi in the DB
export function patch(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    return Suivi.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(patchUpdates(req.body))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Deletes a Suivi from the DB
export function destroy(req, res) {
    return Suivi.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(removeEntity(res))
        .catch(handleError(res));
}