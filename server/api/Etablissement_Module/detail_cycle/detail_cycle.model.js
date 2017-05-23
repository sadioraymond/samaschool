'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './detail_cycle.events';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var DetailCycleSchema = new mongoose.Schema({
    _id: Number,
    cycle: {
        type: Number,
        ref: 'Cycle'
    },
    etablissement: {
        type: Number,
        ref: 'Etablissement'
    },
    date: Date
});
DetailCycleSchema.plugin(autoIncrement.plugin, 'DetailCycle');
registerEvents(DetailCycleSchema);
export default mongoose.model('DetailCycle', DetailCycleSchema);