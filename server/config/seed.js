/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import Niveau from '../api/Etablissement_Module/niveau/niveau.model';
import Etabli from '../api/Etablissement_Module/etablissement/etablissement.model';
import Classe from '../api/Etablissement_Module/classe/classe.model';
import Annonce from '../api/Etablissement_Module/annonce/annonce.model';
import DAnnonce from '../api/Etablissement_Module/detail_annonce/detail_annonce.model';
import DUsers from '../api/Etablissement_Module/detail_user/detail_user.model';
import suivi_cours_classe from '../api/Etablissement_Module/suivi_cours_classe/suivi_cours_classe.model';
import Annee from '../api/Etablissement_Module/annee_academique/annee_academique.model';
import Cours from '../api/Utilisateur_Module/cours/cours.model';
import Profil from '../api/Utilisateur_Module/profil/profil.model';
import DProfil from '../api/Utilisateur_Module/detail_profil/detail_profil.model';
import suivi_cours from '../api/Utilisateur_Module/suivi_cours/suivi_cours.model';
import Chapitre from '../api/Utilisateur_Module/chapitre/chapitre.model';
import config from './environment/';

export default function seedDatabaseIfNeeded() {
    if (config.seedDB) {
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
        Cours.find({}).remove()
            .then(() => {
                Cours.create({
                        name: 'Cours 1'
                    }, {
                        name: 'Cours 2'
                    })
                    .then(() => console.log('finished populating Cours'))
                    .catch(err => console.log('error populating Cours', err));
            });
        Profil.find({}).remove()
            .then(() => {
                Profil.create({
                        name: 'Profil 1'
                    }, {
                        name: 'Profil 2'
                    })
                    .then(() => console.log('finished populating Profil'))
                    .catch(err => console.log('error populating Profil', err));
            });
        DProfil.find({}).remove()
            .then(() => {
                DProfil.create({
                        name: 'Détail Profil 1'
                    }, {
                        name: 'Détail Profil 2'
                    })
                    .then(() => console.log('finished populating Détail Profil'))
                    .catch(err => console.log('error populating Détail Profil', err));
            });
        suivi_cours.find({}).remove()
            .then(() => {
                suivi_cours.create({
                        name: 'Suivi User1'
                    }, {
                        name: 'Suivi User2'
                    })
                    .then(() => console.log('finished populating Suivi cours'))
                    .catch(err => console.log('error populating Suivi cours', err));
            });
        Chapitre.find({}).remove()
            .then(() => {
                Chapitre.create({
                        name: 'Chapitre 1'
                    }, {
                        name: 'Chapitre 2'
                    })
                    .then(() => console.log('finished populating Chapitre'))
                    .catch(err => console.log('error populating Chapitre', err));
            });
    }
}