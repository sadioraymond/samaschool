'use strict';

var express = require('express');
var controller = require('./suivi_cours_classe.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/school/:id', controller.GetCoursProfInSchool);
router.get('/classe/:id', controller.getCoursByClasse);
router.get('/cours/:cr', controller.getClasseByCours);
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);

module.exports = router;