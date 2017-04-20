'use strict';
const angular = require('angular');

/*@ngInject*/
export function ouvreDialogService() {
  // AngularJS will instantiate a singleton by calling "new" on this function
  this.uploadFile = function (e, imgTag) {
    let fichier = e.target.files[0]
    if (fichier.type.indexOf('image') > -1) {
      var lecteur = new FileReader();
      lecteur.onload = function (e) {
        console.log('log', e);
        let img = document.querySelector(`#${imgTag}`);
        img.setAttribute('src', e.target.result);
        img.setAttribute('ng-src', '');
        console.log('imgtag', img);
        console.log('ready', lecteur.readyState);
      }
      lecteur.readAsDataURL(fichier);
      console.log('bandi bi', fichier);
      console.log('readystate', lecteur.readyState);
    } else {
      alert('Ce n\'est pas une image');
    }
    // console.log('target', e.target.files);
  }
}

export default angular.module('samaschoolApp.ouvreDialog', [])
  .service('ouvreDialog', ouvreDialogService)
  .name;
