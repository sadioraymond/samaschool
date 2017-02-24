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
                        libelle: "Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus,",
                        cycle: 4
                    }, {
                        _id: 2,
                        libelle: "Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra.",
                        cycle: 4
                    }, {
                        _id: 3,
                        libelle: "nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse",
                        cycle: 2
                    }, {
                        _id: 4,
                        libelle: "ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem",
                        cycle: 2
                    }, {
                        _id: 5,
                        libelle: "Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim,",
                        cycle: 3
                    }, {
                        _id: 6,
                        libelle: "libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et,",
                        cycle: 2
                    }, {
                        _id: 7,
                        libelle: "Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non,",
                        cycle: 3
                    }, {
                        _id: 8,
                        libelle: "Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean",
                        cycle: 4
                    }, {
                        _id: 9,
                        libelle: "purus gravida sagittis. Duis gravida. Praesent eu nulla at sem",
                        cycle: 4
                    }, {
                        _id: 10,
                        libelle: "dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec,",
                        cycle: 2
                    }, {
                        _id: 11,
                        libelle: "magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem",
                        cycle: 3
                    }, {
                        _id: 12,
                        libelle: "Class aptent taciti sociosqu ad litora torquent per conubia nostra,",
                        cycle: 2
                    }, {
                        _id: 13,
                        libelle: "ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu,",
                        cycle: 1
                    }, {
                        _id: 14,
                        libelle: "orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras",
                        cycle: 3
                    }, {
                        _id: 15,
                        libelle: "ac orci. Ut semper pretium neque. Morbi quis urna. Nunc",
                        cycle: 3
                    }, {
                        _id: 16,
                        libelle: "felis. Donec tempor, est ac mattis semper, dui lectus rutrum",
                        cycle: 3
                    }, {
                        _id: 17,
                        libelle: "Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio.",
                        cycle: 4
                    })
                    .then(() => console.log('finished populating Niveau'))
                    .catch(err => console.log('error populating Niveau', err));
            });
        Etabli.find({}).remove()
            .then(() => {
                Etabli.create({
                        _id: 1,
                        libelle: "Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus",
                        adresse: "CP 598, 1868 Vivamus Chemin",
                        tel: "201-626-324-3444",
                        email: "sit.amet.metus@Curabiturmassa.co.uk"
                    }, {
                        _id: 2,
                        libelle: "ac metus vitae velit egestas lacinia. Sed congue, elit sed",
                        adresse: "CP 815, 6268 Diam Av.",
                        tel: "201-665-249-3835",
                        email: "a.mi.fringilla@ametmetus.net"
                    }, {
                        _id: 3,
                        libelle: "odio a purus. Duis elementum, dui quis accumsan convallis, ante",
                        adresse: "625-0873 Mauris Avenue",
                        tel: "674-9014",
                        email: "Etiam.ligula.tortor@anequeNullam.com"
                    }, {
                        _id: 4,
                        libelle: "nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras",
                        adresse: "CP 196, 9220 Consectetuer Impasse",
                        tel: "611-4559",
                        email: "malesuada.augue.ut@sagittisplaceratCras.com"
                    }, {
                        _id: 5,
                        libelle: "sit amet luctus vulputate, nisi sem semper erat, in consectetuer",
                        adresse: "201671 Eget, Chemin",
                        tel: "201-704-314-7025",
                        email: "ut.sem@MorbivehiculaPellentesque.org"
                    }, {
                        _id: 6,
                        libelle: "id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis",
                        adresse: "997-9400 Placerat Impasse",
                        tel: "201-144-597-0036",
                        email: "consectetuer.ipsum.nunc@pellentesquemassalobortis.org"
                    }, {
                        _id: 7,
                        libelle: "semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In",
                        adresse: "836-3250 Arcu. Chemin",
                        tel: "201-661-630-6665",
                        email: "Aenean.sed@interdum.co.uk"
                    }, {
                        _id: 8,
                        libelle: "ipsum primis in faucibus orci luctus et ultrices posuere cubilia",
                        adresse: "CP 200, 3592 Magnis Avenue",
                        tel: "474-5700",
                        email: "dignissim@orcisem.org"
                    }, {
                        _id: 9,
                        libelle: "nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque",
                        adresse: "695-6317 Donec Impasse",
                        tel: "599-9002",
                        email: "tincidunt.pede.ac@purusaccumsan.net"
                    }, {
                        _id: 10,
                        libelle: "nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse",
                        adresse: "CP 323, 2726 Molestie Rd.",
                        tel: "20169-5725",
                        email: "sem@in.com"
                    }, {
                        _id: 11,
                        libelle: "vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque",
                        adresse: "3889 Feugiat Route",
                        tel: "201-551-437-1041",
                        email: "nonummy.Fusce@pedemalesuada.edu"
                    }, {
                        _id: 12,
                        libelle: "urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus",
                        adresse: "Appartement 647-9634 Magna, Route",
                        tel: "20166-0111",
                        email: "orci.tincidunt.adipiscing@ac.edu"
                    }, {
                        _id: 13,
                        libelle: "accumsan neque et nunc. Quisque ornare tortor at risus. Nunc",
                        adresse: "Appartement 465-6495 Curabitur Route",
                        tel: "201-567-220-3567",
                        email: "sem.ut@dolorFuscemi.com"
                    }, {
                        _id: 14,
                        libelle: "feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare,",
                        adresse: "CP 827, 5613 Vestibulum Impasse",
                        tel: "742-3525",
                        email: "Sed.eget@lobortis.edu"
                    }, {
                        _id: 15,
                        libelle: "ut odio vel est tempor bibendum. Donec felis orci, adipiscing",
                        adresse: "CP 716, 5690 Sociis Rue",
                        tel: "201-605-853-4073",
                        email: "auctor.vitae@tincidunt.ca"
                    }, {
                        _id: 16,
                        libelle: "facilisi. Sed neque. Sed eget lacus. Mauris non dui nec",
                        adresse: "Appartement 449-7751 Vehicula Rue",
                        tel: "201-504-140-5329",
                        email: "Vestibulum.ante@aauctornon.net"
                    }, {
                        _id: 17,
                        libelle: "Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus.",
                        adresse: "CP 740, 4506 Vitae Rue",
                        tel: "201-996-753-8920",
                        email: "nec.cursus.a@dolorvitaedolor.edu"
                    }, {
                        _id: 18,
                        libelle: "enim, sit amet ornare lectus justo eu arcu. Morbi sit",
                        adresse: "Appartement 490-4192 Phasellus Av.",
                        tel: "446-5132",
                        email: "torquent@mattissemperdui.net"
                    }, {
                        _id: 19,
                        libelle: "vel, vulputate eu, odio. Phasellus at augue id ante dictum",
                        adresse: "CP 236, 1830 Ornare, Rue",
                        tel: "634-9948",
                        email: "Cum@Nunclaoreet.co.uk"
                    }, {
                        _id: 20,
                        libelle: "lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec",
                        adresse: "Appartement 536-6340 Et Impasse",
                        tel: "201-340-103-2294",
                        email: "non.lorem.vitae@Phasellusnulla.org"
                    }, {
                        _id: 21,
                        libelle: "rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in,",
                        adresse: "5093 Diam. Ave",
                        tel: "201-256-323-1197",
                        email: "commodo.auctor.velit@tellusAenean.ca"
                    }, {
                        _id: 22,
                        libelle: "urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat",
                        adresse: "716-3637 Ornare. Av.",
                        tel: "201-742-571-7803",
                        email: "feugiat@eueros.org"
                    }, {
                        _id: 23,
                        libelle: "Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus",
                        adresse: "Appartement 548-3952 Sit Rd.",
                        tel: "20194-1478",
                        email: "congue.turpis.In@aptent.ca"
                    }, {
                        _id: 24,
                        libelle: "enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida.",
                        adresse: "771-2611 In Av.",
                        tel: "746-7787",
                        email: "ornare.sagittis.felis@enimgravidasit.org"
                    }, {
                        _id: 25,
                        libelle: "sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis",
                        adresse: "926-8680 Phasellus Av.",
                        tel: "826-6221",
                        email: "sollicitudin.commodo.ipsum@quam.ca"
                    })
                    .then(() => console.log('finished populating Etablissement'))
                    .catch(err => console.log('error populating Etablissement', err));
            });
        Classe.find({}).remove()
            .then(() => {
                Classe.create({
                        _id: 1,
                        niveau: 13,
                        libelle: "dictum augue malesuada malesuada. Integer id magna et ipsum cursus"
                    }, {
                        _id: 2,
                        niveau: 17,
                        libelle: "eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum"
                    }, {
                        _id: 3,
                        niveau: 16,
                        libelle: "imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem"
                    }, {
                        _id: 4,
                        niveau: 1,
                        libelle: "dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In"
                    }, {
                        _id: 5,
                        niveau: 13,
                        libelle: "placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet,"
                    }, {
                        _id: 6,
                        niveau: 3,
                        libelle: "Curabitur egestas nunc sed libero. Proin sed turpis nec mauris"
                    }, {
                        _id: 7,
                        niveau: 11,
                        libelle: "eu tempor erat neque non quam. Pellentesque habitant morbi tristique"
                    }, {
                        _id: 8,
                        niveau: 1,
                        libelle: "non, egestas a, dui. Cras pellentesque. Sed dictum. Proin eget"
                    }, {
                        _id: 9,
                        niveau: 5,
                        libelle: "turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla"
                    }, {
                        _id: 10,
                        niveau: 3,
                        libelle: "vel arcu eu odio tristique pharetra. Quisque ac libero nec"
                    }, {
                        _id: 11,
                        niveau: 1,
                        libelle: "nulla at sem molestie sodales. Mauris blandit enim consequat purus."
                    }, {
                        _id: 12,
                        niveau: 3,
                        libelle: "malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam"
                    }, {
                        _id: 13,
                        niveau: 16,
                        libelle: "porttitor interdum. Sed auctor odio a purus. Duis elementum, dui"
                    }, {
                        _id: 14,
                        niveau: 5,
                        libelle: "mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent"
                    }, {
                        _id: 15,
                        niveau: 16,
                        libelle: "justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse"
                    }, {
                        _id: 16,
                        niveau: 1,
                        libelle: "turpis nec mauris blandit mattis. Cras eget nisi dictum augue"
                    }, {
                        _id: 17,
                        niveau: 2,
                        libelle: "justo. Proin non massa non ante bibendum ullamcorper. Duis cursus,"
                    }, {
                        _id: 18,
                        niveau: 17,
                        libelle: "felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla."
                    }, {
                        _id: 19,
                        niveau: 11,
                        libelle: "volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer"
                    }, {
                        _id: 20,
                        niveau: 2,
                        libelle: "sem semper erat, in consectetuer ipsum nunc id enim. Curabitur"
                    }, {
                        _id: 21,
                        niveau: 9,
                        libelle: "parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique"
                    }, {
                        _id: 22,
                        niveau: 6,
                        libelle: "mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus."
                    }, {
                        _id: 23,
                        niveau: 16,
                        libelle: "quis diam. Pellentesque habitant morbi tristique senectus et netus et"
                    }, {
                        _id: 24,
                        niveau: 2,
                        libelle: "risus, at fringilla purus mauris a nunc. In at pede."
                    }, {
                        _id: 25,
                        niveau: 3,
                        libelle: "ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper"
                    }, {
                        _id: 26,
                        niveau: 3,
                        libelle: "purus gravida sagittis. Duis gravida. Praesent eu nulla at sem"
                    }, {
                        _id: 27,
                        niveau: 11,
                        libelle: "lectus convallis est, vitae sodales nisi magna sed dui. Fusce"
                    }, {
                        _id: 28,
                        niveau: 3,
                        libelle: "porttitor tellus non magna. Nam ligula elit, pretium et, rutrum"
                    }, {
                        _id: 29,
                        niveau: 7,
                        libelle: "nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus"
                    }, {
                        _id: 30,
                        niveau: 12,
                        libelle: "Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit"
                    }, {
                        _id: 31,
                        niveau: 17,
                        libelle: "id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut"
                    }, {
                        _id: 32,
                        niveau: 5,
                        libelle: "Aliquam auctor, velit eget laoreet posuere, enim nisl elementum purus,"
                    }, {
                        _id: 33,
                        niveau: 13,
                        libelle: "malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis."
                    }, {
                        _id: 34,
                        niveau: 5,
                        libelle: "mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus."
                    }, {
                        _id: 35,
                        niveau: 2,
                        libelle: "id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis"
                    }, {
                        _id: 36,
                        niveau: 8,
                        libelle: "turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla"
                    }, {
                        _id: 37,
                        niveau: 9,
                        libelle: "Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo."
                    }, {
                        _id: 38,
                        niveau: 6,
                        libelle: "in molestie tortor nibh sit amet orci. Ut sagittis lobortis"
                    }, {
                        _id: 39,
                        niveau: 5,
                        libelle: "Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue"
                    }, {
                        _id: 40,
                        niveau: 11,
                        libelle: "Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet"
                    }, {
                        _id: 41,
                        niveau: 10,
                        libelle: "consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus."
                    }, {
                        _id: 42,
                        niveau: 13,
                        libelle: "egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est"
                    }, {
                        _id: 43,
                        niveau: 6,
                        libelle: "posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse"
                    }, {
                        _id: 44,
                        niveau: 14,
                        libelle: "dui. Cum sociis natoque penatibus et magnis dis parturient montes,"
                    }, {
                        _id: 45,
                        niveau: 10,
                        libelle: "sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor"
                    }, {
                        _id: 46,
                        niveau: 4,
                        libelle: "tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse"
                    }, {
                        _id: 47,
                        niveau: 9,
                        libelle: "varius orci, in consequat enim diam vel arcu. Curabitur ut"
                    }, {
                        _id: 48,
                        niveau: 7,
                        libelle: "eu augue porttitor interdum. Sed auctor odio a purus. Duis"
                    }, {
                        _id: 49,
                        niveau: 9,
                        libelle: "dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel,"
                    }, {
                        _id: 50,
                        niveau: 7,
                        libelle: "at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et"
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
                    .then(() => console.log('finished populating Suivi cours: classe'))
                    .catch(err => console.log('error populating Suivi cours: classe', err));
            });
        Annee.find({}).remove()
            .then(() => {
                Annee.create({
                        name: '2015-04'
                    }, {
                        name: '2016-05'
                    })
                    .then(() => console.log('finished populating Année Académique'))
                    .catch(err => console.log('error populating Année Académique', err));
            });
        cours.find({}).remove()
            .then(() => {
                cours.create({
                        _id: 1,
                        description: "sodales purus, in molestie tortor nibh sit amet orci. Ut",
                        contenu: "velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum",
                        date_creation: "2015-01-05",
                        sous_categorie: 16
                    }, {
                        _id: 2,
                        description: "et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus",
                        contenu: "quis lectus. Nullam suscipit, est ac",
                        date_creation: "2016-09-05",
                        sous_categorie: 7
                    }, {
                        _id: 3,
                        description: "euismod est arcu ac orci. Ut semper pretium neque. Morbi",
                        contenu: "condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin",
                        date_creation: "2015-06-04",
                        sous_categorie: 14
                    }, {
                        _id: 4,
                        description: "erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum",
                        contenu: "felis. Nulla tempor augue ac ipsum. Phasellus",
                        date_creation: "2016-05-04",
                        sous_categorie: 9
                    }, {
                        _id: 5,
                        description: "iaculis odio. Nam interdum enim non nisi. Aenean eget metus.",
                        contenu: "quis accumsan convallis, ante lectus",
                        date_creation: "2018-06-04",
                        sous_categorie: 6
                    }, {
                        _id: 6,
                        description: "erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla",
                        contenu: "a sollicitudin orci sem eget",
                        date_creation: "2016-02-05",
                        sous_categorie: 4
                    }, {
                        _id: 7,
                        description: "ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare,",
                        contenu: "Mauris ut quam vel sapien imperdiet ornare.",
                        date_creation: "2016-11-05",
                        sous_categorie: 7
                    }, {
                        _id: 8,
                        description: "adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut",
                        contenu: "Praesent luctus. Curabitur egestas",
                        date_creation: "2016-07-05",
                        sous_categorie: 7
                    }, {
                        _id: 9,
                        description: "metus. In nec orci. Donec nibh. Quisque nonummy ipsum non",
                        contenu: "Praesent luctus.",
                        date_creation: "2016-08-05",
                        sous_categorie: 20
                    }, {
                        _id: 10,
                        description: "ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non,",
                        contenu: "gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum",
                        date_creation: "2012-05-04",
                        sous_categorie: 9
                    }, {
                        _id: 11,
                        description: "tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam.",
                        contenu: "hendrerit neque. In ornare sagittis felis.",
                        date_creation: "2016-09-04",
                        sous_categorie: 3
                    }, {
                        _id: 12,
                        description: "nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse",
                        contenu: "ac tellus. Suspendisse sed dolor. Fusce mi lorem,",
                        date_creation: "2017-07-05",
                        sous_categorie: 11
                    }, {
                        _id: 13,
                        description: "faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum.",
                        contenu: "Duis gravida. Praesent eu nulla",
                        date_creation: "2016-05-05",
                        sous_categorie: 22
                    }, {
                        _id: 14,
                        description: "Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis",
                        contenu: "semper pretium neque. Morbi quis urna. Nunc quis",
                        date_creation: "2014-08-04",
                        sous_categorie: 5
                    }, {
                        _id: 15,
                        description: "metus urna convallis erat, eget tincidunt dui augue eu tellus.",
                        contenu: "eu, eleifend nec, malesuada ut, sem. Nulla interdum.",
                        date_creation: "2017-01-08",
                        sous_categorie: 21
                    }, {
                        _id: 16,
                        description: "inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In",
                        contenu: "Fusce aliquam, enim nec tempus scelerisque, lorem",
                        date_creation: "2016-10-05",
                        sous_categorie: 8
                    }, {
                        _id: 17,
                        description: "orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero",
                        contenu: "semper pretium neque. Morbi quis urna. Nunc quis",
                        date_creation: "2017-12-04",
                        sous_categorie: 20
                    }, {
                        _id: 18,
                        description: "Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius.",
                        contenu: "urna. Ut tincidunt vehicula risus.",
                        date_creation: "2018-06-04",
                        sous_categorie: 24
                    }, {
                        _id: 19,
                        description: "magna a neque. Nullam ut nisi a odio semper cursus.",
                        contenu: "eu dolor egestas rhoncus. Proin nisl sem, consequat nec,",
                        date_creation: "2018-09-05",
                        sous_categorie: 20
                    }, {
                        _id: 20,
                        description: "pellentesque, tellus sem mollis dui, in sodales elit erat vitae",
                        contenu: "malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam",
                        date_creation: "2017-08-04",
                        sous_categorie: 8
                    }, {
                        _id: 21,
                        description: "odio. Phasellus at augue id ante dictum cursus. Nunc mauris",
                        contenu: "arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing.",
                        date_creation: "2017-01-08",
                        sous_categorie: 25
                    }, {
                        _id: 22,
                        description: "ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et,",
                        contenu: "tempor arcu. Vestibulum ut eros",
                        date_creation: "2017-12-04",
                        sous_categorie: 2
                    }, {
                        _id: 23,
                        description: "facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus",
                        contenu: "Proin",
                        date_creation: "2016-05-05",
                        sous_categorie: 13
                    }, {
                        _id: 24,
                        description: "eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed",
                        contenu: "et libero. Proin mi. Aliquam gravida",
                        date_creation: "2016-01-08",
                        sous_categorie: 8
                    }, {
                        _id: 25,
                        description: "aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non,",
                        contenu: "malesuada. Integer id magna et ipsum cursus vestibulum.",
                        date_creation: "2017-07-04",
                        sous_categorie: 7
                    }, {
                        _id: 26,
                        description: "tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio.",
                        contenu: "dictum eleifend, nunc risus",
                        date_creation: "2016-06-05",
                        sous_categorie: 19
                    }, {
                        _id: 27,
                        description: "in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla",
                        contenu: "quis massa. Mauris vestibulum, neque",
                        date_creation: "2016-03-05",
                        sous_categorie: 22
                    }, {
                        _id: 28,
                        description: "dictum augue malesuada malesuada. Integer id magna et ipsum cursus",
                        contenu: "consequat auctor,",
                        date_creation: "2010-11-04",
                        sous_categorie: 22
                    }, {
                        _id: 29,
                        description: "eros non enim commodo hendrerit. Donec porttitor tellus non magna.",
                        contenu: "Mauris ut quam",
                        date_creation: "2016-06-05",
                        sous_categorie: 17
                    }, {
                        _id: 30,
                        description: "orci. Ut semper pretium neque. Morbi quis urna. Nunc quis",
                        contenu: "sociis natoque penatibus et magnis dis",
                        date_creation: "2017-07-05",
                        sous_categorie: 9
                    }, {
                        _id: 31,
                        description: "pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer",
                        contenu: "luctus sit amet, faucibus ut, nulla.",
                        date_creation: "2019-08-04",
                        sous_categorie: 14
                    }, {
                        _id: 32,
                        description: "vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget",
                        contenu: "Aenean euismod mauris eu elit. Nulla facilisi. Sed neque.",
                        date_creation: "2019-10-04",
                        sous_categorie: 15
                    }, {
                        _id: 33,
                        description: "ante ipsum primis in faucibus orci luctus et ultrices posuere",
                        contenu: "non nisi. Aenean eget metus. In nec",
                        date_creation: "2014-12-05",
                        sous_categorie: 4
                    }, {
                        _id: 34,
                        description: "Sed id risus quis diam luctus lobortis. Class aptent taciti",
                        contenu: "mauris. Integer sem elit,",
                        date_creation: "2019-05-05",
                        sous_categorie: 14
                    }, {
                        _id: 35,
                        description: "eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est.",
                        contenu: "Donec est mauris, rhoncus id,",
                        date_creation: "2017-08-04",
                        sous_categorie: 17
                    }, {
                        _id: 36,
                        description: "tempus non, lacinia at, iaculis quis, pede. Praesent eu dui.",
                        contenu: "tempor arcu. Vestibulum ut eros non enim commodo hendrerit.",
                        date_creation: "2019-05-04",
                        sous_categorie: 21
                    }, {
                        _id: 37,
                        description: "Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est.",
                        contenu: "dolor egestas rhoncus. Proin nisl",
                        date_creation: "2014-02-08",
                        sous_categorie: 8
                    }, {
                        _id: 38,
                        description: "risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a",
                        contenu: "felis, adipiscing fringilla,",
                        date_creation: "2016-12-04",
                        sous_categorie: 7
                    }, {
                        _id: 39,
                        description: "ipsum porta elit, a feugiat tellus lorem eu metus. In",
                        contenu: "lorem eu metus. In lorem. Donec",
                        date_creation: "2017-01-05",
                        sous_categorie: 13
                    }, {
                        _id: 40,
                        description: "felis eget varius ultrices, mauris ipsum porta elit, a feugiat",
                        contenu: "Pellentesque habitant morbi tristique senectus",
                        date_creation: "2017-05-04",
                        sous_categorie: 25
                    }, {
                        _id: 41,
                        description: "Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit.",
                        contenu: "ligula consectetuer rhoncus. Nullam",
                        date_creation: "2016-10-05",
                        sous_categorie: 8
                    }, {
                        _id: 42,
                        description: "elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec",
                        contenu: "Fusce aliquet magna a neque. Nullam ut nisi a",
                        date_creation: "2018-09-05",
                        sous_categorie: 10
                    }, {
                        _id: 43,
                        description: "neque. In ornare sagittis felis. Donec tempor, est ac mattis",
                        contenu: "dignissim magna a",
                        date_creation: "2018-09-05",
                        sous_categorie: 7
                    }, {
                        _id: 44,
                        description: "at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum",
                        contenu: "et pede. Nunc",
                        date_creation: "2011-09-04",
                        sous_categorie: 5
                    }, {
                        _id: 45,
                        description: "vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy",
                        contenu: "libero. Integer",
                        date_creation: "2017-12-05",
                        sous_categorie: 1
                    }, {
                        _id: 46,
                        description: "malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis",
                        contenu: "facilisis non,",
                        date_creation: "2017-09-05",
                        sous_categorie: 20
                    }, {
                        _id: 47,
                        description: "molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl",
                        contenu: "arcu. Vivamus sit",
                        date_creation: "2018-05-04",
                        sous_categorie: 12
                    }, {
                        _id: 48,
                        description: "velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod",
                        contenu: "quis diam. Pellentesque habitant morbi tristique senectus et",
                        date_creation: "2012-05-04",
                        sous_categorie: 8
                    }, {
                        _id: 49,
                        description: "risus. In mi pede, nonummy ut, molestie in, tempus eu,",
                        contenu: "lobortis",
                        date_creation: "2014-08-05",
                        sous_categorie: 12
                    }, {
                        _id: 50,
                        description: "rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem",
                        contenu: "Donec non justo. Proin non",
                        date_creation: "2017-07-04",
                        sous_categorie: 2
                    }, {
                        _id: 51,
                        description: "risus. Quisque libero lacus, varius et, euismod et, commodo at,",
                        contenu: "massa. Vestibulum",
                        date_creation: "2010-11-05",
                        sous_categorie: 8
                    }, {
                        _id: 52,
                        description: "augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel,",
                        contenu: "Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros",
                        date_creation: "2016-09-05",
                        sous_categorie: 24
                    }, {
                        _id: 53,
                        description: "rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed,",
                        contenu: "eleifend egestas. Sed pharetra,",
                        date_creation: "2017-03-05",
                        sous_categorie: 24
                    }, {
                        _id: 54,
                        description: "Mauris quis turpis vitae purus gravida sagittis. Duis gravida. Praesent",
                        contenu: "Donec",
                        date_creation: "2015-08-04",
                        sous_categorie: 19
                    }, {
                        _id: 55,
                        description: "sem, vitae aliquam eros turpis non enim. Mauris quis turpis",
                        contenu: "Nullam lobortis quam a felis ullamcorper viverra.",
                        date_creation: "2017-10-04",
                        sous_categorie: 5
                    }, {
                        _id: 56,
                        description: "Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra.",
                        contenu: "a, enim. Suspendisse aliquet,",
                        date_creation: "2016-11-05",
                        sous_categorie: 9
                    }, {
                        _id: 57,
                        description: "adipiscing, enim mi tempor lorem, eget mollis lectus pede et",
                        contenu: "risus. Quisque libero lacus,",
                        date_creation: "2011-04-05",
                        sous_categorie: 24
                    }, {
                        _id: 58,
                        description: "lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis",
                        contenu: "mi fringilla mi",
                        date_creation: "2017-05-05",
                        sous_categorie: 3
                    }, {
                        _id: 59,
                        description: "at fringilla purus mauris a nunc. In at pede. Cras",
                        contenu: "ante. Vivamus non lorem vitae odio sagittis semper.",
                        date_creation: "2018-11-04",
                        sous_categorie: 13
                    }, {
                        _id: 60,
                        description: "Proin non massa non ante bibendum ullamcorper. Duis cursus, diam",
                        contenu: "magna et ipsum cursus vestibulum.",
                        date_creation: "2018-02-08",
                        sous_categorie: 15
                    }, {
                        _id: 61,
                        description: "odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a,",
                        contenu: "tristique pellentesque, tellus sem mollis dui, in",
                        date_creation: "2016-05-04",
                        sous_categorie: 22
                    }, {
                        _id: 62,
                        description: "nunc. In at pede. Cras vulputate velit eu sem. Pellentesque",
                        contenu: "dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet",
                        date_creation: "2016-03-05",
                        sous_categorie: 17
                    }, {
                        _id: 63,
                        description: "semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices",
                        contenu: "tristique ac, eleifend vitae, erat. Vivamus",
                        date_creation: "2017-10-04",
                        sous_categorie: 23
                    }, {
                        _id: 64,
                        description: "in, dolor. Fusce feugiat. Lorem ipsum dolor sit amet, consectetuer",
                        contenu: "Class aptent taciti sociosqu ad litora",
                        date_creation: "2016-08-04",
                        sous_categorie: 24
                    }, {
                        _id: 65,
                        description: "Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui",
                        contenu: "sit amet lorem semper auctor. Mauris",
                        date_creation: "2016-02-05",
                        sous_categorie: 23
                    }, {
                        _id: 66,
                        description: "natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
                        contenu: "magna. Duis dignissim",
                        date_creation: "2015-06-04",
                        sous_categorie: 5
                    }, {
                        _id: 67,
                        description: "et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim",
                        contenu: "a, facilisis",
                        date_creation: "2016-06-04",
                        sous_categorie: 24
                    }, {
                        _id: 68,
                        description: "vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros",
                        contenu: "enim consequat purus. Maecenas libero est, congue a, aliquet vel,",
                        date_creation: "2018-01-08",
                        sous_categorie: 9
                    }, {
                        _id: 69,
                        description: "dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae,",
                        contenu: "consequat, lectus sit amet luctus vulputate, nisi sem semper",
                        date_creation: "2015-07-05",
                        sous_categorie: 11
                    }, {
                        _id: 70,
                        description: "montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc",
                        contenu: "sem, vitae aliquam eros turpis non enim. Mauris quis turpis",
                        date_creation: "2016-07-05",
                        sous_categorie: 17
                    }, {
                        _id: 71,
                        description: "dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel,",
                        contenu: "Proin vel arcu eu odio tristique pharetra.",
                        date_creation: "2016-01-05",
                        sous_categorie: 13
                    }, {
                        _id: 72,
                        description: "luctus lobortis. Class aptent taciti sociosqu ad litora torquent per",
                        contenu: "feugiat",
                        date_creation: "2016-09-05",
                        sous_categorie: 5
                    }, {
                        _id: 73,
                        description: "erat vitae risus. Duis a mi fringilla mi lacinia mattis.",
                        contenu: "sit amet ornare lectus justo eu",
                        date_creation: "2018-09-05",
                        sous_categorie: 7
                    }, {
                        _id: 74,
                        description: "vitae velit egestas lacinia. Sed congue, elit sed consequat auctor,",
                        contenu: "arcu et pede. Nunc",
                        date_creation: "2014-08-05",
                        sous_categorie: 18
                    }, {
                        _id: 75,
                        description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames",
                        contenu: "pede.",
                        date_creation: "2016-04-05",
                        sous_categorie: 7
                    }, {
                        _id: 76,
                        description: "velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus.",
                        contenu: "eget metus.",
                        date_creation: "2016-11-05",
                        sous_categorie: 3
                    }, {
                        _id: 77,
                        description: "libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus",
                        contenu: "eu odio tristique pharetra. Quisque ac libero nec ligula",
                        date_creation: "2018-02-08",
                        sous_categorie: 1
                    }, {
                        _id: 78,
                        description: "ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus.",
                        contenu: "feugiat tellus lorem eu metus. In lorem. Donec elementum,",
                        date_creation: "2018-12-04",
                        sous_categorie: 6
                    }, {
                        _id: 79,
                        description: "lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id,",
                        contenu: "Phasellus dolor elit, pellentesque a,",
                        date_creation: "2016-07-05",
                        sous_categorie: 5
                    }, {
                        _id: 80,
                        description: "blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer",
                        contenu: "eu, euismod ac,",
                        date_creation: "2016-08-04",
                        sous_categorie: 5
                    }, {
                        _id: 81,
                        description: "at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare",
                        contenu: "id magna et ipsum",
                        date_creation: "2014-06-05",
                        sous_categorie: 8
                    }, {
                        _id: 82,
                        description: "dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent",
                        contenu: "Nullam nisl. Maecenas malesuada fringilla est. Mauris",
                        date_creation: "2018-02-08",
                        sous_categorie: 1
                    }, {
                        _id: 83,
                        description: "ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque",
                        contenu: "ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et,",
                        date_creation: "2017-09-05",
                        sous_categorie: 24
                    }, {
                        _id: 84,
                        description: "facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo",
                        contenu: "ultricies sem magna nec quam. Curabitur vel lectus. Cum",
                        date_creation: "2018-06-05",
                        sous_categorie: 10
                    }, {
                        _id: 85,
                        description: "mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed",
                        contenu: "ullamcorper. Duis at lacus. Quisque",
                        date_creation: "2017-08-05",
                        sous_categorie: 18
                    }, {
                        _id: 86,
                        description: "Curabitur egestas nunc sed libero. Proin sed turpis nec mauris",
                        contenu: "vel quam dignissim pharetra. Nam ac nulla. In",
                        date_creation: "2013-09-05",
                        sous_categorie: 23
                    }, {
                        _id: 87,
                        description: "dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui.",
                        contenu: "Proin ultrices. Duis volutpat nunc sit",
                        date_creation: "2016-07-05",
                        sous_categorie: 19
                    }, {
                        _id: 88,
                        description: "felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla.",
                        contenu: "a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc",
                        date_creation: "2012-01-05",
                        sous_categorie: 24
                    }, {
                        _id: 89,
                        description: "orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras",
                        contenu: "sapien imperdiet ornare. In faucibus. Morbi vehicula.",
                        date_creation: "2016-07-04",
                        sous_categorie: 23
                    }, {
                        _id: 90,
                        description: "sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam",
                        contenu: "ultrices. Vivamus",
                        date_creation: "2013-11-05",
                        sous_categorie: 6
                    }, {
                        _id: 91,
                        description: "Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla",
                        contenu: "lobortis. Class aptent taciti sociosqu ad litora torquent per",
                        date_creation: "2016-04-04",
                        sous_categorie: 11
                    }, {
                        _id: 92,
                        description: "Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius.",
                        contenu: "auctor. Mauris vel turpis. Aliquam",
                        date_creation: "2016-09-05",
                        sous_categorie: 21
                    }, {
                        _id: 93,
                        description: "velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque",
                        contenu: "risus. Nunc ac sem",
                        date_creation: "2019-01-05",
                        sous_categorie: 23
                    }, {
                        _id: 94,
                        description: "risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a",
                        contenu: "lacus. Nulla tincidunt, neque vitae semper egestas, urna justo",
                        date_creation: "2018-05-04",
                        sous_categorie: 17
                    }, {
                        _id: 95,
                        description: "imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus.",
                        contenu: "est",
                        date_creation: "2018-05-05",
                        sous_categorie: 3
                    }, {
                        _id: 96,
                        description: "consequat, lectus sit amet luctus vulputate, nisi sem semper erat,",
                        contenu: "Quisque purus sapien, gravida non,",
                        date_creation: "2016-11-05",
                        sous_categorie: 8
                    }, {
                        _id: 97,
                        description: "montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc",
                        contenu: "Sed auctor odio a purus.",
                        date_creation: "2017-10-04",
                        sous_categorie: 16
                    }, {
                        _id: 98,
                        description: "ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id",
                        contenu: "lacus vestibulum lorem, sit amet ultricies sem magna",
                        date_creation: "2019-01-08",
                        sous_categorie: 4
                    }, {
                        _id: 99,
                        description: "mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae,",
                        contenu: "massa. Integer vitae",
                        date_creation: "2018-06-05",
                        sous_categorie: 18
                    }, {
                        _id: 100,
                        description: "risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a",
                        contenu: "Nullam",
                        date_creation: "2017-09-04",
                        sous_categorie: 6
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
                        profil: 2,
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
        suivi_cours.find({}).remove()
            .then(() => {
                suivi_cours.create({
                        _id: 1,
                        cours: 56,
                        user: "58b03802d98ff60ec2777f8c",
                        date_suivie: "2018-10-04"
                    }, {
                        _id: 2,
                        cours: 42,
                        user: "58b03802d98ff60ec2777f8c",
                        date_suivie: "2017-11-04"
                    }, {
                        _id: 3,
                        cours: 52,
                        user: "58b03802d98ff60ec2777f8c",
                        date_suivie: "2011-10-05"
                    }, {
                        _id: 4,
                        cours: 37,
                        user: "58b03802d98ff60ec2777f8c",
                        date_suivie: "2018-09-04"
                    }, {
                        _id: 5,
                        cours: 8,
                        user: "58b03802d98ff60ec2777f8c",
                        date_suivie: "2016-01-08"
                    }, {
                        _id: 6,
                        cours: 56,
                        user: "58b03802d98ff60ec2777f8c",
                        date_suivie: "2015-06-05"
                    }, {
                        _id: 7,
                        cours: 52,
                        user: "58b03802d98ff60ec2777f8c",
                        date_suivie: "2018-04-05"
                    }, {
                        _id: 8,
                        cours: 82,
                        user: "58b03802d98ff60ec2777f8c",
                        date_suivie: "2019-12-04"
                    }, {
                        _id: 9,
                        cours: 73,
                        user: "58b03802d98ff60ec2777f8c",
                        date_suivie: "2017-07-05"
                    }, {
                        _id: 10,
                        cours: 46,
                        user: "58b03802d98ff60ec2777f8c",
                        date_suivie: "2017-03-05"
                    }, {
                        _id: 11,
                        cours: 3,
                        user: "58b03802d98ff60ec2777f8c",
                        date_suivie: "2017-06-04"
                    }, {
                        _id: 12,
                        cours: 55,
                        user: "58b03802d98ff60ec2777f8c",
                        date_suivie: "2018-01-05"
                    }, {
                        _id: 13,
                        cours: 61,
                        user: "58b03802d98ff60ec2777f8c",
                        date_suivie: "2019-10-04"
                    }, {
                        _id: 14,
                        cours: 49,
                        user: "58b03802d98ff60ec2777f8c",
                        date_suivie: "2018-02-05"
                    }, {
                        _id: 15,
                        cours: 10,
                        user: "58b03802d98ff60ec2777f8d",
                        date_suivie: "2018-08-05"
                    }, {
                        _id: 16,
                        cours: 37,
                        user: "58b03802d98ff60ec2777f8d",
                        date_suivie: "2011-10-05"
                    }, {
                        _id: 17,
                        cours: 31,
                        user: "58b03802d98ff60ec2777f8d",
                        date_suivie: "2016-11-04"
                    }, {
                        _id: 18,
                        cours: 59,
                        user: "58b03802d98ff60ec2777f8d",
                        date_suivie: "2010-10-05"
                    }, {
                        _id: 19,
                        cours: 27,
                        user: "58b03802d98ff60ec2777f8d",
                        date_suivie: "2017-10-05"
                    }, {
                        _id: 20,
                        cours: 94,
                        user: "58b03802d98ff60ec2777f8d",
                        date_suivie: "2017-03-05"
                    }, {
                        _id: 21,
                        cours: 5,
                        user: "58b03802d98ff60ec2777f8e",
                        date_suivie: "2015-11-05"
                    }, {
                        _id: 22,
                        cours: 36,
                        user: "58b03802d98ff60ec2777f8e",
                        date_suivie: "2018-12-04"
                    }, {
                        _id: 23,
                        cours: 17,
                        user: "58b03802d98ff60ec2777f8e",
                        date_suivie: "2016-07-05"
                    }, {
                        _id: 24,
                        cours: 40,
                        user: "58b03802d98ff60ec2777f8e",
                        date_suivie: "2016-07-05"
                    }, {
                        _id: 25,
                        cours: 46,
                        user: "58b03802d98ff60ec2777f8f",
                        date_suivie: "2017-09-04"
                    }, {
                        _id: 26,
                        cours: 57,
                        user: "58b03802d98ff60ec2777f8f",
                        date_suivie: "2016-01-08"
                    }, {
                        _id: 27,
                        cours: 98,
                        user: "58b03802d98ff60ec2777f8f",
                        date_suivie: "2016-11-04"
                    }, {
                        _id: 28,
                        cours: 55,
                        user: "58b03802d98ff60ec2777f8f",
                        date_suivie: "2019-05-04"
                    }, {
                        _id: 29,
                        cours: 61,
                        user: "58b03802d98ff60ec2777f90",
                        date_suivie: "2017-01-05"
                    }, {
                        _id: 30,
                        cours: 47,
                        user: "58b03802d98ff60ec2777f90",
                        date_suivie: "2016-08-04"
                    }, {
                        _id: 31,
                        cours: 90,
                        user: "58b03802d98ff60ec2777f90",
                        date_suivie: "2014-11-05"
                    }, {
                        _id: 32,
                        cours: 95,
                        user: "58b03802d98ff60ec2777f91",
                        date_suivie: "2010-11-05"
                    }, {
                        _id: 33,
                        cours: 25,
                        user: "58b03802d98ff60ec2777f91",
                        date_suivie: "2017-06-04"
                    }, {
                        _id: 34,
                        cours: 28,
                        user: "58b03802d98ff60ec2777f91",
                        date_suivie: "2012-10-05"
                    }, {
                        _id: 35,
                        cours: 27,
                        user: "58b03802d98ff60ec2777f92",
                        date_suivie: "2014-08-05"
                    }, {
                        _id: 36,
                        cours: 41,
                        user: "58b03802d98ff60ec2777f92",
                        date_suivie: "2016-03-04"
                    }, {
                        _id: 37,
                        cours: 53,
                        user: "58b03802d98ff60ec2777f92",
                        date_suivie: "2014-03-05"
                    }, {
                        _id: 38,
                        cours: 80,
                        user: "58b03802d98ff60ec2777f92",
                        date_suivie: "2017-09-04"
                    }, {
                        _id: 39,
                        cours: 58,
                        user: "58b03802d98ff60ec2777f92",
                        date_suivie: "2019-04-05"
                    }, {
                        _id: 40,
                        cours: 45,
                        user: "58b03802d98ff60ec2777f92",
                        date_suivie: "2016-05-04"
                    }, {
                        _id: 41,
                        cours: 6,
                        user: "58b03802d98ff60ec2777f92",
                        date_suivie: "2011-02-08"
                    }, {
                        _id: 42,
                        cours: 80,
                        user: "58b03802d98ff60ec2777f92",
                        date_suivie: "2017-01-08"
                    }, {
                        _id: 43,
                        cours: 77,
                        user: "58b03802d98ff60ec2777f92",
                        date_suivie: "2016-11-05"
                    }, {
                        _id: 44,
                        cours: 100,
                        user: "58b03802d98ff60ec2777f93",
                        date_suivie: "2014-04-04"
                    }, {
                        _id: 45,
                        cours: 20,
                        user: "58b03802d98ff60ec2777f93",
                        date_suivie: "2016-08-04"
                    }, {
                        _id: 46,
                        cours: 41,
                        user: "58b03802d98ff60ec2777f93",
                        date_suivie: "2017-01-08"
                    }, {
                        _id: 47,
                        cours: 77,
                        user: "58b03802d98ff60ec2777f93",
                        date_suivie: "2012-10-05"
                    }, {
                        _id: 48,
                        cours: 90,
                        user: "58b03802d98ff60ec2777f94",
                        date_suivie: "2016-07-05"
                    }, {
                        _id: 49,
                        cours: 10,
                        user: "58b03802d98ff60ec2777f94",
                        date_suivie: "2016-04-04"
                    }, {
                        _id: 50,
                        cours: 77,
                        user: "58b03802d98ff60ec2777f94",
                        date_suivie: "2017-05-05"
                    }, {
                        _id: 51,
                        cours: 1,
                        user: "58b03802d98ff60ec2777f94",
                        date_suivie: "2016-10-05"
                    }, {
                        _id: 52,
                        cours: 69,
                        user: "58b03802d98ff60ec2777f94",
                        date_suivie: "2017-12-04"
                    }, {
                        _id: 53,
                        cours: 22,
                        user: "58b03802d98ff60ec2777f94",
                        date_suivie: "2016-11-05"
                    }, {
                        _id: 54,
                        cours: 81,
                        user: "58b03802d98ff60ec2777f94",
                        date_suivie: "2017-03-05"
                    }, {
                        _id: 55,
                        cours: 82,
                        user: "58b03802d98ff60ec2777f94",
                        date_suivie: "2017-07-05"
                    }, {
                        _id: 56,
                        cours: 75,
                        user: "58b03802d98ff60ec2777f95",
                        date_suivie: "2017-09-04"
                    }, {
                        _id: 57,
                        cours: 2,
                        user: "58b03802d98ff60ec2777f95",
                        date_suivie: "2017-09-04"
                    }, {
                        _id: 58,
                        cours: 37,
                        user: "58b03802d98ff60ec2777f95",
                        date_suivie: "2016-07-04"
                    }, {
                        _id: 59,
                        cours: 71,
                        user: "58b03802d98ff60ec2777f95",
                        date_suivie: "2017-11-04"
                    }, {
                        _id: 60,
                        cours: 3,
                        user: "58b03802d98ff60ec2777f95",
                        date_suivie: "2017-01-08"
                    }, {
                        _id: 61,
                        cours: 63,
                        user: "58b03802d98ff60ec2777f95",
                        date_suivie: "2012-08-05"
                    }, {
                        _id: 62,
                        cours: 95,
                        user: "58b03802d98ff60ec2777f95",
                        date_suivie: "2010-02-05"
                    }, {
                        _id: 63,
                        cours: 91,
                        user: "58b03802d98ff60ec2777f95",
                        date_suivie: "2016-07-04"
                    }, {
                        _id: 64,
                        cours: 89,
                        user: "58b03802d98ff60ec2777f95",
                        date_suivie: "2018-07-04"
                    }, {
                        _id: 65,
                        cours: 47,
                        user: "58b03802d98ff60ec2777f95",
                        date_suivie: "2016-02-05"
                    }, {
                        _id: 66,
                        cours: 9,
                        user: "58b03802d98ff60ec2777f95",
                        date_suivie: "2016-05-05"
                    }, {
                        _id: 67,
                        cours: 45,
                        user: "58b03802d98ff60ec2777f95",
                        date_suivie: "2016-11-05"
                    }, {
                        _id: 68,
                        cours: 17,
                        user: "58b03802d98ff60ec2777f95",
                        date_suivie: "2015-05-05"
                    }, {
                        _id: 69,
                        cours: 34,
                        user: "58b03802d98ff60ec2777f95",
                        date_suivie: "2019-06-04"
                    })
                    .then(() => console.log('finished populating Suivi cours'))
                    .catch(err => console.log('error populating Suivi cours', err));
            });
        Chapitre.find({}).remove()
            .then(() => {
                Chapitre.create({
                        _id: 1,
                        libelle: "Cras convallis convallis dolor. Quisque tincidunt pede ac urna. Ut",
                        cours: 33
                    }, {
                        _id: 2,
                        libelle: "ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci",
                        cours: 42
                    }, {
                        _id: 3,
                        libelle: "eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus",
                        cours: 23
                    }, {
                        _id: 4,
                        libelle: "facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant",
                        cours: 23
                    }, {
                        _id: 5,
                        libelle: "lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus",
                        cours: 22
                    }, {
                        _id: 6,
                        libelle: "ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque",
                        cours: 29
                    }, {
                        _id: 7,
                        libelle: "Aliquam auctor, velit eget laoreet posuere, enim nisl elementum purus,",
                        cours: 77
                    }, {
                        _id: 8,
                        libelle: "sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum",
                        cours: 44
                    }, {
                        _id: 9,
                        libelle: "sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut",
                        cours: 77
                    }, {
                        _id: 10,
                        libelle: "sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam",
                        cours: 32
                    }, {
                        _id: 11,
                        libelle: "dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl.",
                        cours: 78
                    }, {
                        _id: 12,
                        libelle: "erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla.",
                        cours: 75
                    }, {
                        _id: 13,
                        libelle: "eleifend, nunc risus varius orci, in consequat enim diam vel",
                        cours: 12
                    }, {
                        _id: 14,
                        libelle: "feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum",
                        cours: 19
                    }, {
                        _id: 15,
                        libelle: "ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit,",
                        cours: 51
                    }, {
                        _id: 16,
                        libelle: "Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet",
                        cours: 70
                    }, {
                        _id: 17,
                        libelle: "Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula",
                        cours: 8
                    }, {
                        _id: 18,
                        libelle: "lobortis risus. In mi pede, nonummy ut, molestie in, tempus",
                        cours: 61
                    }, {
                        _id: 19,
                        libelle: "in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit",
                        cours: 52
                    }, {
                        _id: 20,
                        libelle: "orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras",
                        cours: 54
                    }, {
                        _id: 21,
                        libelle: "Donec est mauris, rhoncus id, mollis nec, cursus a, enim.",
                        cours: 99
                    }, {
                        _id: 22,
                        libelle: "Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus,",
                        cours: 93
                    }, {
                        _id: 23,
                        libelle: "luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget,",
                        cours: 3
                    }, {
                        _id: 24,
                        libelle: "convallis convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt",
                        cours: 10
                    }, {
                        _id: 25,
                        libelle: "nibh. Donec est mauris, rhoncus id, mollis nec, cursus a,",
                        cours: 67
                    }, {
                        _id: 26,
                        libelle: "nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse",
                        cours: 63
                    }, {
                        _id: 27,
                        libelle: "eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec",
                        cours: 92
                    }, {
                        _id: 28,
                        libelle: "bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna",
                        cours: 29
                    }, {
                        _id: 29,
                        libelle: "vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu.",
                        cours: 20
                    }, {
                        _id: 30,
                        libelle: "ultrices a, auctor non, feugiat nec, diam. Duis mi enim,",
                        cours: 19
                    }, {
                        _id: 31,
                        libelle: "id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut",
                        cours: 15
                    }, {
                        _id: 32,
                        libelle: "tristique senectus et netus et malesuada fames ac turpis egestas.",
                        cours: 11
                    }, {
                        _id: 33,
                        libelle: "enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula",
                        cours: 9
                    }, {
                        _id: 34,
                        libelle: "tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis,",
                        cours: 8
                    }, {
                        _id: 35,
                        libelle: "Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam",
                        cours: 70
                    }, {
                        _id: 36,
                        libelle: "et nunc. Quisque ornare tortor at risus. Nunc ac sem",
                        cours: 78
                    }, {
                        _id: 37,
                        libelle: "senectus et netus et malesuada fames ac turpis egestas. Aliquam",
                        cours: 61
                    }, {
                        _id: 38,
                        libelle: "non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum",
                        cours: 54
                    }, {
                        _id: 39,
                        libelle: "Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla",
                        cours: 68
                    }, {
                        _id: 40,
                        libelle: "neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin",
                        cours: 8
                    }, {
                        _id: 41,
                        libelle: "ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor",
                        cours: 97
                    }, {
                        _id: 42,
                        libelle: "semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In",
                        cours: 62
                    }, {
                        _id: 43,
                        libelle: "dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero.",
                        cours: 44
                    }, {
                        _id: 44,
                        libelle: "metus eu erat semper rutrum. Fusce dolor quam, elementum at,",
                        cours: 26
                    }, {
                        _id: 45,
                        libelle: "at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque",
                        cours: 45
                    }, {
                        _id: 46,
                        libelle: "Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet",
                        cours: 41
                    }, {
                        _id: 47,
                        libelle: "urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat",
                        cours: 28
                    }, {
                        _id: 48,
                        libelle: "odio a purus. Duis elementum, dui quis accumsan convallis, ante",
                        cours: 93
                    }, {
                        _id: 49,
                        libelle: "Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum",
                        cours: 25
                    }, {
                        _id: 50,
                        libelle: "penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec",
                        cours: 53
                    }, {
                        _id: 51,
                        libelle: "tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec",
                        cours: 88
                    }, {
                        _id: 52,
                        libelle: "dolor. Fusce feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing",
                        cours: 32
                    }, {
                        _id: 53,
                        libelle: "amet ante. Vivamus non lorem vitae odio sagittis semper. Nam",
                        cours: 68
                    }, {
                        _id: 54,
                        libelle: "libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus",
                        cours: 32
                    }, {
                        _id: 55,
                        libelle: "ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum",
                        cours: 98
                    }, {
                        _id: 56,
                        libelle: "risus, at fringilla purus mauris a nunc. In at pede.",
                        cours: 13
                    }, {
                        _id: 57,
                        libelle: "velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque",
                        cours: 53
                    }, {
                        _id: 58,
                        libelle: "facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus",
                        cours: 90
                    }, {
                        _id: 59,
                        libelle: "id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis",
                        cours: 22
                    }, {
                        _id: 60,
                        libelle: "pede. Cum sociis natoque penatibus et magnis dis parturient montes,",
                        cours: 52
                    }, {
                        _id: 61,
                        libelle: "Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper",
                        cours: 88
                    }, {
                        _id: 62,
                        libelle: "vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat",
                        cours: 80
                    }, {
                        _id: 63,
                        libelle: "mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet,",
                        cours: 55
                    }, {
                        _id: 64,
                        libelle: "sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis,",
                        cours: 82
                    }, {
                        _id: 65,
                        libelle: "vel, vulputate eu, odio. Phasellus at augue id ante dictum",
                        cours: 88
                    }, {
                        _id: 66,
                        libelle: "odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat",
                        cours: 56
                    }, {
                        _id: 67,
                        libelle: "varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla",
                        cours: 3
                    }, {
                        _id: 68,
                        libelle: "neque sed sem egestas blandit. Nam nulla magna, malesuada vel,",
                        cours: 47
                    }, {
                        _id: 69,
                        libelle: "erat. Sed nunc est, mollis non, cursus non, egestas a,",
                        cours: 20
                    }, {
                        _id: 70,
                        libelle: "tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id,",
                        cours: 4
                    }, {
                        _id: 71,
                        libelle: "est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada",
                        cours: 37
                    }, {
                        _id: 72,
                        libelle: "molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare",
                        cours: 32
                    }, {
                        _id: 73,
                        libelle: "sodales nisi magna sed dui. Fusce aliquam, enim nec tempus",
                        cours: 97
                    }, {
                        _id: 74,
                        libelle: "et malesuada fames ac turpis egestas. Fusce aliquet magna a",
                        cours: 69
                    }, {
                        _id: 75,
                        libelle: "non enim. Mauris quis turpis vitae purus gravida sagittis. Duis",
                        cours: 91
                    }, {
                        _id: 76,
                        libelle: "id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis",
                        cours: 62
                    }, {
                        _id: 77,
                        libelle: "neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede",
                        cours: 78
                    }, {
                        _id: 78,
                        libelle: "et nunc. Quisque ornare tortor at risus. Nunc ac sem",
                        cours: 29
                    }, {
                        _id: 79,
                        libelle: "vitae diam. Proin dolor. Nulla semper tellus id nunc interdum",
                        cours: 8
                    }, {
                        _id: 80,
                        libelle: "ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend",
                        cours: 25
                    }, {
                        _id: 81,
                        libelle: "convallis est, vitae sodales nisi magna sed dui. Fusce aliquam,",
                        cours: 24
                    }, {
                        _id: 82,
                        libelle: "erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus",
                        cours: 61
                    }, {
                        _id: 83,
                        libelle: "diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer",
                        cours: 98
                    }, {
                        _id: 84,
                        libelle: "at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas",
                        cours: 94
                    }, {
                        _id: 85,
                        libelle: "sodales elit erat vitae risus. Duis a mi fringilla mi",
                        cours: 42
                    }, {
                        _id: 86,
                        libelle: "morbi tristique senectus et netus et malesuada fames ac turpis",
                        cours: 47
                    }, {
                        _id: 87,
                        libelle: "ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin",
                        cours: 18
                    }, {
                        _id: 88,
                        libelle: "Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non,",
                        cours: 15
                    }, {
                        _id: 89,
                        libelle: "Mauris molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper,",
                        cours: 47
                    }, {
                        _id: 90,
                        libelle: "tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat.",
                        cours: 43
                    }, {
                        _id: 91,
                        libelle: "amet ornare lectus justo eu arcu. Morbi sit amet massa.",
                        cours: 77
                    }, {
                        _id: 92,
                        libelle: "augue ac ipsum. Phasellus vitae mauris sit amet lorem semper",
                        cours: 44
                    }, {
                        _id: 93,
                        libelle: "eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit",
                        cours: 72
                    }, {
                        _id: 94,
                        libelle: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames",
                        cours: 99
                    }, {
                        _id: 95,
                        libelle: "nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc.",
                        cours: 83
                    }, {
                        _id: 96,
                        libelle: "aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam",
                        cours: 23
                    }, {
                        _id: 97,
                        libelle: "odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque",
                        cours: 36
                    }, {
                        _id: 98,
                        libelle: "id, blandit at, nisi. Cum sociis natoque penatibus et magnis",
                        cours: 57
                    }, {
                        _id: 99,
                        libelle: "facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo",
                        cours: 55
                    }, {
                        _id: 100,
                        libelle: "ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis",
                        cours: 69
                    }, {
                        _id: 101,
                        libelle: "sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
                        cours: 50
                    }, {
                        _id: 102,
                        libelle: "lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis",
                        cours: 47
                    }, {
                        _id: 103,
                        libelle: "Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla",
                        cours: 70
                    }, {
                        _id: 104,
                        libelle: "enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin",
                        cours: 21
                    }, {
                        _id: 105,
                        libelle: "Duis a mi fringilla mi lacinia mattis. Integer eu lacus.",
                        cours: 97
                    }, {
                        _id: 106,
                        libelle: "taciti sociosqu ad litora torquent per conubia nostra, per inceptos",
                        cours: 94
                    }, {
                        _id: 107,
                        libelle: "tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi.",
                        cours: 58
                    }, {
                        _id: 108,
                        libelle: "Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat",
                        cours: 2
                    }, {
                        _id: 109,
                        libelle: "amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing",
                        cours: 78
                    }, {
                        _id: 110,
                        libelle: "Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus",
                        cours: 88
                    }, {
                        _id: 111,
                        libelle: "elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec",
                        cours: 100
                    }, {
                        _id: 112,
                        libelle: "penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin",
                        cours: 34
                    }, {
                        _id: 113,
                        libelle: "elit sed consequat auctor, nunc nulla vulputate dui, nec tempus",
                        cours: 30
                    }, {
                        _id: 114,
                        libelle: "quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla.",
                        cours: 34
                    }, {
                        _id: 115,
                        libelle: "Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum",
                        cours: 95
                    }, {
                        _id: 116,
                        libelle: "consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam",
                        cours: 49
                    }, {
                        _id: 117,
                        libelle: "Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio.",
                        cours: 98
                    }, {
                        _id: 118,
                        libelle: "tellus justo sit amet nulla. Donec non justo. Proin non",
                        cours: 39
                    }, {
                        _id: 119,
                        libelle: "ornare lectus justo eu arcu. Morbi sit amet massa. Quisque",
                        cours: 6
                    }, {
                        _id: 120,
                        libelle: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
                        cours: 31
                    }, {
                        _id: 121,
                        libelle: "Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi",
                        cours: 44
                    }, {
                        _id: 122,
                        libelle: "commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac,",
                        cours: 82
                    }, {
                        _id: 123,
                        libelle: "commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac,",
                        cours: 29
                    }, {
                        _id: 124,
                        libelle: "Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus,",
                        cours: 81
                    }, {
                        _id: 125,
                        libelle: "mus. Proin vel arcu eu odio tristique pharetra. Quisque ac",
                        cours: 62
                    }, {
                        _id: 126,
                        libelle: "fames ac turpis egestas. Fusce aliquet magna a neque. Nullam",
                        cours: 99
                    }, {
                        _id: 127,
                        libelle: "vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat",
                        cours: 15
                    }, {
                        _id: 128,
                        libelle: "tellus faucibus leo, in lobortis tellus justo sit amet nulla.",
                        cours: 55
                    }, {
                        _id: 129,
                        libelle: "nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor",
                        cours: 57
                    }, {
                        _id: 130,
                        libelle: "neque sed sem egestas blandit. Nam nulla magna, malesuada vel,",
                        cours: 60
                    }, {
                        _id: 131,
                        libelle: "consequat, lectus sit amet luctus vulputate, nisi sem semper erat,",
                        cours: 89
                    }, {
                        _id: 132,
                        libelle: "nunc. In at pede. Cras vulputate velit eu sem. Pellentesque",
                        cours: 33
                    }, {
                        _id: 133,
                        libelle: "lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in",
                        cours: 19
                    }, {
                        _id: 134,
                        libelle: "in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus",
                        cours: 40
                    }, {
                        _id: 135,
                        libelle: "sit amet, consectetuer adipiscing elit. Aliquam auctor, velit eget laoreet",
                        cours: 7
                    }, {
                        _id: 136,
                        libelle: "Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum.",
                        cours: 67
                    }, {
                        _id: 137,
                        libelle: "Cras eget nisi dictum augue malesuada malesuada. Integer id magna",
                        cours: 21
                    }, {
                        _id: 138,
                        libelle: "dis parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque",
                        cours: 42
                    }, {
                        _id: 139,
                        libelle: "Nulla semper tellus id nunc interdum feugiat. Sed nec metus",
                        cours: 71
                    }, {
                        _id: 140,
                        libelle: "dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies",
                        cours: 80
                    }, {
                        _id: 141,
                        libelle: "purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis",
                        cours: 49
                    }, {
                        _id: 142,
                        libelle: "sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.",
                        cours: 70
                    }, {
                        _id: 143,
                        libelle: "lorem vitae odio sagittis semper. Nam tempor diam dictum sapien.",
                        cours: 17
                    }, {
                        _id: 144,
                        libelle: "adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc",
                        cours: 27
                    }, {
                        _id: 145,
                        libelle: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet,",
                        cours: 39
                    }, {
                        _id: 146,
                        libelle: "adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu",
                        cours: 5
                    }, {
                        _id: 147,
                        libelle: "Cras eu tellus eu augue porttitor interdum. Sed auctor odio",
                        cours: 90
                    }, {
                        _id: 148,
                        libelle: "ut odio vel est tempor bibendum. Donec felis orci, adipiscing",
                        cours: 18
                    }, {
                        _id: 149,
                        libelle: "dui. Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate",
                        cours: 50
                    }, {
                        _id: 150,
                        libelle: "dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In",
                        cours: 25
                    }, {
                        _id: 151,
                        libelle: "dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero.",
                        cours: 38
                    }, {
                        _id: 152,
                        libelle: "suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis",
                        cours: 13
                    }, {
                        _id: 153,
                        libelle: "eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in",
                        cours: 57
                    }, {
                        _id: 154,
                        libelle: "Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra.",
                        cours: 75
                    }, {
                        _id: 155,
                        libelle: "montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc",
                        cours: 64
                    }, {
                        _id: 156,
                        libelle: "cursus, diam at pretium aliquet, metus urna convallis erat, eget",
                        cours: 46
                    }, {
                        _id: 157,
                        libelle: "sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis",
                        cours: 81
                    }, {
                        _id: 158,
                        libelle: "eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit",
                        cours: 55
                    }, {
                        _id: 159,
                        libelle: "eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc",
                        cours: 57
                    }, {
                        _id: 160,
                        libelle: "libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus",
                        cours: 48
                    }, {
                        _id: 161,
                        libelle: "pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi.",
                        cours: 60
                    }, {
                        _id: 162,
                        libelle: "Cras eu tellus eu augue porttitor interdum. Sed auctor odio",
                        cours: 88
                    }, {
                        _id: 163,
                        libelle: "non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat",
                        cours: 7
                    }, {
                        _id: 164,
                        libelle: "ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet",
                        cours: 37
                    }, {
                        _id: 165,
                        libelle: "Cras sed leo. Cras vehicula aliquet libero. Integer in magna.",
                        cours: 77
                    }, {
                        _id: 166,
                        libelle: "ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo",
                        cours: 8
                    }, {
                        _id: 167,
                        libelle: "Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi",
                        cours: 85
                    }, {
                        _id: 168,
                        libelle: "sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo",
                        cours: 23
                    }, {
                        _id: 169,
                        libelle: "non enim. Mauris quis turpis vitae purus gravida sagittis. Duis",
                        cours: 31
                    }, {
                        _id: 170,
                        libelle: "tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio.",
                        cours: 78
                    }, {
                        _id: 171,
                        libelle: "nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim",
                        cours: 27
                    }, {
                        _id: 172,
                        libelle: "diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae,",
                        cours: 25
                    }, {
                        _id: 173,
                        libelle: "ac mattis velit justo nec ante. Maecenas mi felis, adipiscing",
                        cours: 89
                    }, {
                        _id: 174,
                        libelle: "lacus vestibulum lorem, sit amet ultricies sem magna nec quam.",
                        cours: 46
                    }, {
                        _id: 175,
                        libelle: "at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque",
                        cours: 62
                    }, {
                        _id: 176,
                        libelle: "bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus",
                        cours: 94
                    }, {
                        _id: 177,
                        libelle: "tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat.",
                        cours: 44
                    }, {
                        _id: 178,
                        libelle: "magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu",
                        cours: 10
                    }, {
                        _id: 179,
                        libelle: "facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus",
                        cours: 5
                    }, {
                        _id: 180,
                        libelle: "felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla.",
                        cours: 91
                    }, {
                        _id: 181,
                        libelle: "Duis sit amet diam eu dolor egestas rhoncus. Proin nisl",
                        cours: 36
                    }, {
                        _id: 182,
                        libelle: "est ac facilisis facilisis, magna tellus faucibus leo, in lobortis",
                        cours: 100
                    }, {
                        _id: 183,
                        libelle: "id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut",
                        cours: 75
                    }, {
                        _id: 184,
                        libelle: "varius et, euismod et, commodo at, libero. Morbi accumsan laoreet",
                        cours: 41
                    }, {
                        _id: 185,
                        libelle: "arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut",
                        cours: 14
                    }, {
                        _id: 186,
                        libelle: "Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna.",
                        cours: 57
                    }, {
                        _id: 187,
                        libelle: "lectus pede et risus. Quisque libero lacus, varius et, euismod",
                        cours: 25
                    }, {
                        _id: 188,
                        libelle: "neque. Nullam ut nisi a odio semper cursus. Integer mollis.",
                        cours: 76
                    }, {
                        _id: 189,
                        libelle: "sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut",
                        cours: 48
                    }, {
                        _id: 190,
                        libelle: "justo sit amet nulla. Donec non justo. Proin non massa",
                        cours: 11
                    }, {
                        _id: 191,
                        libelle: "adipiscing, enim mi tempor lorem, eget mollis lectus pede et",
                        cours: 53
                    }, {
                        _id: 192,
                        libelle: "sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy",
                        cours: 68
                    }, {
                        _id: 193,
                        libelle: "nisi sem semper erat, in consectetuer ipsum nunc id enim.",
                        cours: 18
                    }, {
                        _id: 194,
                        libelle: "Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed",
                        cours: 36
                    }, {
                        _id: 195,
                        libelle: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames",
                        cours: 33
                    }, {
                        _id: 196,
                        libelle: "ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed",
                        cours: 68
                    }, {
                        _id: 197,
                        libelle: "a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque",
                        cours: 50
                    }, {
                        _id: 198,
                        libelle: "augue porttitor interdum. Sed auctor odio a purus. Duis elementum,",
                        cours: 65
                    }, {
                        _id: 199,
                        libelle: "Sed eget lacus. Mauris non dui nec urna suscipit nonummy.",
                        cours: 33
                    }, {
                        _id: 200,
                        libelle: "pede. Cum sociis natoque penatibus et magnis dis parturient montes,",
                        cours: 86
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
                        name: 'Détail STIC3'
                    }, {
                        name: 'Détail MASTER'
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