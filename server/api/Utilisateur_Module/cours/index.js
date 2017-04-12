'use strict';

var express = require('express');
var controller = require('./cours.controller');

var router = express.Router();
<<<<<<< HEAD
=======

>>>>>>> d27d24c6ce8727393c89010fe59b8e94f189db88
router.get('/', controller.index);
router.get('/brouillon', controller.brouillon);
router.get('/recents', controller.getCoursRecents);
router.get('/:id', controller.show);
router.get('/sousCat/:scat', controller.getCoursBySousCat);
router.get('/prof/:id', controller.getCoursByProf);
router.get('/school/:etab', controller.getCoursByEtablissement);
router.get('/cours/suivi', controller.getCoursPlusSuivi);
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);

module.exports = router;