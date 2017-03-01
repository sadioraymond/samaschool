'use strict';

var express = require('express');
var controller = require('./detail_classe.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/classe/:cl', controller.getEtabByClasse);
router.get('/etabl/:id', controller.getClasseByEtablissement);
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);

module.exports = router;