/**
 * Etablissement model events
 */

'use strict';

import {EventEmitter} from 'events';
var EtablissementEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
EtablissementEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Etablissement) {
  for(var e in events) {
    let event = events[e];
    Etablissement.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    EtablissementEvents.emit(event + ':' + doc._id, doc);
    EtablissementEvents.emit(event, doc);
  };
}

export {registerEvents};
export default EtablissementEvents;
