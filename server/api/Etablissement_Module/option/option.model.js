'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './option.events';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var OptionSchema = new mongoose.Schema({
    _id: Number,
    libelle: String,
    filiere: {
        type: Number,
        ref: 'Filiere'
    }
});
OptionSchema.plugin(autoIncrement.plugin, 'Option');
registerEvents(OptionSchema);
export default mongoose.model('Option', OptionSchema);