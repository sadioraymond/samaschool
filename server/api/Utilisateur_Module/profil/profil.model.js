'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './profil.events';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var ProfilSchema = new mongoose.Schema({
  id : Number,
  libelle : String
});

registerEvents(ProfilSchema);
ProfilSchema.plugin(autoIncrement.plugin, 'Profil');
export default mongoose.model('Profil', ProfilSchema);
