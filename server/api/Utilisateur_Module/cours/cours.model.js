'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './cours.events';

var CoursSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

registerEvents(CoursSchema);
export default mongoose.model('Cours', CoursSchema);
