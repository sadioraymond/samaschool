'use strict';

var express = require('express');
var controller = require('./suivi.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/plussuivi', controller.GetProfMostfollow);
router.get('/:id', controller.show);
router.get('/followers/:id', controller.GetfollowersByProf);
router.get('/followed/:ids', controller.GetfollowedByUser);
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);

module.exports = router;