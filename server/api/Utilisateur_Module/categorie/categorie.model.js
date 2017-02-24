'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './categorie.events';

var CategorieSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

registerEvents(CategorieSchema);
export default mongoose.model('Categorie', CategorieSchema);
