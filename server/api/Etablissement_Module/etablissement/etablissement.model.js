'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './etablissement.events';

var EtablissementSchema = new mongoose.Schema({
    name: String,
    active: Boolean
});

registerEvents(EtablissementSchema);
export default mongoose.model('Etablissement', EtablissementSchema);