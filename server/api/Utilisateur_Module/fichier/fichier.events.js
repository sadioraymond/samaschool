/**
 * Fichier model events
 */

'use strict';

import {EventEmitter} from 'events';
var FichierEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
FichierEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Fichier) {
  for(var e in events) {
    let event = events[e];
    Fichier.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    FichierEvents.emit(event + ':' + doc._id, doc);
    FichierEvents.emit(event, doc);
  };
}

export {registerEvents};
export default FichierEvents;
