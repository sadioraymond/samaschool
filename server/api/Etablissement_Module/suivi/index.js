'use strict';

var express = require('express');
var controller = require('./suivi.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/plussuivi', controller.getProfMostfollow);
router.get('/:id', controller.show);
router.get('/followers/:id', controller.getfollowersByProf);
router.get('/followed/:ids', controller.getfollowedByUser);
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);

module.exports = router;