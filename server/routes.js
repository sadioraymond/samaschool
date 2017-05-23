'use strict';

import errors from './components/errors';
import path from 'path';
var multer = require('multer');
var mkdirp = require('mkdirp');
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        //cb(null, '../../test')
        var dir = 'client/assets/upload/Cours/' + '/';
        mkdirp(dir, function(err) {
            if (err) {
                console.error(err);
            }
        });
        cb(null, dir);
    },
    filename: function(req, file, cb) {
            cb(null, req.params.id)
        } //path.extname(file.originalname) permet d'obtenir l'extension du fichier
});

var storageSchool = multer.diskStorage({
    destination: function(req, file, cb) {
        //cb(null, '../../test')
        var dir = 'client/assets/upload/Etablissement/' + '/';
        mkdirp(dir, function(err) {
            if (err) {
                console.error(err);
            }
        });
        cb(null, dir);
    },
    filename: function(req, file, cb) {
            cb(null, req.params.id)
        } //path.extname(file.originalname) permet d'obtenir l'extension du fichier
});
var storageuser = multer.diskStorage({
    destination: function(req, file, cb) {
        //cb(null, '../../test')
        var dir = 'client/assets/upload/User/' + '/';
        mkdirp(dir, function(err) {
            if (err) {
                console.error(err);
            }
        });
        cb(null, dir);
    },
    filename: function(req, file, cb) {
            cb(null, req.params.id)
        } //path.extname(file.originalname) permet d'obtenir l'extension du fichier
});
var upload = multer({
    storage: storage
});
var uploadschool = multer({
    storage: storageSchool
});
var uploaduser = multer({
    storage: storageuser
});
var fs = require('fs');
var rep = 'client/assets/upload/Cours/' + '/';
mkdirp(rep, function(err) {
    if (err) {
        console.error(err);
    }
});
var repschool = 'client/assets/upload/Etablissement/' + '/';
mkdirp(repschool, function(err) {
    if (err) {
        console.error(err);
    }
});
var repuser = 'client/assets/upload/User/' + '/';
mkdirp(repuser, function(err) {
    if (err) {
        console.error(err);
    }
});
export default function(app) {
    // Insert routes below
    app.use('/api/demande_inscriptions', require('./api/Etablissement_Module/demande_inscription'));
    app.use('/api/detail_options', require('./api/Etablissement_Module/detail_option'));
    app.use('/api/options', require('./api/Etablissement_Module/option'));
    app.use('/api/filieres', require('./api/Etablissement_Module/filiere'));
    app.use('/api/departements', require('./api/Etablissement_Module/departement'));
    app.use('/api/facultes', require('./api/Etablissement_Module/faculte'));
    app.use('/api/detail_cycles', require('./api/Etablissement_Module/detail_cycle'));
    app.use('/api/equipes', require('./api/Etablissement_Module/equipe'));
    app.post('/createcourse/:id', upload.single('myFile'), function uploadImage(req, res) {
        var widgetId = req.body.widgetId;
        var width = req.body.width;
        var myFile = req.file;
        var originalname = myFile.originalname; //nom de l'image dans l'ordinateur du user
        var filename = myFile.filename; //nouveau nom de l'image dans le dossier de sauvegarde
        var path = myFile.path; //chemin complet de l'upload
        var destination = myFile.destination; //destination de l'image
        var size = myFile.size;
        var mimetype = myFile.mimetype;
    });
    app.post('/etablissement/:id', uploadschool.single('myFile'), function uploadImage(req, res) {
        var widgetId = req.body.widgetId;
        var width = req.body.width;
        var myFile = req.file;
        var originalname = myFile.originalname; //nom de l'image dans l'ordinateur du user
        var filename = myFile.filename; //nouveau nom de l'image dans le dossier de sauvegarde
        var path = myFile.path; //chemin complet de l'upload
        var destination = myFile.destination; //destination de l'image
        var size = myFile.size;
        var mimetype = myFile.mimetype;
    });
    app.get('/deletepicture/:images', function deletePicture(req, res) {
        //var chemin=rep+req.params.images;
        console.log('url bi', rep);
        console.log('tourou image bi', req.params.images);
        fs.unlinkSync(rep + req.params.images);
    });
    app.get('/deletepictureschool/:images', function deletePicture(req, res) {
        //var chemin=rep+req.params.images;
        console.log('url bi', repschool);
        console.log('tourou image bi', req.params.images);
        fs.unlinkSync(repschool + req.params.images);
    });
    app.get('/deletepictureuser/:images', function deletePicture(req, res) {
        //var chemin=rep+req.params.images;
        console.log('url bi', repuser);
        console.log('tourou image bi', req.params.images);
        fs.unlinkSync(repuser + req.params.images);
    });
    app.post('/user/:id', uploaduser.single('myFile'), function uploadImage(req, res) {
        var widgetId = req.body.widgetId;
        var width = req.body.width;
        var myFile = req.file;
        var originalname = myFile.originalname; //nom de l'image dans l'ordinateur du user
        var filename = myFile.filename; //nouveau nom de l'image dans le dossier de sauvegarde
        var path = myFile.path; //chemin complet de l'upload
        var destination = myFile.destination; //destination de l'image
        var size = myFile.size;
        var mimetype = myFile.mimetype;
    });
    app.use('/api/exercices', require('./api/Utilisateur_Module/exercice'));
    app.use('/api/fichiers', require('./api/Utilisateur_Module/fichier'));
    app.use('/api/suivis', require('./api/Etablissement_Module/suivi'));
    app.use('/api/categories', require('./api/Utilisateur_Module/categorie'));
    app.use('/api/sous_categories', require('./api/Utilisateur_Module/sous_categorie'));
    app.use('/api/cycles', require('./api/Etablissement_Module/cycle'));
    app.use('/api/chapitres', require('./api/Utilisateur_Module/chapitre'));
    app.use('/api/suivi_courss', require('./api/Utilisateur_Module/suivi_cours'));
    app.use('/api/detail_profils', require('./api/Utilisateur_Module/detail_profil'));
    app.use('/api/profils', require('./api/Utilisateur_Module/profil'));
    app.use('/api/courss', require('./api/Utilisateur_Module/cours'));
    app.use('/api/annee_academiques', require('./api/Etablissement_Module/annee_academique'));
    app.use('/api/suivi_cours_classes', require('./api/Etablissement_Module/suivi_cours_classe'));
    app.use('/api/detail_users', require('./api/Etablissement_Module/detail_user'));
    app.use('/api/detail_annonces', require('./api/Etablissement_Module/detail_annonce'));
    app.use('/api/annonces', require('./api/Etablissement_Module/annonce'));
    app.use('/api/classes', require('./api/Etablissement_Module/classe'));
    app.use('/api/etablissements', require('./api/Etablissement_Module/etablissement'));
    app.use('/api/niveaus', require('./api/Etablissement_Module/niveau'));
    app.use('/api/users', require('./api/user'));

    app.use('/auth', require('./auth').default);

    // All undefined asset or api routes should return a 404
    app.route('/:url(api|auth|components|app|bower_components|assets)/*')
        .get(errors[404]);

    // All other routes should redirect to the index.html
    app.route('/*')
        .get((req, res) => {
            res.sendFile(path.resolve(`${app.get('appPath')}/index.html`));
        });
}