'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './filiere.events';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var FiliereSchema = new mongoose.Schema({
    _id: Number,
    libelle: String,
    departement: {
        type: Number,
        ref: 'Departement'
    }
});
FiliereSchema.plugin(autoIncrement.plugin, 'Filiere');
registerEvents(FiliereSchema);
export default mongoose.model('Filiere', FiliereSchema);