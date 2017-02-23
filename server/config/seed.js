/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Niveau from '../api/Etablissement_Module/niveau/niveau.model';
import Etabli from '../api/Etablissement_Module/etablissement/etablissement.model';
import Classe from '../api/Etablissement_Module/classe/classe.model';
import Annonce from '../api/Etablissement_Module/annonce/annonce.model';
import DAnnonce from '../api/Etablissement_Module/detail_annonce/detail_annonce.model';
import DUsers from '../api/Etablissement_Module/detail_user/detail_user.model';
import suivi_cours_classe from '../api/Etablissement_Module/suivi_cours_classe/suivi_cours_classe.model';
import Annee from '../api/Etablissement_Module/annee_academique/annee_academique.model';
import config from './environment/';

export default function seedDatabaseIfNeeded() {
    if (config.seedDB) {
        Thing.find({}).remove()
            .then(() => {
                Thing.create({
                    name: 'Development Tools',
                    info: 'Integration with popular tools such as Webpack, Gulp, Babel, TypeScript, Karma, ' +
                        'Mocha, ESLint, Node Inspector, Livereload, Protractor, Pug, ' +
                        'Stylus, Sass, and Less.'
                }, {
                    name: 'Server and Client integration',
                    info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
                        'AngularJS, and Node.'
                }, {
                    name: 'Smart Build System',
                    info: 'Build system ignores `spec` files, allowing you to keep ' +
                        'tests alongside code. Automatic injection of scripts and ' +
                        'styles into your index.html'
                }, {
                    name: 'Modular Structure',
                    info: 'Best practice client and server structures allow for more ' +
                        'code reusability and maximum scalability'
                }, {
                    name: 'Optimized Build',
                    info: 'Build process packs up your templates as a single JavaScript ' +
                        'payload, minifies your scripts/css/images, and rewrites asset ' +
                        'names for caching.'
                }, {
                    name: 'Deployment Ready',
                    info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
                        'and openshift subgenerators'
                });
            })
            .then(() => console.log('finished populating things'))
            .catch(err => console.log('error populating things', err));

        User.find({}).remove()
            .then(() => {
                User.create({
                        provider: 'local',
                        name: 'Test User',
                        email: 'test@example.com',
                        password: 'test'
                    }, {
                        provider: 'local',
                        role: 'admin',
                        name: 'Admin',
                        email: 'admin@example.com',
                        password: 'admin'
                    })
                    .then(() => console.log('finished populating users'))
                    .catch(err => console.log('error populating users', err));
            });

        Niveau.find({}).remove()
            .then(() => {
                Niveau.create({
                        name: 'Raymond'
                    }, {
                        name: 'Kain'
                    })
                    .then(() => console.log('finished populating Niveau'))
                    .catch(err => console.log('error populating Niveau', err));
            });
        Etabli.find({}).remove()
            .then(() => {
                Etabli.create({
                        name: 'Ampathe'
                    }, {
                        name: 'ISI'
                    })
                    .then(() => console.log('finished populating Etablissement'))
                    .catch(err => console.log('error populating Etablissement', err));
            });
        Classe.find({}).remove()
            .then(() => {
                Classe.create({
                        name: 'STIC3'
                    }, {
                        name: 'MASTER'
                    })
                    .then(() => console.log('finished populating Classe'))
                    .catch(err => console.log('error populating Classe', err));
            });
        Annonce.find({}).remove()
            .then(() => {
                Annonce.create({
                        name: 'Annonce 1'
                    }, {
                        name: 'Annonce 2'
                    })
                    .then(() => console.log('finished populating Annonce'))
                    .catch(err => console.log('error populating Annonce', err));
            });
        DAnnonce.find({}).remove()
            .then(() => {
                DAnnonce.create({
                        name: 'Detail Annonce 1'
                    }, {
                        name: 'Detail Annonce 2'
                    })
                    .then(() => console.log('finished populating Detail Annonce'))
                    .catch(err => console.log('error populating Detail Annonce', err));
            });
        DUsers.find({}).remove()
            .then(() => {
                DUsers.create({
                        name: 'Detail User 1'
                    }, {
                        name: 'Detail User 2'
                    })
                    .then(() => console.log('finished populating Detail User'))
                    .catch(err => console.log('error populating Detail User', err));
            });
        suivi_cours_classe.find({}).remove()
            .then(() => {
                suivi_cours_classe.create({
                        name: 'Suivi Stic3'
                    }, {
                        name: 'Suivi Master'
                    })
                    .then(() => console.log('finished populating Suivi cours classe'))
                    .catch(err => console.log('error populating Suivi cours classe', err));
            });
        Annee.find({}).remove()
            .then(() => {
                Annee.create({
                        name: '2015-2016'
                    }, {
                        name: '2016-2017'
                    })
                    .then(() => console.log('finished populating Année Académique'))
                    .catch(err => console.log('error populating Année Académique', err));
            });
    }
}