/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';

export default function(app) {
    // Insert routes below
    app.use('/api/annee_academiques', require('./api/Etablissement_Module/annee_academique'));
    app.use('/api/suivi_cours_classes', require('./api/Etablissement_Module/suivi_cours_classe'));
    app.use('/api/detail_users', require('./api/Etablissement_Module/detail_user'));
    app.use('/api/detail_annonces', require('./api/Etablissement_Module/detail_annonce'));
    app.use('/api/annonces', require('./api/Etablissement_Module/annonce'));
    app.use('/api/classes', require('./api/Etablissement_Module/classe'));
    app.use('/api/etablissements', require('./api/Etablissement_Module/etablissement'));
    app.use('/api/niveaus', require('./api/Etablissement_Module/niveau'));

    app.use('/api/things', require('./api/thing'));
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