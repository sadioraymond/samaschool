'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './suivi_cours_classe.events';

var SuiviCoursClasseSchema = new mongoose.Schema({
    name: String
});

registerEvents(SuiviCoursClasseSchema);
export default mongoose.model('SuiviCoursClasse', SuiviCoursClasseSchema);