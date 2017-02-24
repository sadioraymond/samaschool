'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './sous_categorie.events';

var SousCategorieSchema = new mongoose.Schema({
  id : Number,
  libelle : String,
  categorie : {
    type : Number,
    ref : 'Categorie'
  }
});

registerEvents(SousCategorieSchema);
export default mongoose.model('SousCategorie', SousCategorieSchema);
