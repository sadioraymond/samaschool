'use strict';

import mongoose from 'mongoose';
import { registerEvents } from './publication.events';
var extend = require('mongoose-schema-extend');
//var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose);
exports.Modele = function() {
    var PublicationSchema = new mongoose.Schema({
        _id: Number,
        titre: String,
        description: String,
        date_creation: Date,
        sous_categorie: {
            type: Number,
            ref: 'SousCategorie'
        },
        user: {
            type: mongoose.Schema.ObjectId,
            ref: 'User'
        },
        status: String
    }, { collection: 'Publication', discriminatorKey: 'Genre' });
    registerEvents(PublicationSchema);
    PublicationSchema.plugin(autoIncrement.plugin, 'Publication');
    return PublicationSchema;
}