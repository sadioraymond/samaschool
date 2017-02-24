'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './annee_academique.events';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var AnneeAcademiqueSchema = new mongoose.Schema({
    _id: Number,
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    classe: {
        type: Number,
        ref: 'Classe'
    },
    annee: String
});
AnneeAcademiqueSchema.plugin(autoIncrement.plugin, 'AnneeAcademique');
registerEvents(AnneeAcademiqueSchema);
export default mongoose.model('AnneeAcademique', AnneeAcademiqueSchema);