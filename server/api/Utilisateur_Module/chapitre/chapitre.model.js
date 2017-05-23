'use strict';

import mongoose from 'mongoose';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
import { registerEvents } from './chapitre.events';

var ChapitreSchema = new mongoose.Schema({
    _id: Number,
    libelle: String,
    objectif: String,
    cours: {
        type: Number,
        ref: 'Cours'
    },
    link: String,
    contenu: String,
});

registerEvents(ChapitreSchema);
ChapitreSchema.plugin(autoIncrement.plugin, 'Chapitre');
export default mongoose.model('Chapitre', ChapitreSchema);