/**
 * DemandeInscription model events
 */

'use strict';

import {EventEmitter} from 'events';
var DemandeInscriptionEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
DemandeInscriptionEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(DemandeInscription) {
  for(var e in events) {
    let event = events[e];
    DemandeInscription.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    DemandeInscriptionEvents.emit(event + ':' + doc._id, doc);
    DemandeInscriptionEvents.emit(event, doc);
  };
}

export {registerEvents};
export default DemandeInscriptionEvents;
