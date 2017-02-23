'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './niveau.events';

var NiveauSchema = new mongoose.Schema({
    name: String,
    active: Boolean
});

registerEvents(NiveauSchema);
export default mongoose.model('Niveau', NiveauSchema);