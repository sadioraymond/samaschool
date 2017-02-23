'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './detail_user.events';

var DetailUserSchema = new mongoose.Schema({
    name: String
});

registerEvents(DetailUserSchema);
export default mongoose.model('DetailUser', DetailUserSchema);