'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './profil.events';

var ProfilSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

registerEvents(ProfilSchema);
export default mongoose.model('Profil', ProfilSchema);
