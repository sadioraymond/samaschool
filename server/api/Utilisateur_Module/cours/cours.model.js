'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './cours.events';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var CoursSchema = new mongoose.Schema({
    _id: Number,
    description: String,
    contenu: String,
    date_creation: Date,
    sous_categorie: {
        type: Number,
        ref: 'SousCategorie'
    },
    status: String,
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    }
});

registerEvents(CoursSchema);
CoursSchema.plugin(autoIncrement.plugin, 'Cours');
export default mongoose.model('Cours', CoursSchema);