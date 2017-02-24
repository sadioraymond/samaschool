'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './detail_profil.events';
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
var DetailProfilSchema = new mongoose.Schema({
  id : Number,
  user : {
    type : Number,
    ref : 'User'
  },
  cours : {
    type : Number,
    ref : 'Cours'
  },
  date : Date
});
registerEvents(DetailProfilSchema);
DetailProfilSchema.plugin(autoIncrement.plugin, 'DetailProfil');
export default mongoose.model('DetailProfil', DetailProfilSchema);
