'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './cycle.events';

var CycleSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

registerEvents(CycleSchema);
export default mongoose.model('Cycle', CycleSchema);
