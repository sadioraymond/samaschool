'use strict';
const angular = require('angular');

export class annoncesComponent {
    /*@ngInject*/
    modifyAnnonce = false;
    ima;
    imag;
    currentdate = new Date();
    datetime;
    images;
    stateImage = false;
    annonceAModifier = {};
    constructor($stateParams, annonceProvider, jsFonctions, ouvreDialogProvider, etablissementProvider, $state) {
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.annonceProvider = annonceProvider;
        this.etablissementProvider = etablissementProvider;
        this.jsFonctions = jsFonctions;
        this.ouvreDialogProvider = ouvreDialogProvider;
        this.modifyAnnonce = false;
        this.datetime = this.currentdate.getFullYear() + "-" + (this.currentdate.getMonth() + 1) + "-" + this.currentdate.getDate();
    }

    $onInit() {
        angular.element(document)
            .ready(() => {
                setTimeout(() => {
                    this.jsFonctions.pluginScript();
                    this.jsFonctions.otherScript();
                }, 0);
            });
        setTimeout(() => {
            var fichier = document.querySelector('#a');
            fichier.addEventListener('change', (e) => {
                let fichier = e.target.files[0]
                if (fichier.type.indexOf('image') > -1) {
                    var lecteur = new FileReader();
                    lecteur.onload = (e) => {
                        this.stateImage = true;
                        // console.log('log', e);
                        let img = document.querySelector(`#myimg${this.slider.idAnnonce}`);
                        img.setAttribute('ng-style', '');
                        img.setAttribute('style', `background: url(${e.target.result}) center center no-repeat; background-size: cover`);
                        console.log('imgtag', img);
                        console.log('ready', lecteur.readyState);
                    }
                    lecteur.readAsDataURL(fichier);
                    this.ima = fichier.type.split('/').pop();
                    this.imag = Date.now() + '.' + this.ima;
                    console.log('bandi bi', fichier);
                    console.log('readystate', lecteur.readyState);
                } else {
                    alert('Ce n\'est pas une image');
                }
            }, false);
        }, 50);
        //récupération des annonces par rapoort à létablissemnent en cours
        this.annonceProvider.getAnnonceByEtab(this.$stateParams.id).then(annonces => {
            this.LesAnnoncesParEtab = annonces;
            console.log('Les annonces =>', annonces);
        });
    }
    ouvreDialog() {
        $('#a').click();
    }
    modifyAnnonceClick(annonce) {
        if (!this.modifyAnnonce) {
            this.annonceAModifier = annonce;
            console.log('annonce =>', annonce)
                //   console.log('annonce =>', this.LesAnnoncesParEtab[this.slider.index])
            console.log('slide =>', this.slider)
            this.modifyAnnonce = true;
            this.titreAnnonceAModifier = annonce.titre;
            this.idannonce = annonce._id;
            this.descriptionAnnonceAModifier = annonce.contenu;
            this.imageannoce = annonce.images;
        } else {
            this.modifyAnnonce = false;
        }
    }
    modifAnnonce() {
        if (this.stateImage) {
            console.log('1');
            this.images = this.titreAnnonceAModifier + this.imag;
            document.querySelector("#editannonceform").action = `/etablissement/${this.images}`;
            $('#editannonceform').submit();
            this.annonceProvider.modifierAnnonce(this.idannonce, this.descriptionAnnonceAModifier, this.images, this.titreAnnonceAModifier);
            if (this.imageannoce !== "imageParDefautAnnonce.png") {
                this.etablissementProvider.deleteFichier(this.imageannoce);
            }
            console.log('image bi', this.imageannoce);
        } else {
            console.log('2');
            this.images = this.imageannoce;
            this.annonceProvider.modifierAnnonce(this.idannonce, this.descriptionAnnonceAModifier, this.images, this.titreAnnonceAModifier);
        }
        console.log(this.LesAnnoncesParEtab)
            // quitter le design modification apres avoir modifier
        this.modifyAnnonce = false;

        // modification a la main du titre et du contenu de l'annonce en question dans la liste 
        this.LesAnnoncesParEtab[this.slider.index].titre = this.titreAnnonceAModifier;
        this.LesAnnoncesParEtab[this.slider.index].contenu = this.descriptionAnnonceAModifier;

    }

    supprimerAnnonce(annonce) {
        console.log(annonce)
        if (confirm('Etes vous sûre?')) {
            //cette fonction doit prendre en paramétre l'id de lannonce
            this.annonceProvider.supprimerAnnonce(annonce._id);
            if (annonce.images !== "imageParDefautAnnonce.png") {
                //cette fonction doit prendre en paramétre le nom de l'image de l'annonce courante
                this.etablissementProvider.deleteFichier(annonce.images);
                console.log('Image Supprimé');
            }
            //suppression a la main de l'element en question dans la liste
            this.LesAnnoncesParEtab.splice(this.slider.index, 1)
        }
    }

}
annoncesComponent.$inject = ["$stateParams", "annonceProvider", "jsFonctions", "ouvreDialogProvider", "etablissementProvider", "$state"];
export default angular.module('samaschoolApp.annonces', [])
    .component('annonces', {
        template: require('./annonces.html'),
        bindings: {
            message: '<'
        },
        controller: annoncesComponent,
        controllerAs: 'vm'
    })
    .name;