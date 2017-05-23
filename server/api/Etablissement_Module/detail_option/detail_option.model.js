'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './detail_option.events';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var DetailOptionSchema = new mongoose.Schema({
    _id: Number,
    libelle: String,
    option: {
        type: Number,
        ref: 'Option'
    },
    classe: {
        type: Number,
        ref: 'Classe'
    },
    date: Date
});
DetailOptionSchema.plugin(autoIncrement.plugin, 'DetailOption');
registerEvents(DetailOptionSchema);
export default mongoose.model('DetailOption', DetailOptionSchema);