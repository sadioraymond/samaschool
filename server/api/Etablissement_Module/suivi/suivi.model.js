'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './suivi.events';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var SuiviSchema = new mongoose.Schema({
    _id: Number,
    id_user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    id_prof: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    active: Boolean,
    date: Date,
});
SuiviSchema.plugin(autoIncrement.plugin, 'Suivi');
registerEvents(SuiviSchema);
export default mongoose.model('Suivi', SuiviSchema);