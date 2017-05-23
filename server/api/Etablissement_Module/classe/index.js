'use strict';

var express = require('express');
var controller = require('./classe.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/niveau/:niv', controller.getclasseByNiveau);
router.get('/classe/:cl', controller.getNiveauByClasse);
router.get('/etablissement/:etablissement', controller.getClasseByEtablissement);
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);

module.exports = router;