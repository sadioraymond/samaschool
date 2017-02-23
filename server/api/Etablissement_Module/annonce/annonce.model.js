'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './annonce.events';

var AnnonceSchema = new mongoose.Schema({
    name: String
});

registerEvents(AnnonceSchema);
export default mongoose.model('Annonce', AnnonceSchema);