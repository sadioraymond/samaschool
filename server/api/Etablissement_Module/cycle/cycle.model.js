'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './cycle.events';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var CycleSchema = new mongoose.Schema({
    _id: Number,
    libelle: String
});
CycleSchema.plugin(autoIncrement.plugin, 'Cycle');
registerEvents(CycleSchema);
export default mongoose.model('Cycle', CycleSchema);