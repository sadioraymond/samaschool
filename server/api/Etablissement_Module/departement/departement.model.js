'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './departement.events';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var DepartementSchema = new mongoose.Schema({
    _id: Number,
    libelle: String,
    faculte: {
        type: Number,
        ref: 'Faculte'
    }
});
DepartementSchema.plugin(autoIncrement.plugin, 'Departement');
registerEvents(DepartementSchema);
export default mongoose.model('Departement', DepartementSchema);