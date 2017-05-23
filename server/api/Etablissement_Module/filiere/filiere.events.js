/**
 * Filiere model events
 */

'use strict';

import {EventEmitter} from 'events';
var FiliereEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
FiliereEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Filiere) {
  for(var e in events) {
    let event = events[e];
    Filiere.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    FiliereEvents.emit(event + ':' + doc._id, doc);
    FiliereEvents.emit(event, doc);
  };
}

export {registerEvents};
export default FiliereEvents;
