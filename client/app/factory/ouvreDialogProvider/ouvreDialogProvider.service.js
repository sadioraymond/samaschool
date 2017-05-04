'use strict';
const angular = require('angular');

/*@ngInject*/
export function ouvreDialogProviderService() {
  // AngularJS will instantiate a singleton by calling "new" on this function
  this.uploadFile = function (e, imgTag, style, url) {
      console.log('url =>', url)
    let fichier = e.target.files[0]
    if (fichier.type.indexOf('image') > -1) {
      var lecteur = new FileReader();
      lecteur.onload = function (e) {
        console.log('log', e);
        let img = document.querySelector(`#${imgTag}`);
        if (!style) {
          img.setAttribute('src', e.target.result);
          img.setAttribute('ng-src', '');
        } else {
          let objStyle = `{'background-image': 'url(assets/images/upload/${url}/${e.target.result})'}`
          img.setAttribute('style', `background-image:url('assets/upload/Etablissement/${e.target.result}'); height: 500px; border-bottom: 4px solid #fff; background-size: cover`);
        //   img.setAttribute('style', '');
          //   img.setAttribute('ng-src', '');
        }
        console.log('imgtag', img);
        console.log('ready', lecteur.readyState);
      }
      lecteur.readAsDataURL(fichier);
      console.log('bandi bi', fichier);
      console.log('readystate', lecteur.readyState);
      return fichier;
    } else {
      alert('Ce n\'est pas une image');
    }
    // console.log('target', e.target.files);
  }
}

export default angular.module('samaschoolApp.ouvreDialogProvider', [])
  .service('ouvreDialogProvider', ouvreDialogProviderService)
  .name;
