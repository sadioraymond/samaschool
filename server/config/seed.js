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
import cours from '../api/Utilisateur_Module/cours/cours.model';
import Profil from '../api/Utilisateur_Module/profil/profil.model';
import DProfil from '../api/Utilisateur_Module/detail_profil/detail_profil.model';
import suivi_cours from '../api/Utilisateur_Module/suivi_cours/suivi_cours.model';
import Chapitre from '../api/Utilisateur_Module/chapitre/chapitre.model';
import Cycle from '../api/Etablissement_Module/cycle/cycle.model';
import Dclasse from '../api/Etablissement_Module/detail_classe/detail_classe.model';
import SousCat from '../api/Utilisateur_Module/sous_categorie/sous_categorie.model';
import Categorie from '../api/Utilisateur_Module/categorie/categorie.model';
import suivi from '../api/Etablissement_Module/suivi/suivi.model';
import config from './environment/';

export default function seedDatabaseIfNeeded() {
    if (config.seedDB) {
        User.find({}).remove()
            .then(() => {
                User.create({
                        _id: "58b03802d98ff60ec2777f8c",
                        provider: 'local',
                        name: 'Test User',
                        email: 'test@example.com',
                        password: 'test'
                    }, {
                        _id: "58b03802d98ff60ec2777f8d",
                        provider: 'local',
                        role: 'admin',
                        name: 'Admin',
                        email: 'admin@example.com',
                        password: 'admin'
                    }, {
                        _id: "58b03802d98ff60ec2777f8e",
                        name: "Selma",
                        email: "selma@example.com",
                        password: "Passer"
                    }, {
                        _id: "58b03802d98ff60ec2777f8f",
                        name: "Lilah",
                        email: "lilah@example.com",
                        password: "Passer"
                    }, {
                        _id: "58b03802d98ff60ec2777f90",
                        name: "Sebastian",
                        email: "sebastian@example.com",
                        password: "Passer"
                    }, {
                        _id: "58b03802d98ff60ec2777f91",
                        name: "Neil",
                        email: "neil@example.com",
                        password: "Passer"
                    }, {
                        _id: "58b03802d98ff60ec2777f92",
                        name: "Adam",
                        email: "adam@example.com",
                        password: "Passer"
                    }, {
                        _id: "58b03802d98ff60ec2777f93",
                        name: "Hammett",
                        email: "hammett@example.com",
                        password: "Passer"
                    }, {
                        _id: "58b03802d98ff60ec2777f94",
                        name: "Hadassah",
                        email: "hadassah@example.com",
                        password: "Passer"
                    }, {
                        _id: "58b03802d98ff60ec2777f95",
                        name: "Illiana",
                        email: "illiana@example.com",
                        password: "Passer"
                    })
                    .then(() => console.log('finished populating users'))
                    .catch(err => console.log('error populating users', err));
            });

        Niveau.find({}).remove()
            .then(() => {
                Niveau.create({
                        _id: 1,
                        libelle: "1ére Année",
                        cycle: 4
                    }, {
                        _id: 2,
                        libelle: "2éme Année",
                        cycle: 4
                    }, {
                        _id: 3,
                        libelle: "3éme Année",
                        cycle: 4
                    }, {
                        _id: 4,
                        libelle: "4éme Année",
                        cycle: 4
                    }, {
                        _id: 5,
                        libelle: "5éme Année",
                        cycle: 4
                    })
                    .then(() => console.log('finished populating Niveau'))
                    .catch(err => console.log('error populating Niveau', err));
            });
        Etabli.find({}).remove()
            .then(() => {
                Etabli.create({
                        _id: 1,
                        libelle: "ampathe Bâ",
                        adresse: "CP 598, 1868 Vivamus Chemin",
                        tel: "201-626-324-3444",
                        email: "sit.amet.metus@Curabiturmassa.co.uk"
                    }, {
                        _id: 2,
                        libelle: "UCAD",
                        adresse: "CP 815, 6268 Diam Av.",
                        tel: "201-665-249-3835",
                        email: "a.mi.fringilla@ametmetus.net"
                    })
                    .then(() => console.log('finished populating Etablissement'))
                    .catch(err => console.log('error populating Etablissement', err));
            });
        Classe.find({}).remove()
            .then(() => {
                Classe.create({
                        _id: 1,
                        niveau: 1,
                        libelle: "Stic1"
                    }, {
                        _id: 2,
                        niveau: 2,
                        libelle: "Stic2"
                    }, {
                        _id: 3,
                        niveau: 3,
                        libelle: "Stic3"
                    }, {
                        _id: 4,
                        niveau: 4,
                        libelle: "Stic4"
                    }, {
                        _id: 5,
                        niveau: 5,
                        libelle: "Stic5"
                    }, {
                        _id: 6,
                        niveau: 1,
                        libelle: "Droit1"
                    }, {
                        _id: 7,
                        niveau: 2,
                        libelle: "Droit2"
                    }, {
                        _id: 8,
                        niveau: 3,
                        libelle: "Droit3"
                    }, {
                        _id: 9,
                        niveau: 4,
                        libelle: "Droit4"
                    }, {
                        _id: 10,
                        niveau: 5,
                        libelle: "Droit5"
                    })
                    .then(() => console.log('finished populating Classe'))
                    .catch(err => console.log('error populating Classe', err));
            });
        Annonce.find({}).remove()
            .then(() => {
                Annonce.create({
                        _id: 1,
                        contenu: "ultrices posuere cubilia Curae; Donec tincidunt. Donec vitae erat vel",
                        etablissement: 7
                    }, {
                        _id: 2,
                        contenu: "commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac,",
                        etablissement: 3
                    }, {
                        _id: 3,
                        contenu: "purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla",
                        etablissement: 15
                    }, {
                        _id: 4,
                        contenu: "vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet",
                        etablissement: 25
                    }, {
                        _id: 5,
                        contenu: "vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id",
                        etablissement: 10
                    }, {
                        _id: 6,
                        contenu: "Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem,",
                        etablissement: 6
                    }, {
                        _id: 7,
                        contenu: "in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris",
                        etablissement: 22
                    }, {
                        _id: 8,
                        contenu: "mattis ornare, lectus ante dictum mi, ac mattis velit justo",
                        etablissement: 3
                    }, {
                        _id: 9,
                        contenu: "lacus vestibulum lorem, sit amet ultricies sem magna nec quam.",
                        etablissement: 1
                    }, {
                        _id: 10,
                        contenu: "Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque",
                        etablissement: 1
                    }, {
                        _id: 11,
                        contenu: "est, congue a, aliquet vel, vulputate eu, odio. Phasellus at",
                        etablissement: 22
                    }, {
                        _id: 12,
                        contenu: "non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget",
                        etablissement: 18
                    }, {
                        _id: 13,
                        contenu: "nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor sit",
                        etablissement: 14
                    }, {
                        _id: 14,
                        contenu: "cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut",
                        etablissement: 22
                    }, {
                        _id: 15,
                        contenu: "Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor",
                        etablissement: 22
                    }, {
                        _id: 16,
                        contenu: "egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla",
                        etablissement: 16
                    }, {
                        _id: 17,
                        contenu: "Nam interdum enim non nisi. Aenean eget metus. In nec",
                        etablissement: 13
                    }, {
                        _id: 18,
                        contenu: "luctus lobortis. Class aptent taciti sociosqu ad litora torquent per",
                        etablissement: 16
                    }, {
                        _id: 19,
                        contenu: "Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum",
                        etablissement: 21
                    }, {
                        _id: 20,
                        contenu: "neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede",
                        etablissement: 12
                    }, {
                        _id: 21,
                        contenu: "Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi",
                        etablissement: 3
                    }, {
                        _id: 22,
                        contenu: "convallis convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt",
                        etablissement: 16
                    }, {
                        _id: 23,
                        contenu: "dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis",
                        etablissement: 15
                    }, {
                        _id: 24,
                        contenu: "faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor",
                        etablissement: 23
                    }, {
                        _id: 25,
                        contenu: "ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc",
                        etablissement: 14
                    }, {
                        _id: 26,
                        contenu: "semper egestas, urna justo faucibus lectus, a sollicitudin orci sem",
                        etablissement: 22
                    }, {
                        _id: 27,
                        contenu: "eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed",
                        etablissement: 23
                    }, {
                        _id: 28,
                        contenu: "Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac",
                        etablissement: 24
                    }, {
                        _id: 29,
                        contenu: "at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada",
                        etablissement: 2
                    }, {
                        _id: 30,
                        contenu: "at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque",
                        etablissement: 6
                    }, {
                        _id: 31,
                        contenu: "Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus.",
                        etablissement: 10
                    }, {
                        _id: 32,
                        contenu: "nisi sem semper erat, in consectetuer ipsum nunc id enim.",
                        etablissement: 20
                    }, {
                        _id: 33,
                        contenu: "netus et malesuada fames ac turpis egestas. Fusce aliquet magna",
                        etablissement: 18
                    }, {
                        _id: 34,
                        contenu: "bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus",
                        etablissement: 2
                    }, {
                        _id: 35,
                        contenu: "vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis.",
                        etablissement: 6
                    }, {
                        _id: 36,
                        contenu: "diam. Pellentesque habitant morbi tristique senectus et netus et malesuada",
                        etablissement: 24
                    }, {
                        _id: 37,
                        contenu: "Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat.",
                        etablissement: 13
                    }, {
                        _id: 38,
                        contenu: "Nam ligula elit, pretium et, rutrum non, hendrerit id, ante.",
                        etablissement: 4
                    }, {
                        _id: 39,
                        contenu: "cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut",
                        etablissement: 14
                    }, {
                        _id: 40,
                        contenu: "nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere",
                        etablissement: 15
                    }, {
                        _id: 41,
                        contenu: "Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam",
                        etablissement: 4
                    }, {
                        _id: 42,
                        contenu: "porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris",
                        etablissement: 11
                    }, {
                        _id: 43,
                        contenu: "Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor",
                        etablissement: 17
                    }, {
                        _id: 44,
                        contenu: "nibh enim, gravida sit amet, dapibus id, blandit at, nisi.",
                        etablissement: 8
                    }, {
                        _id: 45,
                        contenu: "quis turpis vitae purus gravida sagittis. Duis gravida. Praesent eu",
                        etablissement: 9
                    }, {
                        _id: 46,
                        contenu: "Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed",
                        etablissement: 22
                    }, {
                        _id: 47,
                        contenu: "id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus",
                        etablissement: 5
                    }, {
                        _id: 48,
                        contenu: "Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla",
                        etablissement: 24
                    }, {
                        _id: 49,
                        contenu: "posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget,",
                        etablissement: 10
                    }, {
                        _id: 50,
                        contenu: "Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla",
                        etablissement: 8
                    }, {
                        _id: 51,
                        contenu: "ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat",
                        etablissement: 13
                    }, {
                        _id: 52,
                        contenu: "risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non",
                        etablissement: 15
                    }, {
                        _id: 53,
                        contenu: "cursus, diam at pretium aliquet, metus urna convallis erat, eget",
                        etablissement: 16
                    }, {
                        _id: 54,
                        contenu: "Aliquam auctor, velit eget laoreet posuere, enim nisl elementum purus,",
                        etablissement: 12
                    }, {
                        _id: 55,
                        contenu: "ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque",
                        etablissement: 1
                    }, {
                        _id: 56,
                        contenu: "Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper",
                        etablissement: 14
                    }, {
                        _id: 57,
                        contenu: "nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor",
                        etablissement: 22
                    }, {
                        _id: 58,
                        contenu: "metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec",
                        etablissement: 1
                    }, {
                        _id: 59,
                        contenu: "erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor.",
                        etablissement: 20
                    }, {
                        _id: 60,
                        contenu: "turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed",
                        etablissement: 19
                    }, {
                        _id: 61,
                        contenu: "eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer",
                        etablissement: 9
                    }, {
                        _id: 62,
                        contenu: "enim diam vel arcu. Curabitur ut odio vel est tempor",
                        etablissement: 7
                    }, {
                        _id: 63,
                        contenu: "nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra.",
                        etablissement: 3
                    }, {
                        _id: 64,
                        contenu: "sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem",
                        etablissement: 17
                    }, {
                        _id: 65,
                        contenu: "Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis",
                        etablissement: 8
                    }, {
                        _id: 66,
                        contenu: "pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu",
                        etablissement: 15
                    }, {
                        _id: 67,
                        contenu: "gravida sit amet, dapibus id, blandit at, nisi. Cum sociis",
                        etablissement: 4
                    }, {
                        _id: 68,
                        contenu: "facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant",
                        etablissement: 22
                    }, {
                        _id: 69,
                        contenu: "massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius",
                        etablissement: 2
                    }, {
                        _id: 70,
                        contenu: "penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean",
                        etablissement: 17
                    }, {
                        _id: 71,
                        contenu: "a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu.",
                        etablissement: 22
                    }, {
                        _id: 72,
                        contenu: "tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel,",
                        etablissement: 16
                    }, {
                        _id: 73,
                        contenu: "Nulla semper tellus id nunc interdum feugiat. Sed nec metus",
                        etablissement: 4
                    }, {
                        _id: 74,
                        contenu: "lorem ipsum sodales purus, in molestie tortor nibh sit amet",
                        etablissement: 11
                    }, {
                        _id: 75,
                        contenu: "in faucibus orci luctus et ultrices posuere cubilia Curae; Donec",
                        etablissement: 11
                    }, {
                        _id: 76,
                        contenu: "orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit",
                        etablissement: 4
                    }, {
                        _id: 77,
                        contenu: "risus. Donec nibh enim, gravida sit amet, dapibus id, blandit",
                        etablissement: 24
                    }, {
                        _id: 78,
                        contenu: "nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere",
                        etablissement: 19
                    }, {
                        _id: 79,
                        contenu: "at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum",
                        etablissement: 4
                    }, {
                        _id: 80,
                        contenu: "consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus",
                        etablissement: 22
                    }, {
                        _id: 81,
                        contenu: "nibh. Donec est mauris, rhoncus id, mollis nec, cursus a,",
                        etablissement: 17
                    }, {
                        _id: 82,
                        contenu: "odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa.",
                        etablissement: 8
                    }, {
                        _id: 83,
                        contenu: "fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies",
                        etablissement: 15
                    }, {
                        _id: 84,
                        contenu: "adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis",
                        etablissement: 12
                    }, {
                        _id: 85,
                        contenu: "sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus",
                        etablissement: 22
                    }, {
                        _id: 86,
                        contenu: "pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero.",
                        etablissement: 4
                    }, {
                        _id: 87,
                        contenu: "lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec",
                        etablissement: 15
                    }, {
                        _id: 88,
                        contenu: "leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis,",
                        etablissement: 20
                    }, {
                        _id: 89,
                        contenu: "In nec orci. Donec nibh. Quisque nonummy ipsum non arcu.",
                        etablissement: 13
                    }, {
                        _id: 90,
                        contenu: "mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare,",
                        etablissement: 6
                    }, {
                        _id: 91,
                        contenu: "vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros",
                        etablissement: 7
                    }, {
                        _id: 92,
                        contenu: "Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus.",
                        etablissement: 21
                    }, {
                        _id: 93,
                        contenu: "vel est tempor bibendum. Donec felis orci, adipiscing non, luctus",
                        etablissement: 3
                    }, {
                        _id: 94,
                        contenu: "turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla",
                        etablissement: 15
                    }, {
                        _id: 95,
                        contenu: "auctor, velit eget laoreet posuere, enim nisl elementum purus, accumsan",
                        etablissement: 13
                    }, {
                        _id: 96,
                        contenu: "Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna.",
                        etablissement: 18
                    }, {
                        _id: 97,
                        contenu: "feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam",
                        etablissement: 16
                    }, {
                        _id: 98,
                        contenu: "tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit",
                        etablissement: 17
                    }, {
                        _id: 99,
                        contenu: "ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede",
                        etablissement: 6
                    }, {
                        _id: 100,
                        contenu: "consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus.",
                        etablissement: 2
                    })
                    .then(() => console.log('finished populating Annonce'))
                    .catch(err => console.log('error populating Annonce', err));
            });
        DAnnonce.find({}).remove()
            .then(() => {
                DAnnonce.create({
                        _id: 1,
                        classe: 22,
                        annonce: 12,
                        date: "2017-04-04"
                    }, {
                        _id: 2,
                        classe: 11,
                        annonce: 2,
                        date: "2017-11-05"
                    }, {
                        _id: 3,
                        classe: 20,
                        annonce: 8,
                        date: "2016-12-04"
                    }, {
                        _id: 4,
                        classe: 7,
                        annonce: 49,
                        date: "2019-09-05"
                    }, {
                        _id: 5,
                        classe: 12,
                        annonce: 47,
                        date: "2016-02-05"
                    }, {
                        _id: 6,
                        classe: 18,
                        annonce: 18,
                        date: "2018-11-04"
                    }, {
                        _id: 7,
                        classe: 19,
                        annonce: 26,
                        date: "2017-02-04"
                    }, {
                        _id: 8,
                        classe: 1,
                        annonce: 25,
                        date: "2018-02-05"
                    }, {
                        _id: 9,
                        classe: 6,
                        annonce: 38,
                        date: "2017-05-05"
                    }, {
                        _id: 10,
                        classe: 5,
                        annonce: 37,
                        date: "2016-07-05"
                    }, {
                        _id: 11,
                        classe: 23,
                        annonce: 16,
                        date: "2016-07-05"
                    }, {
                        _id: 12,
                        classe: 22,
                        annonce: 14,
                        date: "2015-02-08"
                    }, {
                        _id: 13,
                        classe: 9,
                        annonce: 29,
                        date: "2011-12-05"
                    }, {
                        _id: 14,
                        classe: 12,
                        annonce: 21,
                        date: "2019-10-05"
                    }, {
                        _id: 15,
                        classe: 15,
                        annonce: 33,
                        date: "2019-12-05"
                    }, {
                        _id: 16,
                        classe: 6,
                        annonce: 15,
                        date: "2018-06-05"
                    }, {
                        _id: 17,
                        classe: 22,
                        annonce: 14,
                        date: "2016-01-05"
                    }, {
                        _id: 18,
                        classe: 15,
                        annonce: 48,
                        date: "2011-11-04"
                    }, {
                        _id: 19,
                        classe: 24,
                        annonce: 16,
                        date: "2014-06-04"
                    }, {
                        _id: 20,
                        classe: 25,
                        annonce: 3,
                        date: "2018-01-05"
                    }, {
                        _id: 21,
                        classe: 18,
                        annonce: 2,
                        date: "2014-04-04"
                    }, {
                        _id: 22,
                        classe: 14,
                        annonce: 33,
                        date: "2018-03-05"
                    }, {
                        _id: 23,
                        classe: 13,
                        annonce: 38,
                        date: "2018-01-05"
                    }, {
                        _id: 24,
                        classe: 16,
                        annonce: 44,
                        date: "2016-01-08"
                    }, {
                        _id: 25,
                        classe: 17,
                        annonce: 35,
                        date: "2011-05-05"
                    }, {
                        _id: 26,
                        classe: 14,
                        annonce: 18,
                        date: "2016-12-04"
                    }, {
                        _id: 27,
                        classe: 10,
                        annonce: 16,
                        date: "2013-07-05"
                    }, {
                        _id: 28,
                        classe: 16,
                        annonce: 12,
                        date: "2019-02-04"
                    }, {
                        _id: 29,
                        classe: 4,
                        annonce: 20,
                        date: "2017-10-05"
                    }, {
                        _id: 30,
                        classe: 13,
                        annonce: 30,
                        date: "2015-09-05"
                    }, {
                        _id: 31,
                        classe: 17,
                        annonce: 40,
                        date: "2019-07-04"
                    }, {
                        _id: 32,
                        classe: 17,
                        annonce: 28,
                        date: "2010-10-05"
                    }, {
                        _id: 33,
                        classe: 8,
                        annonce: 49,
                        date: "2019-02-04"
                    }, {
                        _id: 34,
                        classe: 11,
                        annonce: 8,
                        date: "2016-06-05"
                    }, {
                        _id: 35,
                        classe: 25,
                        annonce: 27,
                        date: "2011-01-05"
                    }, {
                        _id: 36,
                        classe: 23,
                        annonce: 25,
                        date: "2015-05-04"
                    }, {
                        _id: 37,
                        classe: 24,
                        annonce: 12,
                        date: "2019-04-04"
                    }, {
                        _id: 38,
                        classe: 11,
                        annonce: 46,
                        date: "2016-08-05"
                    }, {
                        _id: 39,
                        classe: 7,
                        annonce: 31,
                        date: "2015-02-08"
                    }, {
                        _id: 40,
                        classe: 2,
                        annonce: 9,
                        date: "2015-08-04"
                    }, {
                        _id: 41,
                        classe: 7,
                        annonce: 8,
                        date: "2016-01-08"
                    }, {
                        _id: 42,
                        classe: 25,
                        annonce: 4,
                        date: "2010-01-08"
                    }, {
                        _id: 43,
                        classe: 24,
                        annonce: 45,
                        date: "2017-03-04"
                    }, {
                        _id: 44,
                        classe: 2,
                        annonce: 42,
                        date: "2018-08-05"
                    }, {
                        _id: 45,
                        classe: 24,
                        annonce: 12,
                        date: "2019-12-05"
                    }, {
                        _id: 46,
                        classe: 11,
                        annonce: 16,
                        date: "2010-03-05"
                    }, {
                        _id: 47,
                        classe: 25,
                        annonce: 46,
                        date: "2014-04-04"
                    }, {
                        _id: 48,
                        classe: 1,
                        annonce: 31,
                        date: "2016-10-04"
                    }, {
                        _id: 49,
                        classe: 2,
                        annonce: 25,
                        date: "2012-06-05"
                    }, {
                        _id: 50,
                        classe: 24,
                        annonce: 20,
                        date: "2017-01-08"
                    }, {
                        _id: 51,
                        classe: 6,
                        annonce: 44,
                        date: "2014-11-04"
                    }, {
                        _id: 52,
                        classe: 9,
                        annonce: 35,
                        date: "2016-02-08"
                    }, {
                        _id: 53,
                        classe: 2,
                        annonce: 29,
                        date: "2016-01-05"
                    }, {
                        _id: 54,
                        classe: 15,
                        annonce: 41,
                        date: "2017-02-04"
                    }, {
                        _id: 55,
                        classe: 20,
                        annonce: 42,
                        date: "2018-02-08"
                    }, {
                        _id: 56,
                        classe: 20,
                        annonce: 11,
                        date: "2015-12-04"
                    }, {
                        _id: 57,
                        classe: 13,
                        annonce: 18,
                        date: "2017-03-04"
                    }, {
                        _id: 58,
                        classe: 15,
                        annonce: 16,
                        date: "2016-12-05"
                    }, {
                        _id: 59,
                        classe: 17,
                        annonce: 21,
                        date: "2018-09-05"
                    }, {
                        _id: 60,
                        classe: 5,
                        annonce: 9,
                        date: "2016-08-04"
                    }, {
                        _id: 61,
                        classe: 2,
                        annonce: 38,
                        date: "2010-04-05"
                    }, {
                        _id: 62,
                        classe: 17,
                        annonce: 37,
                        date: "2014-08-04"
                    }, {
                        _id: 63,
                        classe: 2,
                        annonce: 50,
                        date: "2018-03-04"
                    }, {
                        _id: 64,
                        classe: 11,
                        annonce: 38,
                        date: "2016-09-05"
                    }, {
                        _id: 65,
                        classe: 14,
                        annonce: 23,
                        date: "2016-12-04"
                    }, {
                        _id: 66,
                        classe: 6,
                        annonce: 22,
                        date: "2019-05-05"
                    }, {
                        _id: 67,
                        classe: 15,
                        annonce: 15,
                        date: "2016-10-05"
                    }, {
                        _id: 68,
                        classe: 15,
                        annonce: 45,
                        date: "2017-12-04"
                    }, {
                        _id: 69,
                        classe: 6,
                        annonce: 43,
                        date: "2013-04-04"
                    }, {
                        _id: 70,
                        classe: 3,
                        annonce: 27,
                        date: "2014-02-08"
                    }, {
                        _id: 71,
                        classe: 2,
                        annonce: 18,
                        date: "2016-03-04"
                    }, {
                        _id: 72,
                        classe: 7,
                        annonce: 50,
                        date: "2016-08-05"
                    }, {
                        _id: 73,
                        classe: 13,
                        annonce: 44,
                        date: "2016-02-05"
                    }, {
                        _id: 74,
                        classe: 23,
                        annonce: 13,
                        date: "2016-10-04"
                    }, {
                        _id: 75,
                        classe: 18,
                        annonce: 49,
                        date: "2016-02-04"
                    }, {
                        _id: 76,
                        classe: 9,
                        annonce: 39,
                        date: "2017-06-04"
                    }, {
                        _id: 77,
                        classe: 10,
                        annonce: 39,
                        date: "2017-05-04"
                    }, {
                        _id: 78,
                        classe: 23,
                        annonce: 11,
                        date: "2017-10-05"
                    }, {
                        _id: 79,
                        classe: 25,
                        annonce: 49,
                        date: "2016-08-04"
                    }, {
                        _id: 80,
                        classe: 11,
                        annonce: 13,
                        date: "2017-12-05"
                    }, {
                        _id: 81,
                        classe: 6,
                        annonce: 3,
                        date: "2016-02-04"
                    }, {
                        _id: 82,
                        classe: 1,
                        annonce: 14,
                        date: "2016-02-08"
                    }, {
                        _id: 83,
                        classe: 19,
                        annonce: 21,
                        date: "2016-04-05"
                    }, {
                        _id: 84,
                        classe: 24,
                        annonce: 13,
                        date: "2016-07-04"
                    }, {
                        _id: 85,
                        classe: 17,
                        annonce: 35,
                        date: "2018-12-05"
                    }, {
                        _id: 86,
                        classe: 23,
                        annonce: 10,
                        date: "2010-05-04"
                    }, {
                        _id: 87,
                        classe: 20,
                        annonce: 32,
                        date: "2014-03-05"
                    }, {
                        _id: 88,
                        classe: 23,
                        annonce: 8,
                        date: "2018-08-05"
                    }, {
                        _id: 89,
                        classe: 8,
                        annonce: 19,
                        date: "2017-04-05"
                    }, {
                        _id: 90,
                        classe: 13,
                        annonce: 13,
                        date: "2019-07-05"
                    }, {
                        _id: 91,
                        classe: 17,
                        annonce: 2,
                        date: "2016-02-08"
                    }, {
                        _id: 92,
                        classe: 11,
                        annonce: 19,
                        date: "2013-08-05"
                    }, {
                        _id: 93,
                        classe: 8,
                        annonce: 40,
                        date: "2015-09-05"
                    }, {
                        _id: 94,
                        classe: 11,
                        annonce: 38,
                        date: "2017-07-05"
                    }, {
                        _id: 95,
                        classe: 20,
                        annonce: 38,
                        date: "2018-09-04"
                    }, {
                        _id: 96,
                        classe: 20,
                        annonce: 43,
                        date: "2017-03-05"
                    }, {
                        _id: 97,
                        classe: 24,
                        annonce: 22,
                        date: "2017-10-05"
                    }, {
                        _id: 98,
                        classe: 14,
                        annonce: 14,
                        date: "2016-03-05"
                    }, {
                        _id: 99,
                        classe: 25,
                        annonce: 45,
                        date: "2017-01-05"
                    }, {
                        _id: 100,
                        classe: 5,
                        annonce: 11,
                        date: "2017-10-05"
                    }, {
                        _id: 101,
                        classe: 26,
                        annonce: 62,
                        date: "2019-03-05"
                    }, {
                        _id: 102,
                        classe: 36,
                        annonce: 89,
                        date: "2018-05-05"
                    }, {
                        _id: 103,
                        classe: 48,
                        annonce: 54,
                        date: "2017-09-04"
                    }, {
                        _id: 104,
                        classe: 28,
                        annonce: 90,
                        date: "2016-08-04"
                    }, {
                        _id: 105,
                        classe: 31,
                        annonce: 56,
                        date: "2019-11-05"
                    }, {
                        _id: 106,
                        classe: 32,
                        annonce: 98,
                        date: "2014-12-05"
                    }, {
                        _id: 107,
                        classe: 45,
                        annonce: 92,
                        date: "2013-11-04"
                    }, {
                        _id: 108,
                        classe: 42,
                        annonce: 87,
                        date: "2017-01-05"
                    }, {
                        _id: 109,
                        classe: 30,
                        annonce: 78,
                        date: "2010-06-05"
                    }, {
                        _id: 110,
                        classe: 42,
                        annonce: 82,
                        date: "2019-10-05"
                    }, {
                        _id: 111,
                        classe: 38,
                        annonce: 84,
                        date: "2018-04-05"
                    }, {
                        _id: 112,
                        classe: 27,
                        annonce: 64,
                        date: "2012-07-04"
                    }, {
                        _id: 113,
                        classe: 46,
                        annonce: 51,
                        date: "2017-05-04"
                    }, {
                        _id: 114,
                        classe: 35,
                        annonce: 75,
                        date: "2017-03-05"
                    }, {
                        _id: 115,
                        classe: 37,
                        annonce: 73,
                        date: "2014-07-04"
                    }, {
                        _id: 116,
                        classe: 42,
                        annonce: 70,
                        date: "2016-11-04"
                    }, {
                        _id: 117,
                        classe: 48,
                        annonce: 70,
                        date: "2014-01-08"
                    }, {
                        _id: 118,
                        classe: 47,
                        annonce: 89,
                        date: "2012-11-05"
                    }, {
                        _id: 119,
                        classe: 36,
                        annonce: 69,
                        date: "2013-11-05"
                    }, {
                        _id: 120,
                        classe: 37,
                        annonce: 66,
                        date: "2016-08-05"
                    }, {
                        _id: 121,
                        classe: 49,
                        annonce: 71,
                        date: "2017-07-05"
                    }, {
                        _id: 122,
                        classe: 46,
                        annonce: 52,
                        date: "2016-08-05"
                    }, {
                        _id: 123,
                        classe: 44,
                        annonce: 77,
                        date: "2017-08-05"
                    }, {
                        _id: 124,
                        classe: 43,
                        annonce: 67,
                        date: "2017-04-05"
                    }, {
                        _id: 125,
                        classe: 34,
                        annonce: 88,
                        date: "2010-03-04"
                    }, {
                        _id: 126,
                        classe: 32,
                        annonce: 74,
                        date: "2016-03-05"
                    }, {
                        _id: 127,
                        classe: 26,
                        annonce: 91,
                        date: "2016-10-04"
                    }, {
                        _id: 128,
                        classe: 26,
                        annonce: 78,
                        date: "2016-03-05"
                    }, {
                        _id: 129,
                        classe: 33,
                        annonce: 50,
                        date: "2016-07-04"
                    }, {
                        _id: 130,
                        classe: 44,
                        annonce: 98,
                        date: "2012-11-05"
                    }, {
                        _id: 131,
                        classe: 47,
                        annonce: 72,
                        date: "2017-01-08"
                    }, {
                        _id: 132,
                        classe: 26,
                        annonce: 55,
                        date: "2015-04-05"
                    }, {
                        _id: 133,
                        classe: 29,
                        annonce: 53,
                        date: "2017-11-05"
                    }, {
                        _id: 134,
                        classe: 39,
                        annonce: 86,
                        date: "2016-07-04"
                    }, {
                        _id: 135,
                        classe: 43,
                        annonce: 56,
                        date: "2015-11-05"
                    }, {
                        _id: 136,
                        classe: 39,
                        annonce: 61,
                        date: "2018-01-08"
                    }, {
                        _id: 137,
                        classe: 44,
                        annonce: 97,
                        date: "2017-07-04"
                    }, {
                        _id: 138,
                        classe: 50,
                        annonce: 77,
                        date: "2012-02-05"
                    }, {
                        _id: 139,
                        classe: 32,
                        annonce: 57,
                        date: "2014-07-04"
                    }, {
                        _id: 140,
                        classe: 26,
                        annonce: 88,
                        date: "2016-05-05"
                    }, {
                        _id: 141,
                        classe: 38,
                        annonce: 81,
                        date: "2012-08-04"
                    }, {
                        _id: 142,
                        classe: 39,
                        annonce: 53,
                        date: "2016-08-04"
                    }, {
                        _id: 143,
                        classe: 28,
                        annonce: 93,
                        date: "2019-07-04"
                    }, {
                        _id: 144,
                        classe: 45,
                        annonce: 72,
                        date: "2014-04-04"
                    }, {
                        _id: 145,
                        classe: 26,
                        annonce: 83,
                        date: "2017-10-04"
                    }, {
                        _id: 146,
                        classe: 36,
                        annonce: 67,
                        date: "2014-10-04"
                    }, {
                        _id: 147,
                        classe: 27,
                        annonce: 97,
                        date: "2018-07-04"
                    }, {
                        _id: 148,
                        classe: 33,
                        annonce: 52,
                        date: "2018-10-04"
                    }, {
                        _id: 149,
                        classe: 42,
                        annonce: 97,
                        date: "2017-07-04"
                    }, {
                        _id: 150,
                        classe: 26,
                        annonce: 79,
                        date: "2013-10-05"
                    }, {
                        _id: 151,
                        classe: 49,
                        annonce: 60,
                        date: "2016-05-04"
                    }, {
                        _id: 152,
                        classe: 38,
                        annonce: 60,
                        date: "2017-12-05"
                    }, {
                        _id: 153,
                        classe: 37,
                        annonce: 66,
                        date: "2010-05-05"
                    }, {
                        _id: 154,
                        classe: 31,
                        annonce: 51,
                        date: "2016-07-04"
                    }, {
                        _id: 155,
                        classe: 44,
                        annonce: 70,
                        date: "2018-12-05"
                    }, {
                        _id: 156,
                        classe: 32,
                        annonce: 55,
                        date: "2016-12-05"
                    }, {
                        _id: 157,
                        classe: 48,
                        annonce: 84,
                        date: "2016-08-04"
                    }, {
                        _id: 158,
                        classe: 30,
                        annonce: 75,
                        date: "2014-03-04"
                    }, {
                        _id: 159,
                        classe: 33,
                        annonce: 99,
                        date: "2018-08-04"
                    }, {
                        _id: 160,
                        classe: 48,
                        annonce: 86,
                        date: "2016-08-04"
                    }, {
                        _id: 161,
                        classe: 29,
                        annonce: 83,
                        date: "2016-10-05"
                    }, {
                        _id: 162,
                        classe: 26,
                        annonce: 86,
                        date: "2016-01-05"
                    }, {
                        _id: 163,
                        classe: 37,
                        annonce: 82,
                        date: "2015-01-08"
                    }, {
                        _id: 164,
                        classe: 38,
                        annonce: 75,
                        date: "2016-09-05"
                    }, {
                        _id: 165,
                        classe: 28,
                        annonce: 81,
                        date: "2013-09-04"
                    }, {
                        _id: 166,
                        classe: 45,
                        annonce: 89,
                        date: "2016-09-04"
                    }, {
                        _id: 167,
                        classe: 41,
                        annonce: 82,
                        date: "2017-05-05"
                    }, {
                        _id: 168,
                        classe: 26,
                        annonce: 56,
                        date: "2016-12-05"
                    }, {
                        _id: 169,
                        classe: 34,
                        annonce: 84,
                        date: "2016-05-04"
                    }, {
                        _id: 170,
                        classe: 30,
                        annonce: 95,
                        date: "2014-11-05"
                    }, {
                        _id: 171,
                        classe: 49,
                        annonce: 68,
                        date: "2016-01-05"
                    }, {
                        _id: 172,
                        classe: 26,
                        annonce: 64,
                        date: "2016-02-08"
                    }, {
                        _id: 173,
                        classe: 48,
                        annonce: 76,
                        date: "2017-09-05"
                    }, {
                        _id: 174,
                        classe: 50,
                        annonce: 52,
                        date: "2019-08-05"
                    }, {
                        _id: 175,
                        classe: 38,
                        annonce: 61,
                        date: "2019-05-05"
                    }, {
                        _id: 176,
                        classe: 44,
                        annonce: 76,
                        date: "2017-12-04"
                    }, {
                        _id: 177,
                        classe: 44,
                        annonce: 97,
                        date: "2018-01-08"
                    }, {
                        _id: 178,
                        classe: 32,
                        annonce: 75,
                        date: "2017-08-05"
                    }, {
                        _id: 179,
                        classe: 37,
                        annonce: 71,
                        date: "2016-11-05"
                    }, {
                        _id: 180,
                        classe: 33,
                        annonce: 100,
                        date: "2011-11-05"
                    }, {
                        _id: 181,
                        classe: 31,
                        annonce: 61,
                        date: "2017-05-05"
                    }, {
                        _id: 182,
                        classe: 36,
                        annonce: 51,
                        date: "2016-12-05"
                    }, {
                        _id: 183,
                        classe: 45,
                        annonce: 81,
                        date: "2017-01-05"
                    }, {
                        _id: 184,
                        classe: 48,
                        annonce: 88,
                        date: "2011-11-05"
                    }, {
                        _id: 185,
                        classe: 44,
                        annonce: 73,
                        date: "2017-06-05"
                    }, {
                        _id: 186,
                        classe: 41,
                        annonce: 75,
                        date: "2014-07-04"
                    }, {
                        _id: 187,
                        classe: 46,
                        annonce: 77,
                        date: "2018-04-04"
                    }, {
                        _id: 188,
                        classe: 33,
                        annonce: 87,
                        date: "2015-02-05"
                    }, {
                        _id: 189,
                        classe: 40,
                        annonce: 77,
                        date: "2014-01-05"
                    }, {
                        _id: 190,
                        classe: 27,
                        annonce: 88,
                        date: "2019-03-05"
                    }, {
                        _id: 191,
                        classe: 32,
                        annonce: 92,
                        date: "2019-03-05"
                    }, {
                        _id: 192,
                        classe: 26,
                        annonce: 64,
                        date: "2018-05-04"
                    }, {
                        _id: 193,
                        classe: 31,
                        annonce: 85,
                        date: "2017-10-05"
                    }, {
                        _id: 194,
                        classe: 44,
                        annonce: 66,
                        date: "2016-06-04"
                    }, {
                        _id: 195,
                        classe: 39,
                        annonce: 67,
                        date: "2017-03-04"
                    }, {
                        _id: 196,
                        classe: 28,
                        annonce: 93,
                        date: "2019-11-05"
                    }, {
                        _id: 197,
                        classe: 48,
                        annonce: 97,
                        date: "2017-12-05"
                    }, {
                        _id: 198,
                        classe: 41,
                        annonce: 89,
                        date: "2017-03-04"
                    }, {
                        _id: 199,
                        classe: 37,
                        annonce: 74,
                        date: "2018-05-05"
                    }, {
                        _id: 200,
                        classe: 34,
                        annonce: 86,
                        date: "2016-09-05"
                    })
                    .then(() => console.log('finished populating Detail Annonce'))
                    .catch(err => console.log('error populating Detail Annonce', err));
            });
        DUsers.find({}).remove()
            .then(() => {
                DUsers.create({
                        _id: 1,
                        user: "58b03802d98ff60ec2777f95",
                        etablissement: 1,
                        dateentree: "2016-09-30",
                        suivre: true,
                        active: true
                    }, {
                        _id: 2,
                        user: "58b03802d98ff60ec2777f92",
                        etablissement: 2,
                        dateentree: "2016-06-05",
                        suivre: true,
                        active: true
                    }, {
                        _id: 3,
                        user: "58b03802d98ff60ec2777f94",
                        etablissement: 1,
                        dateentree: "2017-11-19",
                        suivre: true,
                        active: true
                    }, {
                        _id: 4,
                        user: "58b03802d98ff60ec2777f94",
                        etablissement: 2,
                        dateentree: "2017-05-18",
                        suivre: true,
                        active: true
                    }, {
                        _id: 5,
                        user: "58b03802d98ff60ec2777f93",
                        etablissement: 1,
                        dateentree: "2017-04-13",
                        suivre: true,
                        active: true
                    }, {
                        _id: 6,
                        user: "58b03802d98ff60ec2777f93",
                        etablissement: 2,
                        dateentree: "2017-08-26",
                        suivre: true,
                        active: true
                    })
                    .then(() => console.log('finished populating Detail User'))
                    .catch(err => console.log('error populating Detail User', err));
            });
        suivi_cours_classe.find({}).remove()
            .then(() => {
                suivi_cours_classe.create({
                        _id: 1,
                        cours: 1,
                        classe: 1,
                        date: "2017-08-21"
                    }, {
                        _id: 2,
                        cours: 2,
                        classe: 2,
                        date: "2016-08-09"
                    }, {
                        _id: 3,
                        cours: 3,
                        classe: 3,
                        date: "2018-01-14"
                    }, {
                        _id: 4,
                        cours: 4,
                        classe: 4,
                        date: "2016-03-22"
                    }, {
                        _id: 5,
                        cours: 5,
                        classe: 5,
                        date: "2017-05-03"
                    }, {
                        _id: 6,
                        cours: 6,
                        classe: 6,
                        date: "2017-10-06"
                    }, {
                        _id: 7,
                        cours: 7,
                        classe: 7,
                        date: "2017-08-06"
                    }, {
                        _id: 8,
                        cours: 8,
                        classe: 8,
                        date: "2016-11-11"
                    }, {
                        _id: 9,
                        cours: 9,
                        classe: 9,
                        date: "2016-04-14"
                    }, {
                        _id: 10,
                        cours: 10,
                        classe: 10,
                        date: "2016-09-28"
                    }, {
                        _id: 11,
                        cours: 1,
                        classe: 10,
                        date: "2016-05-28"
                    }, {
                        _id: 13,
                        cours: 10,
                        classe: 1,
                        date: "2016-10-28"
                    }, {
                        _id: 14,
                        cours: 3,
                        classe: 8,
                        date: "2015-09-28"
                    })
                    .then(() => console.log('finished populating Suivi cours: classe'))
                    .catch(err => console.log('error populating Suivi cours: classe', err));
            });
        Annee.find({}).remove()
            .then(() => {
                Annee.create({
                        _id: 1,
                        user: "58b03802d98ff60ec2777f8e",
                        classe: 1,
                        annee: "2016-2017"
                    }, {
                        _id: 2,
                        user: "58b03802d98ff60ec2777f8f",
                        classe: 2,
                        annee: "2016-2017"
                    }, {
                        _id: 3,
                        user: "58b03802d98ff60ec2777f90",
                        classe: 3,
                        annee: "2016-2017"
                    }, {
                        _id: 4,
                        user: "58b03802d98ff60ec2777f91",
                        classe: 4,
                        annee: "2016-2017"
                    }, {
                        _id: 5,
                        user: "58b03802d98ff60ec2777f8e",
                        classe: 7,
                        annee: "2016-2017"
                    }, {
                        _id: 6,
                        user: "58b03802d98ff60ec2777f94",
                        classe: 1,
                        annee: "2016-2017"
                    }, {
                        _id: 7,
                        user: "58b03802d98ff60ec2777f94",
                        classe: 2,
                        annee: "2016-2017"
                    }, {
                        _id: 8,
                        user: "58b03802d98ff60ec2777f94",
                        classe: 3,
                        annee: "2016-2017"
                    }, {
                        _id: 9,
                        user: "58b03802d98ff60ec2777f94",
                        classe: 7,
                        annee: "2016-2017"
                    }, {
                        _id: 10,
                        user: "58b03802d98ff60ec2777f93",
                        classe: 4,
                        annee: "2016-2017"
                    })
                    .then(() => console.log('finished populating Année Académique'))
                    .catch(err => console.log('error populating Année Académique', err));
            });
        cours.find({}).remove()
            .then(() => {
                cours.create({
                        _id: 1,
                        description: "rutrum lorem ac",
                        contenu: "sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero",
                        date_creation: "2017-02-12",
                        sous_categorie: 12,
                        status: "Private",
                        user: "58b03802d98ff60ec2777f93"
                    }, {
                        _id: 2,
                        description: "eu, placerat eget,",
                        contenu: "ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt",
                        date_creation: "2016-05-04",
                        sous_categorie: 13,
                        status: "Private",
                        user: "58b03802d98ff60ec2777f93"
                    }, {
                        _id: 3,
                        description: "mauris ut mi. Duis risus odio, auctor vitae, aliquet",
                        contenu: "dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui.",
                        date_creation: "2016-04-26",
                        sous_categorie: 5,
                        status: "Private",
                        user: "58b03802d98ff60ec2777f93"
                    }, {
                        _id: 4,
                        description: "interdum",
                        contenu: "dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada",
                        date_creation: "2017-01-30",
                        sous_categorie: 9,
                        status: "Private",
                        user: "58b03802d98ff60ec2777f93"
                    }, {
                        _id: 5,
                        description: "quam quis diam. Pellentesque habitant",
                        contenu: "Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus",
                        date_creation: "2017-12-10",
                        sous_categorie: 2,
                        status: "Private",
                        user: "58b03802d98ff60ec2777f93"
                    }, {
                        _id: 6,
                        description: "augue. Sed molestie. Sed id risus quis diam luctus",
                        contenu: "In mi pede, nonummy ut, molestie in, tempus eu, ligula.",
                        date_creation: "2016-03-09",
                        sous_categorie: 11,
                        status: "Private",
                        user: "58b03802d98ff60ec2777f93"
                    }, {
                        _id: 7,
                        description: "ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam auctor, velit",
                        contenu: "elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris",
                        date_creation: "2017-10-14",
                        sous_categorie: 12,
                        status: "Private",
                        user: "58b03802d98ff60ec2777f93"
                    }, {
                        _id: 8,
                        description: "id nunc interdum feugiat. Sed",
                        contenu: "penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin",
                        date_creation: "2017-08-20",
                        sous_categorie: 4,
                        status: "Private",
                        user: "58b03802d98ff60ec2777f93"
                    }, {
                        _id: 9,
                        description: "commodo at, libero. Morbi accumsan laoreet",
                        contenu: "et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu.",
                        date_creation: "2016-03-01",
                        sous_categorie: 7,
                        status: "Private",
                        user: "58b03802d98ff60ec2777f93"
                    }, {
                        _id: 10,
                        description: "feugiat placerat velit. Quisque",
                        contenu: "nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus",
                        date_creation: "2017-11-27",
                        sous_categorie: 13,
                        status: "Private",
                        user: "58b03802d98ff60ec2777f93"
                    })
                    .then(() => console.log('finished populating cours:'))
                    .catch(err => console.log('error populating cours:', err));
            });
        Profil.find({}).remove()
            .then(() => {
                Profil.create({
                        _id: 1,
                        libelle: "Utilisateur Simple"
                    }, {
                        _id: 2,
                        libelle: "Etudiant"
                    }, {
                        _id: 3,
                        libelle: "Professeur"
                    }, {
                        _id: 4,
                        libelle: "Gerant Etablissement"
                    })
                    .then(() => console.log('finished populating Profil'))
                    .catch(err => console.log('error populating Profil', err));
            });
        DProfil.find({}).remove()
            .then(() => {
                DProfil.create({
                        _id: 1,
                        user: "58b03802d98ff60ec2777f8c",
                        profil: 1,
                        date: "2017-02-08"
                    }, {
                        _id: 2,
                        user: "58b03802d98ff60ec2777f8d",
                        profil: 1,
                        date: "2018-07-04"
                    }, {
                        _id: 3,
                        user: "58b03802d98ff60ec2777f8e",
                        profil: 2,
                        date: "2016-06-05"
                    }, {
                        _id: 4,
                        user: "58b03802d98ff60ec2777f8f",
                        profil: 2,
                        date: "2014-07-04"
                    }, {
                        _id: 5,
                        user: "58b03802d98ff60ec2777f90",
                        profil: 2,
                        date: "2014-07-04"
                    }, {
                        _id: 6,
                        user: "58b03802d98ff60ec2777f91",
                        profil: 2,
                        date: "2014-07-04"
                    }, {
                        _id: 7,
                        user: "58b03802d98ff60ec2777f92",
                        profil: 4,
                        date: "2014-07-04"
                    }, {
                        _id: 8,
                        user: "58b03802d98ff60ec2777f93",
                        profil: 3,
                        date: "2014-07-04"
                    }, {
                        _id: 9,
                        user: "58b03802d98ff60ec2777f94",
                        profil: 3,
                        date: "2014-07-04"
                    }, {
                        _id: 10,
                        user: "58b03802d98ff60ec2777f95",
                        profil: 4,
                        date: "2014-07-04"
                    })
                    .then(() => console.log('finished populating Détail Profil'))
                    .catch(err => console.log('error populating Détail Profil', err));
            });
        suivi.find({}).remove()
            .then(() => {
                suivi.create({
                        _id: 1,
                        id_user: "58b03802d98ff60ec2777f91",
                        id_prof: "58b03802d98ff60ec2777f93",
                        active: true,
                        date: "2017-02-03"
                    }, {
                        _id: 2,
                        id_user: "58b03802d98ff60ec2777f90",
                        id_prof: "58b03802d98ff60ec2777f93",
                        active: true,
                        date: "2016-08-29"
                    }, {
                        _id: 3,
                        id_user: "58b03802d98ff60ec2777f8f",
                        id_prof: "58b03802d98ff60ec2777f93",
                        active: true,
                        date: "2016-10-04"
                    }, {
                        _id: 4,
                        id_user: "58b03802d98ff60ec2777f8e",
                        id_prof: "58b03802d98ff60ec2777f93",
                        active: true,
                        date: "2018-01-19"
                    }, {
                        _id: 5,
                        id_user: "58b03802d98ff60ec2777f8d",
                        id_prof: "58b03802d98ff60ec2777f93",
                        active: true,
                        date: "2017-03-19"
                    }, {
                        _id: 6,
                        id_user: "58b03802d98ff60ec2777f8c",
                        id_prof: "58b03802d98ff60ec2777f93",
                        active: true,
                        date: "2016-06-13"
                    }, {
                        _id: 7,
                        id_user: "58b03802d98ff60ec2777f8e",
                        id_prof: "58b03802d98ff60ec2777f94",
                        active: true,
                        date: "2018-01-19"
                    }, {
                        _id: 8,
                        id_user: "58b03802d98ff60ec2777f8d",
                        id_prof: "58b03802d98ff60ec2777f94",
                        active: true,
                        date: "2017-03-19"
                    }, {
                        _id: 9,
                        id_user: "58b03802d98ff60ec2777f8c",
                        id_prof: "58b03802d98ff60ec2777f94",
                        active: true,
                        date: "2016-06-13"
                    })
                    .then(() => console.log('finished populating Suivi'))
                    .catch(err => console.log('error populating Suivi', err));
            });
        suivi_cours.find({}).remove()
            .then(() => {
                suivi_cours.create({
                        _id: 1,
                        cours: 1,
                        user: "58b03802d98ff60ec2777f8c",
                        date_suivie: "2017-08-11"
                    }, {
                        _id: 2,
                        cours: 2,
                        user: "58b03802d98ff60ec2777f8c",
                        date_suivie: "2016-04-28"
                    }, {
                        _id: 3,
                        cours: 3,
                        user: "58b03802d98ff60ec2777f8e",
                        date_suivie: "2017-05-01"
                    }, {
                        _id: 4,
                        cours: 4,
                        user: "58b03802d98ff60ec2777f8e",
                        date_suivie: "2017-01-11"
                    }, {
                        _id: 5,
                        cours: 5,
                        user: "58b03802d98ff60ec2777f8e",
                        date_suivie: "2017-02-21"
                    }, {
                        _id: 6,
                        cours: 6,
                        user: "58b03802d98ff60ec2777f8e",
                        date_suivie: "2017-04-03"
                    }, {
                        _id: 7,
                        cours: 7,
                        user: "58b03802d98ff60ec2777f8f",
                        date_suivie: "2016-07-21"
                    }, {
                        _id: 8,
                        cours: 8,
                        user: "58b03802d98ff60ec2777f8f",
                        date_suivie: "2017-04-15"
                    }, {
                        _id: 9,
                        cours: 9,
                        user: "58b03802d98ff60ec2777f8f",
                        date_suivie: "2017-12-21"
                    }, {
                        _id: 10,
                        cours: 10,
                        user: "58b03802d98ff60ec2777f8f",
                        date_suivie: "2017-03-19"
                    }, {
                        _id: 11,
                        cours: 10,
                        user: "58b03802d98ff60ec2777f8c",
                        date_suivie: "2016-11-20"
                    })
                    .then(() => console.log('finished populating Suivi cours'))
                    .catch(err => console.log('error populating Suivi cours', err));
            });
        Chapitre.find({}).remove()
            .then(() => {
                Chapitre.create({
                        _id: 1,
                        libelle: "vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend",
                        cours: 3
                    }, {
                        _id: 2,
                        libelle: "sapien,",
                        cours: 3
                    }, {
                        _id: 3,
                        libelle: "risus a ultricies",
                        cours: 3
                    }, {
                        _id: 4,
                        libelle: "tincidunt vehicula risus. Nulla",
                        cours: 3
                    }, {
                        _id: 5,
                        libelle: "Sed id risus quis",
                        cours: 1
                    }, {
                        _id: 6,
                        libelle: "torquent per conubia nostra, per",
                        cours: 1
                    }, {
                        _id: 7,
                        libelle: "magna. Nam",
                        cours: 3
                    }, {
                        _id: 8,
                        libelle: "id nunc",
                        cours: 3
                    }, {
                        _id: 9,
                        libelle: "metus. Aliquam erat volutpat. Nulla facilisis.",
                        cours: 3
                    }, {
                        _id: 10,
                        libelle: "commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies",
                        cours: 3
                    }, {
                        _id: 11,
                        libelle: "Morbi metus.",
                        cours: 2
                    }, {
                        _id: 12,
                        libelle: "elit, a feugiat tellus lorem eu metus. In",
                        cours: 2
                    }, {
                        _id: 13,
                        libelle: "facilisis eget,",
                        cours: 3
                    }, {
                        _id: 14,
                        libelle: "pharetra sed, hendrerit a, arcu. Sed et libero.",
                        cours: 2
                    }, {
                        _id: 15,
                        libelle: "nulla. Donec non justo. Proin non",
                        cours: 1
                    })
                    .then(() => console.log('finished populating Chapitre'))
                    .catch(err => console.log('error populating Chapitre', err));
            });
        Cycle.find({}).remove()
            .then(() => {
                Cycle.create({
                        _id: 1,
                        libelle: "sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula"
                    }, {
                        _id: 2,
                        libelle: "velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc"
                    }, {
                        _id: 3,
                        libelle: "arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut"
                    }, {
                        _id: 4,
                        libelle: "Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec"
                    })
                    .then(() => console.log('finished populating Cycle'))
                    .catch(err => console.log('error populating Cycle', err));
            });
        Dclasse.find({}).remove()
            .then(() => {
                Dclasse.create({
                        _id: 1,
                        classe: 1,
                        etablissement: 1,
                        date: "2016-05-30"
                    }, {
                        _id: 2,
                        classe: 2,
                        etablissement: 1,
                        date: "2016-07-18"
                    }, {
                        _id: 3,
                        classe: 3,
                        etablissement: 1,
                        date: "2017-01-30"
                    }, {
                        _id: 4,
                        classe: 4,
                        etablissement: 1,
                        date: "2016-12-02"
                    }, {
                        _id: 5,
                        classe: 5,
                        etablissement: 1,
                        date: "2017-04-30"
                    }, {
                        _id: 6,
                        classe: 6,
                        etablissement: 2,
                        date: "2017-01-21"
                    }, {
                        _id: 7,
                        classe: 7,
                        etablissement: 2,
                        date: "2016-11-14"
                    }, {
                        _id: 8,
                        classe: 8,
                        etablissement: 2,
                        date: "2017-03-16"
                    }, {
                        _id: 9,
                        classe: 9,
                        etablissement: 2,
                        date: "2016-07-30"
                    }, {
                        _id: 10,
                        classe: 10,
                        etablissement: 2,
                        date: "2017-10-01"
                    })
                    .then(() => console.log('finished populating Détail Classe'))
                    .catch(err => console.log('error populating Détail Classe', err));
            });
        SousCat.find({}).remove()
            .then(() => {
                SousCat.create({
                        _id: 1,
                        libelle: "convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum",
                        categorie: 4
                    }, {
                        _id: 2,
                        libelle: "sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut",
                        categorie: 5
                    }, {
                        _id: 3,
                        libelle: "ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices,",
                        categorie: 5
                    }, {
                        _id: 4,
                        libelle: "varius et, euismod et, commodo at, libero. Morbi accumsan laoreet",
                        categorie: 2
                    }, {
                        _id: 5,
                        libelle: "Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci,",
                        categorie: 2
                    }, {
                        _id: 6,
                        libelle: "nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus",
                        categorie: 5
                    }, {
                        _id: 7,
                        libelle: "orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu,",
                        categorie: 4
                    }, {
                        _id: 8,
                        libelle: "mattis ornare, lectus ante dictum mi, ac mattis velit justo",
                        categorie: 3
                    }, {
                        _id: 9,
                        libelle: "nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis",
                        categorie: 1
                    }, {
                        _id: 10,
                        libelle: "Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a,",
                        categorie: 4
                    }, {
                        _id: 11,
                        libelle: "neque. Nullam ut nisi a odio semper cursus. Integer mollis.",
                        categorie: 5
                    }, {
                        _id: 12,
                        libelle: "nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat",
                        categorie: 4
                    }, {
                        _id: 13,
                        libelle: "nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor",
                        categorie: 5
                    }, {
                        _id: 14,
                        libelle: "ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed",
                        categorie: 1
                    }, {
                        _id: 15,
                        libelle: "a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis",
                        categorie: 3
                    }, {
                        _id: 16,
                        libelle: "vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis.",
                        categorie: 4
                    }, {
                        _id: 17,
                        libelle: "ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec,",
                        categorie: 4
                    }, {
                        _id: 18,
                        libelle: "amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus",
                        categorie: 1
                    }, {
                        _id: 19,
                        libelle: "eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit",
                        categorie: 5
                    }, {
                        _id: 20,
                        libelle: "fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed",
                        categorie: 1
                    }, {
                        _id: 21,
                        libelle: "turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed",
                        categorie: 2
                    }, {
                        _id: 22,
                        libelle: "ornare sagittis felis. Donec tempor, est ac mattis semper, dui",
                        categorie: 3
                    }, {
                        _id: 23,
                        libelle: "cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut,",
                        categorie: 5
                    }, {
                        _id: 24,
                        libelle: "auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis",
                        categorie: 5
                    }, {
                        _id: 25,
                        libelle: "nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque,",
                        categorie: 5
                    })
                    .then(() => console.log('finished populating Sous Catégorie'))
                    .catch(err => console.log('error populating Sous Catégorie', err));
            });
        Categorie.find({}).remove()
            .then(() => {
                Categorie.create({
                        _id: 1,
                        libelle: "Informatique"
                    }, {
                        _id: 2,
                        libelle: "Sciences"
                    }, {
                        _id: 3,
                        libelle: "Comptablité"
                    }, {
                        _id: 4,
                        libelle: "Marketing"
                    }, {
                        _id: 5,
                        libelle: "Lettres"
                    })
                    .then(() => console.log('finished populating Catégorie'))
                    .catch(err => console.log('error populating Catégorie', err));
            });
    }
}