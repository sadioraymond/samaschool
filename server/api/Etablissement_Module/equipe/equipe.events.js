/**
 * Equipe model events
 */

'use strict';

import {EventEmitter} from 'events';
var EquipeEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
EquipeEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Equipe) {
  for(var e in events) {
    let event = events[e];
    Equipe.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    EquipeEvents.emit(event + ':' + doc._id, doc);
    EquipeEvents.emit(event, doc);
  };
}

export {registerEvents};
export default EquipeEvents;
