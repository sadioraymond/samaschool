'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './suivi_cours.events';

var SuiviCoursSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

registerEvents(SuiviCoursSchema);
export default mongoose.model('SuiviCours', SuiviCoursSchema);
