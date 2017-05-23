'use strict';

var express = require('express');
var controller = require('./etablissement.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/user/:id', controller.getEtablissementByUser);
router.get('/prof/:id', controller.getProfInEtablissement);
router.get('/nom/:nom', controller.getEtablissementByNom);
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);

module.exports = router;