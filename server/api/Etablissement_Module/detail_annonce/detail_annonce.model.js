'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './detail_annonce.events';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var DetailAnnonceSchema = new mongoose.Schema({
    _id: Number,
    classe: {
        type: Number,
        ref: 'Classe'
    },
    annonce: {
        type: Number,
        ref: 'Annonce'
    },
    date: Date
});
DetailAnnonceSchema.plugin(autoIncrement.plugin, 'DetailAnnonce');
registerEvents(DetailAnnonceSchema);
export default mongoose.model('DetailAnnonce', DetailAnnonceSchema);