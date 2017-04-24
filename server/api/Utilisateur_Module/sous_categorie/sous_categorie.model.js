'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './sous_categorie.events';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var SousCategorieSchema = new mongoose.Schema({
    _id: Number,
    libelle: String,
    categorie: {
        type: Number,
        ref: 'Categorie'
    }
});
SousCategorieSchema.plugin(autoIncrement.plugin, 'SousCategorie');
registerEvents(SousCategorieSchema);
export default mongoose.model('SousCategorie', SousCategorieSchema);