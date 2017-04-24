'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './annonce.events';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var AnnonceSchema = new mongoose.Schema({
    _id: Number,
    contenu: String,
    etablissement: {
        type: Number,
        ref: 'Etablissement'
    },
    images: String
});
AnnonceSchema.plugin(autoIncrement.plugin, 'Annonce');
registerEvents(AnnonceSchema);
export default mongoose.model('Annonce', AnnonceSchema);