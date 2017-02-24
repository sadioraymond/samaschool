'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './sous_categorie.events';

var SousCategorieSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

registerEvents(SousCategorieSchema);
export default mongoose.model('SousCategorie', SousCategorieSchema);
