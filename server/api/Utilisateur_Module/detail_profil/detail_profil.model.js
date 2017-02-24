'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './detail_profil.events';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var DetailProfilSchema = new mongoose.Schema({
    _id: Number,
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    profil: {
        type: Number,
        ref: 'Profil'
    },
    date: Date
});
registerEvents(DetailProfilSchema);
DetailProfilSchema.plugin(autoIncrement.plugin, 'DetailProfil');
export default mongoose.model('DetailProfil', DetailProfilSchema);