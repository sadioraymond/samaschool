'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './equipe.events';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
const authTypes = ['github', 'twitter', 'facebook', 'google'];
var EquipeSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    images: String,
    email: {
        type: String,
        lowercase: true,
        required() {
            if (authTypes.indexOf(this.provider) === -1) {
                return true;
            } else {
                return false;
            }
        }
    },
    adresse: String,
    fonction: String,
    Etablissement: {
        type: Number,
        ref: 'Etablissement'
    }
});
EquipeSchema.plugin(autoIncrement.plugin, 'Equipe');
registerEvents(EquipeSchema);
export default mongoose.model('Equipe', EquipeSchema);