'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './detail_annonce.events';

var DetailAnnonceSchema = new mongoose.Schema({
    name: String
});

registerEvents(DetailAnnonceSchema);
export default mongoose.model('DetailAnnonce', DetailAnnonceSchema);