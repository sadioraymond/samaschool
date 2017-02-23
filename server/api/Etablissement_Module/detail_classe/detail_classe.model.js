'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './detail_classe.events';

var DetailClasseSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

registerEvents(DetailClasseSchema);
export default mongoose.model('DetailClasse', DetailClasseSchema);
