/**
 * Niveau model events
 */

'use strict';

import {EventEmitter} from 'events';
var NiveauEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
NiveauEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Niveau) {
  for(var e in events) {
    let event = events[e];
    Niveau.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    NiveauEvents.emit(event + ':' + doc._id, doc);
    NiveauEvents.emit(event, doc);
  };
}

export {registerEvents};
export default NiveauEvents;
