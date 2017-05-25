'use strict';

var express = require('express');
var controller = require('./departement.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/faculte/:id', controller.getAllDepartementbyFaculte);
router.get('/etablissement/:id', controller.getAllDepartementbyEtab);
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);

module.exports = router;