'use strict';

var express = require('express');
var controller = require('./cours.controller');

var router = express.Router();
var multer = require('multer');
/*var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '/home/raymond/Projet/samaschool/server/api/test')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})*/

//var upload = multer({ storage: storage })
var upload = multer({ dest: '/home/raymond/Projet/samaschool/server/api/test' });
router.post('/image', upload.single('myFile'), controller.uploadImage);
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