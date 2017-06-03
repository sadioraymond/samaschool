'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './fichier.events';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var FichierSchema = new mongoose.Schema({
    _id: Number,
});
FichierSchema.plugin(autoIncrement.plugin, 'Fichier');
registerEvents(FichierSchema);
export default mongoose.model('Fichier', FichierSchema);