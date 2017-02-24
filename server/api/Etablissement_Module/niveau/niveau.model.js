'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './niveau.events';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var NiveauSchema = new mongoose.Schema({
    _id: Number,
    libelle: String,
    cycle: {
        type: Number,
        ref: 'Cycle'
    }
});
NiveauSchema.plugin(autoIncrement.plugin, 'Niveau');
registerEvents(NiveauSchema);
export default mongoose.model('Niveau', NiveauSchema);