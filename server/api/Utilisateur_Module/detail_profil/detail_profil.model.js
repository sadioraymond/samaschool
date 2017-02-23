'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './detail_profil.events';

var DetailProfilSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

registerEvents(DetailProfilSchema);
export default mongoose.model('DetailProfil', DetailProfilSchema);
