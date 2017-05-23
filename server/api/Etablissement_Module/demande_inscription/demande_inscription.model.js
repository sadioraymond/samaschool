'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './demande_inscription.events';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var DemandeInscriptionSchema = new mongoose.Schema({
    _id: Number,
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    etablissement: {
        type: Number,
        ref: 'Etablissement'
    },
    Valide: Boolean
});
DemandeInscriptionSchema.plugin(autoIncrement.plugin, 'DemandeInscription');
registerEvents(DemandeInscriptionSchema);
export default mongoose.model('DemandeInscription', DemandeInscriptionSchema);