'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './etablissement.events';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var EtablissementSchema = new mongoose.Schema({
    _id: Number,
    libelle: String,
    adresse: String,
    tel: String,
    email: String,
    images: String,
    imagecouverture: String,
    description: String
});
EtablissementSchema.plugin(autoIncrement.plugin, 'Etablissement');
registerEvents(EtablissementSchema);
export default mongoose.model('Etablissement', EtablissementSchema);