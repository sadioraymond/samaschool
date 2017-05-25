'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './faculte.events';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var FaculteSchema = new mongoose.Schema({
    _id: Number,
    libelle: String,
    cycle: {
        type: Number,
        ref: 'DetailCycle'
    }
});
FaculteSchema.plugin(autoIncrement.plugin, 'Faculte');
registerEvents(FaculteSchema);
export default mongoose.model('Faculte', FaculteSchema);