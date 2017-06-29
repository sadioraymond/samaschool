'use strict';

var express = require('express');
var controller = require('./cours.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/brouillon', controller.brouillon);
router.get('/deletepicture/:images', controller.deletePicture);
router.get('/recents', controller.getCoursRecents);
router.get('/:id', controller.show);
router.get('/sousCat/:scat', controller.getCoursBySousCat);
router.get('/categorie/:categorie', controller.getCoursByCategorie);
router.get('/prof/:id', controller.getCoursByProf);
router.get('/school/:etab', controller.getCoursByEtablissement);
router.get('/cours/suivi', controller.getCoursPlusSuivi);
router.get('/suiviparcours/:id', controller.SuividuCours);
router.get('/coursprof/:id/:ids', controller.getCoursByProfAndSchool);
router.get('/search/:src', controller.getCoursByNameOrDesc);
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);

module.exports = router;