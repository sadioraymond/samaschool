'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './exercice.events';
import ParentModele from '../publication/publication.model';
var extend = require('mongoose-schema-extend');
var PublicationSchema = ParentModele.Modele();
var ExerciceSchema = PublicationSchema.extend({
    exercice: String
});

registerEvents(ExerciceSchema);
export default mongoose.model('Exercice', ExerciceSchema);