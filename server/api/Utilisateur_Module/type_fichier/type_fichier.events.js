/**
 * TypeFichier model events
 */

'use strict';

import {EventEmitter} from 'events';
var TypeFichierEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
TypeFichierEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(TypeFichier) {
  for(var e in events) {
    let event = events[e];
    TypeFichier.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    TypeFichierEvents.emit(event + ':' + doc._id, doc);
    TypeFichierEvents.emit(event, doc);
  };
}

export {registerEvents};
export default TypeFichierEvents;
