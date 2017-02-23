'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './classe.events';

var ClasseSchema = new mongoose.Schema({
    name: String
});

registerEvents(ClasseSchema);
export default mongoose.model('Classe', ClasseSchema);