'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './type_fichier.events';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var TypeFichierSchema = new mongoose.Schema({
    _id: Number,
    libelle: String,
});
TypeFichierSchema.plugin(autoIncrement.plugin, 'TypeFichier');
registerEvents(TypeFichierSchema);
export default mongoose.model('TypeFichier', TypeFichierSchema);