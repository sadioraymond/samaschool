/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/etablissements              ->  index
 * POST    /api/etablissements              ->  create
 * GET     /api/etablissements/:id          ->  show
 * PUT     /api/etablissements/:id          ->  upsert
 * PATCH   /api/etablissements/:id          ->  patch
 * DELETE  /api/etablissements/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Etablissement from './etablissement.model';
import Detail from '../detail_user/detail_user.model';
import Dprofil from '../../Utilisateur_Module/detail_profil/detail_profil.model';

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

// Gets a list of Etablissements
export function index(req, res) {
    return Etablissement.find().exec()
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Gets a single Etablissement from the DB
export function show(req, res) {
    return Etablissement.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

export function getEtablissementByNom(req, res) {
    return Etablissement.find({libelle: {'$regex' : req.params.nom, '$options' : 'i'}}).exec()
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

getEtablissementByNom

//get Etablissement By USer 
export function getEtablissementByUser(req, res) {
    Detail.find({ user: req.params.id }).populate('etablissement').exec().then(list => {
        var etab = [];
        var cpt = 0;
        list.map(etablis => {
            etab.push(etablis.etablissement);
            cpt++;
            if (cpt == list.length) {
                return res.json(etab);
            }
        });
    });

}

//get Etablissement By USer 
export function getProfInEtablissement(req, res) {
    Detail.find({ etablissement: req.params.id }).exec().then(list => {
        var etab = [];
        var cpt = 0;
        list.map(etablis => {
            Dprofil.find({ user: etablis.user }).populate('user').exec().then(li => {
                li.forEach(function(element) {
                    if (element.profil == 3) {
                        console.log('fi')
                        etab.push(li);
                    }
                    cpt++;
                    if (cpt == list.length) {
                        return res.json(etab);
                    }
                });
            })
        });
    });

}
// Creates a new Etablissement in the DB
export function create(req, res) {
    return Etablissement.create(req.body)
        .then(respondWithResult(res, 201))
        .catch(handleError(res));
}

// Upserts the given Etablissement in the DB at the specified ID
export function upsert(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    return Etablissement.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true }).exec()

    .then(respondWithResult(res))
        .catch(handleError(res));
}

// Updates an existing Etablissement in the DB
export function patch(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    return Etablissement.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(patchUpdates(req.body))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Deletes a Etablissement from the DB
export function destroy(req, res) {
    return Etablissement.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(removeEntity(res))
        .catch(handleError(res));
}