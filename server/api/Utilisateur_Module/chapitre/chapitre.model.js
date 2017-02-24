'use strict';

import mongoose from 'mongoose';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
import { registerEvents } from './chapitre.events';

var ChapitreSchema = new mongoose.Schema({
    id : Number,
    libelle : String,
    cours : {
        type : Number,
        ref : 'Cours'
    }
});

registerEvents(ChapitreSchema);
ChapitreSchema.plugin(autoIncrement.plugin, 'Chapitre');
export default mongoose.model('Chapitre', ChapitreSchema);