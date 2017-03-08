'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './detail_user.events';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var DetailUserSchema = new mongoose.Schema({
    _id: Number,
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    etablissement: {
        type: Number,
        ref: 'Etablissement'
    },
    dateentree: Date,
    suivre: Boolean,
    active: Boolean
});
DetailUserSchema.plugin(autoIncrement.plugin, 'DetailUser');
registerEvents(DetailUserSchema);
export default mongoose.model('DetailUser', DetailUserSchema);