/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/courss              ->  index
 * POST    /api/courss              ->  create
 * GET     /api/courss/:id          ->  show
 * PUT     /api/courss/:id          ->  upsert
 * PATCH   /api/courss/:id          ->  patch
 * DELETE  /api/courss/:id          ->  destroy
 */

'use strict';

import jsonpatch from 'fast-json-patch';
import Cours from './cours.model';
import User from '../detail_profil/detail_profil.model';
import Profil from '../profil/profil.model';
import SuiviCours from '../suivi_cours/suivi_cours.model';
import Classe from '../../Etablissement_Module/detail_classe/detail_classe.model';
import Suivi from '../../Etablissement_Module/suivi_cours_classe/suivi_cours_classe.model';
import SuiviCoursClasse from '../../Etablissement_Module/suivi_cours_classe/suivi_cours_classe.model';
import Detail from '../../Etablissement_Module/detail_classe/detail_classe.model';
var fs = require('fs');

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
// Verify if an element exist in array
function verify(tab, element) {
    for (let i = 0; i < tab.length; i++) {
        if (tab[i].toString() == element.toString()) {
            return true;
        }
    }
    return false;
}

//delete a Picture

export function deletePicture(images) {
    console.log('url bi', images);
    fs.unlinkSync(images);
}
// Gets a list of Courss
export function index(req, res) {
    var cou = "Cours";
    var act = true;
    return Cours.find({
            Genre: cou
        }).populate('sous_categorie').populate('user').exec()
        .then(respondWithResult(res))
        .catch(handleError(res));
}
//Add Brouillon
export function brouillon(req, res) {
    var cou = "Cours";
    var act = false;
    return Cours.find({
            actif: act
        }).populate('sous_categorie').populate('user').exec()
        .then(respondWithResult(res))
        .catch(handleError(res));
}
// Gets a single Cours from the DB
export function show(req, res) {
    return Cours.findById(req.params.id).populate('sous_categorie').populate('user').exec()
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(handleError(res));
}
var stringify = require('json-stringify-safe');
// GLes Cours les plus suivies
export function getCoursPlusSuivi(req, res) {
    var cou = "Cours";
    Cours.find({
            Genre: cou
        }).exec()
        .then(list => {
            var tabCours = [];
            var tabCoursyi = [];
            var cpt = 0;
            var tampon;
            list.map(li => {
                SuiviCours.find({
                        publication: li._id
                    }).exec()
                    .then(nb => {
                        var ben = {};
                        nb.forEach(function(e) {
                            tabCoursyi.push(e.publication);
                        });
                        for (let i = 0; i < tabCoursyi.length; i++) {
                            Cours.findById(tabCoursyi[i]).populate('sous_categorie').populate('user').exec(function(err, couryyi) {
                                ben.cours = couryyi;
                                ben.nb_suiv = nb.length;
                                tabCours.push(ben);
                                cpt++;
                                if (cpt == list.length) {
                                    for (let j = 0; j < tabCours.length - 1; j++) {
                                        for (let k = j + 1; k < tabCours.length; k++) {
                                            if (tabCours[j].nb_suiv < tabCours[k].nb_suiv) {
                                                tampon = tabCours[j];
                                                tabCours[j] = tabCours[k];
                                                tabCours[k] = tampon;
                                            }
                                        }
                                    }
                                    return res.json(tabCours);
                                }
                            });
                        }

                    });

            });

        });


}
//Cours les plus récents
export function getCoursRecents(req, res) {
    Cours.find().populate('sous_categorie').populate('user').exec()
        .then(list => {
            var tab = [];
            var tampon;
            list.forEach(function(element) {
                if (tab.length != 0) {
                    if (!verify(tab, element)) {
                        tab.push(element);
                    }
                } else {
                    tab.push(element);
                }
            });
            for (let j = 0; j < tab.length - 1; j++) {
                for (let k = j + 1; k < tab.length; k++) {
                    if (tab[j].date_creation < tab[k].date_creation) {
                        tampon = tab[j];
                        tab[j] = tab[k];
                        tab[k] = tampon;
                    }
                }
            }
            return res.json(tab);

        });

}

// Gets all Cours related to a Prof
export function getCoursByProf(req, res) {
    User.find({
        user: req.params.id
    }).exec(function(err, userss) {
        if (err) {
            return handleError(res, err);
        }
        userss.forEach(function(element) {
            if (element.profil === 3) {
                Cours.find({
                    user: req.params.id
                }).populate('sous_categorie').populate('user').exec(function(err, courss) {
                    if (err) {
                        return handleError(res, err);
                    }
                    console.log('Cours yi', courss);
                    return res.json(courss);
                });
            } else {
                console.log('C est pas un prof');
                return res.json("Vous n'etes pas un Professeur");
            }
        }, this);

    });

}

// Gets all Cours related to a Prof and school
export function getCoursByProfAndSchool(req, res) {
    Cours.find({
            user: req.params.id
        }).exec()
        .then(list => {
            var tab = [];
            var tabs = [];
            var coursProf = [];
            var stock = [];
            list.forEach(function(element) {
                tab.push(element._id);
            });
            if (tab.length == 0) {
                return res.json(tabs);
            } else {
                var cpt = 0;
                for (let i = 0; i < tab.length; i++) {
                    SuiviCoursClasse.find({
                        publication: tab[i]
                    }).populate('publication').exec(function(err, cp) {
                        cp.forEach(function(eleme) {
                           // var cou = {};
                            Detail.find({ classe: eleme.classe }).populate('classe').populate('etablissement').exec().then(li => {
                                li.forEach(function(el) {
                                    var save = {};
                                    //cou.push(eleme.publication);
                                    save.cours = eleme.publication;
                                    console.log('?', req.params.ids);
                                    console.log('!', el.etablissement._id);
                                    if (el.etablissement._id == req.params.ids) {
                                        var il = el;
                                    }
                                    if (il) {
                                        tabs.push(save);
                                    }
                                    cpt++;
                                    if (cpt == tab.length) {
                                        return res.json(tabs);
                                    }
                                });
                            });
                        });
                    });
                }
            }

        });

}

// Gets all Cours related to a School
export function getCoursByEtablissement(req, res) {
    User.find({
        user: req.params.etab
    }).exec(function(err, userss) {
        if (err) {
            return handleError(res, err);
        }
        userss.forEach(function(element) {
            if (element.profil === 4) {
                Cours.find({
                    user: req.params.etab
                }).populate('sous_categorie').populate('user').exec(function(err, courss) {
                    if (err) {
                        return handleError(res, err);
                    }
                    console.log('Cours yi', courss);
                    return res.json(courss);
                });
            } else {
                console.log('C est pas un Etablissement');
                return res.json("Vous n'etes pas un Etablissement");
            }
        }, this);

    });

}

// Gets all Cours related to a SousCategorie
export function getCoursBySousCat(req, res) {
    return Cours.find({
            sous_categorie: req.params.scat
        }).populate('sous_categorie').populate('user').exec()
        .then(handleEntityNotFound(res))
        .then(respondWithResult(res))
        .catch(handleError(res));
}


// Creates a new Cours in the DB
export function create(req, res) {
    return Cours.create(req.body)
        .then(respondWithResult(res, 201))
        .catch(handleError(res));
}

// Upserts the given Cours in the DB at the specified ID
export function upsert(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    return Cours.findOneAndUpdate({
        _id: req.params.id
    }, req.body, {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
        runValidators: true
    }).exec()

    .then(respondWithResult(res))
        .catch(handleError(res));
}

// Updates an existing Cours in the DB
export function patch(req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    return Cours.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(patchUpdates(req.body))
        .then(respondWithResult(res))
        .catch(handleError(res));
}

// Deletes a Cours from the DB
export function destroy(req, res) {
    return Cours.findById(req.params.id).exec()
        .then(handleEntityNotFound(res))
        .then(removeEntity(res))
        .catch(handleError(res));
}