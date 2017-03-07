'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './categorie.events';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var CategorieSchema = new mongoose.Schema({
    _id: Number,
    libelle: String

});
CategorieSchema.plugin(autoIncrement.plugin, 'Categorie');
registerEvents(CategorieSchema);
export default mongoose.model('Categorie', CategorieSchema);