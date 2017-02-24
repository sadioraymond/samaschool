'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './detail_classe.events';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var DetailClasseSchema = new mongoose.Schema({
    _id: Number,
    classe: {
        type: Number,
        ref: 'Classe'
    },
    etablissement: {
        type: Number,
        ref: 'Etablissement'
    },
    date: Date
});
DetailClasseSchema.plugin(autoIncrement.plugin, 'DetailClasse');
registerEvents(DetailClasseSchema);
export default mongoose.model('DetailClasse', DetailClasseSchema);