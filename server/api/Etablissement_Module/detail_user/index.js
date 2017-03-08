'use strict';

var express = require('express');
var controller = require('./detail_user.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/suivi', controller.GetMostPopularSchool);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);

module.exports = router;