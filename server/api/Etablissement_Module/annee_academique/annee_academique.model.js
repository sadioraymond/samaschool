'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './annee_academique.events';

var AnneeAcademiqueSchema = new mongoose.Schema({
    name: String
});

registerEvents(AnneeAcademiqueSchema);
export default mongoose.model('AnneeAcademique', AnneeAcademiqueSchema);