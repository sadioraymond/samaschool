'use strict';

var express = require('express');
var controller = require('./profil.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/professeur', controller.getAllProf);
router.get('/etudiant', controller.getAllEtu);
router.get('/isprof/:id', controller.isProf);
router.get('/isetudiant/:id', controller.isEtudiant);
router.get('/isusersimple/:id', controller.isUserSimple);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);

module.exports = router;