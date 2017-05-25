'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './classe.events';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var ClasseSchema = new mongoose.Schema({
    _id: Number,
    niveau: {
        type: Number,
        ref: 'Niveau'
    },
    libelle: String,
    etablissement: {
        type: Number,
        ref: 'Etablissement'
    },
    filiere: {
        type: Number,
        ref: 'Filiere'
    }
});
ClasseSchema.plugin(autoIncrement.plugin, 'Classe');
registerEvents(ClasseSchema);
export default mongoose.model('Classe', ClasseSchema);