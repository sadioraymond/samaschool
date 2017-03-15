'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './cours.events';
import ParentModele from '../publication/publication.model';
var extend = require('mongoose-schema-extend');
var PublicationSchema = ParentModele.Modele();
var CoursSchema = PublicationSchema.extend({
    contenu: String,
    status: String
});

registerEvents(CoursSchema);
export default mongoose.model('Cours', CoursSchema);