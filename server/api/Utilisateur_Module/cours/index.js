'use strict';

var express = require('express');
var controller = require('./cours.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/sousCat/:scat', controller.getCoursBySousCat);
router.get('/prof/:id', controller.getCoursByProf);
router.get('/school/:etab', controller.getCoursByEtablissement);
router.get('/profinschool/:ids/:etablis', controller.getCoursByProfAdnSchool);
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);

module.exports = router;