'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './preference.events';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var PreferenceSchema = new mongoose.Schema({
    _id: Number,
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    sous_categorie: {
        type: Number,
        ref: 'SousCategorie'
    },
    date: Date
});
PreferenceSchema.plugin(autoIncrement.plugin, 'Preference');
registerEvents(PreferenceSchema);
export default mongoose.model('Preference', PreferenceSchema);