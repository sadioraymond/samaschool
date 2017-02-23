'use strict';

import mongoose from 'mongoose';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
import { registerEvents } from './chapitre.events';

var ChapitreSchema = new mongoose.Schema({
    name: String,
    info: String,
    active: Boolean
});

registerEvents(ChapitreSchema);
ChapitreSchema.plugin(autoIncrement.plugin, 'Chapitre');
export default mongoose.model('Chapitre', ChapitreSchema);