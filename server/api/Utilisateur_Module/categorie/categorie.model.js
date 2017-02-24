'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './categorie.events';

var CategorieSchema = new mongoose.Schema({
    _id: Number,
    libelle: String

});

registerEvents(CategorieSchema);
export default mongoose.model('Categorie', CategorieSchema);