'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './suivi_cours_classe.events';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var SuiviCoursClasseSchema = new mongoose.Schema({
    _id: Number,
    publication: {
        type: Number,
        ref: 'Cours'
    },
    classe: {
        type: Number,
        ref: 'Classe'
    },
    date: Date
});
SuiviCoursClasseSchema.plugin(autoIncrement.plugin, 'SuiviCoursClasse');
registerEvents(SuiviCoursClasseSchema);
export default mongoose.model('SuiviCoursClasse', SuiviCoursClasseSchema);